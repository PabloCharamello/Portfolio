import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";

export function ObjectsMainScene() {
  const gltf = useLoader(GLTFLoader, "/models/ObjectsMainScene.glb");
  return <primitive object={gltf.scene} />;
}
