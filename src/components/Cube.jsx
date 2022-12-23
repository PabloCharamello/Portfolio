import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";

export function Cube() {
  const cube = useLoader(GLTFLoader, "/models/cube.glb");
  return <primitive object={cube.scene} />;
}
