import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
  SpotLight,
} from "@react-three/drei";

import { Suspense } from "react";
import { FloatingIsland } from "./components/FloatingIsland";
import { Portal } from "./components/Portal";
import { Rocks } from "./components/Rocks";
import { FloatingRocks } from "./components/FloatingRocks";
import { Trees } from "./components/Trees";
import { Words } from "./components/Words";
import { Grass } from "./components/Grass";
import {
  BrightnessContrast,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  GodRays,
  HueSaturation,
} from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import { Color, CylinderGeometry, Mesh, MeshBasicMaterial } from "three";
import { SceneParticles } from "./components/SceneParticles";
import { HugeScreen } from "./components/HugeScreen";
import { ObjectsMainScene } from "./components/ObjectsMainScene";

let lightColor = new Color(1, 0.2, 0.1);
let mesh = new Mesh(
  new CylinderGeometry(0.3, 0.3, 0.2, 20),
  new MeshBasicMaterial({
    color: lightColor,
    transparent: true,
    opacity: 1,
  })
);

mesh.rotation.x = Math.PI * 0.5;
mesh.position.set(1.17, 10.7, -4.1);
mesh.scale.set(1.5, 1, 1);

export function SceneContainer() {
  return (
    <>
      <HugeScreen />
      <Suspense fallback={null}>
        <Environment background={"only"} files={"textures/bg.hdr"} />
        <Environment background={false} files={"textures/envmap.hdr"} />
        <PerspectiveCamera
          makeDefault
          fov={50}
          position={[1.75, 10.85, 24.35]}
        />
        <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />
        <Float speed={0.5} rotationIntensity={0.6} floatIntensity={0.6}>
          <SpotLight
            penumbra={1}
            distance={500}
            angle={60.65}
            attenuation={1}
            anglePower={3}
            intensity={2.3}
            color={lightColor}
            position={[1.19, 10.85, -4.45]}
            target-position={[0, 0, -1]}
          />

          <Portal />
          <Rocks />
          <FloatingIsland />
          <ObjectsMainScene />
          <Trees />
          <Words />
          <Grass />
          <SceneParticles />
        </Float>

        <FloatingRocks />

        {/* <EffectComposer stencilBuffer={true}>
          <DepthOfField
            // focusDistance={0.012}
            focalLength={0.05}
            bokehScale={3}
          />
          <HueSaturation hue={0} saturation={-0.15} />
          <BrightnessContrast brightness={0.0} contrast={0.035} />
          <ChromaticAberration
            radialModulation={true}
            offset={[0.00175, 0.00175]}
          />
          <GodRays
            sun={mesh}
            blendFunction={BlendFunction.screen}
            samples={40}
            density={0.97}
            decay={0.97}
            weight={0.6}
            exposure={0.3}
            clampMax={1}
            width={Resizer.AUTO_SIZE}
            height={Resizer.AUTO_SIZE}
            kernelSize={KernelSize.SMALL}
            blur={true}
          />
        </EffectComposer> */}
      </Suspense>
    </>
  );
}
