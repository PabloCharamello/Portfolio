import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";

export function Rocks() {
  const gltf = useLoader(GLTFLoader, "/models/maceta.glb");
  return <primitive object={gltf.scene} />;
}
