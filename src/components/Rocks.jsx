import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";

export function Rocks() {
  const gltf = useLoader(
    GLTFLoader,
    import.meta.env.BASE_URL + "public/models/rocks.glb"
  );
  return <primitive object={gltf.scene} />;
}
