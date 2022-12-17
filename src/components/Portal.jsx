import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { DoubleSide } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";

export function Portal() {
  const model = useLoader(GLTFLoader, "../../public/models/portal.glb");
  const mask = useLoader(GLTFLoader, "../../public/models/portal_mask.glb");
  console.log(model);
  useEffect(() => {
    if (!model) return;

    let mesh = model.scene.children[0];
    mesh.material.envMapIntensity = 3.5;

    let maskMesh = mask.scene.children[0];
    maskMesh.material.side = DoubleSide;
  }, [model, mask]);

  return (
    <>
      <primitive object={model.scene} />
      <primitive object={mask.scene} />
    </>
  );
}
