import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";

export function Room() {
  const room = useLoader(GLTFLoader, "/models/roomPortfolio13.glb");
  return (
    <primitive
      object={room.scene}
      position={[-12.5, 5.5, -5]}
      rotation={[0, 1.2, 0]}
    />
  );
}
