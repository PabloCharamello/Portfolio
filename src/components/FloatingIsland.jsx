import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { BufferAttribute, Color } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";

export function FloatingIsland() {
  const gltf = useLoader(
    GLTFLoader,
    import.meta.env.BASE_URL + "public/models/floating_island2.glb"
  );

  useEffect(() => {
    if (!gltf) return;

    let mesh = gltf.scene.children[0];
    var uvs = mesh.geometry.attributes.uv.array;

    mesh.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));
    mesh.material.lightMap = mesh.material.map;
    mesh.material.lightMapIntensity = 400;
    mesh.material.color = new Color(0.04, 0.06, 0.1);
  }, [gltf]);
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
}
