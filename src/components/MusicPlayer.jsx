import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import MusicPlayerComponent from "./ElementsPortfolio/MusicPlayer/MusicPlayerComponent";

export function MusicPlayer(props) {
  const { nodes, materials } = useGLTF("/models/musicPlayer.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Reproductor.geometry}
        material={materials["Material.002"]}
        position={[-9.19, 5.05, 6.48]}
        rotation={[0, 0.7, 0]}
        scale={[2.13, 0.71, 1.87]}
      />
      <mesh
        castShadow
        receiveShadow
        position={[-9.13, 5.22, 6.6]}
        rotation={[0, 0.7, 0]}
        scale={[2.13, 0.71, 1.87]}
      >
        <Html transform occlude className="music-player">
          <MusicPlayerComponent />
        </Html>
      </mesh>
    </group>
  );
}
