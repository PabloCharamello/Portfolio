import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import {
  Scene,
  WebGLRenderTarget,
  TextureLoader,
  EquirectangularReflectionMapping,
  AlwaysStencilFunc,
  ReplaceStencilOp,
  DoubleSide,
  LinearEncoding,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";
import { FillQuad } from "./FillQuad";

const scene = new Scene();
scene.background = new TextureLoader().load(
  "/textures/galaxy.jpg",
  (texture) => {
    texture.encoding = LinearEncoding;
    texture.mapping = EquirectangularReflectionMapping;
  }
);

const target = new WebGLRenderTarget(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
  target.setSize(window.innerWidth, window.innerHeight);
});

export function Portal() {
  const model = useLoader(GLTFLoader, "/models/portal.glb");
  const mask = useLoader(GLTFLoader, "/models/portal_mask.glb");

  useFrame((state) => {
    state.gl.setRenderTarget(target);
    state.gl.render(scene, state.camera);
    state.gl.setRenderTarget(null);
  });

  useEffect(() => {
    if (!model) return;

    let mesh = model.scene.children[0];
    mesh.material.envMapIntensity = 3.5;

    let maskMesh = mask.scene.children[0];
    maskMesh.material.side = DoubleSide;
    maskMesh.material.transparent = false;
    maskMesh.material.stencilWrite = true;
    maskMesh.material.stencilRef = 1;
    maskMesh.material.stencilFunc = AlwaysStencilFunc;
    maskMesh.material.stencilZPass = ReplaceStencilOp;
  }, [model, mask]);

  return (
    <>
      <primitive object={model.scene} />
      <primitive object={mask.scene} />
      <FillQuad map={target.texture} maskId={1} />
    </>
  );
}
