import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";

export function Trees() {
  const gltf = useLoader(
    GLTFLoader,
    import.meta.env.BASE_URL + "public/models/trees.glb"
  );

  useEffect(() => {
    if (!gltf) return;

    let mesh = gltf.scene.children[0];
    mesh.material.envMapIntensity = 2.5;
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}
