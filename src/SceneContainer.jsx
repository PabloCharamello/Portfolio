import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";
import { RoomPortfolio } from "./components/RoomPortfolio";
import { Portal } from "./components/Portal";
import { Rocks } from "./components/Rocks";
import { FloatingRocks } from "./components/FloatingRocks";
import { Trees } from "./components/Trees";
import { Words } from "./components/Words";
import { Grass } from "./components/Grass";

export function SceneContainer() {
  return (
    <Suspense fallback={null}>
      <Environment background={"only"} files={"textures/bg.hdr"} />
      <Environment background={false} files={"textures/envmap.hdr"} />

      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[-1.75, 10.85, 20.35]}
      />
      <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />

      <RoomPortfolio />
      <Portal />
      <Rocks />
      <FloatingRocks />
      <Trees />
      <Words />
      <Grass />
    </Suspense>
  );
}
