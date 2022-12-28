import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";

export function Cubo() {
  const gltf = useLoader(GLTFLoader, "/models/cubo.glb");
  return <primitive object={gltf.scene} />;
}
