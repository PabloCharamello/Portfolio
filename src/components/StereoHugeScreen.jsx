import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";

export function StereoHugeScreen() {
  const gltf = useLoader(GLTFLoader, "/models/parlantesPantallaGigante.glb");
  return <primitive object={gltf.scene} />;
}
