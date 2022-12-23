import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { HackDesignPage } from "./ElementsPortfolio/HackDesignPage";
export function HackDesignScreen(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/hackDesignScreen.glb"
  );

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        // geometry={nodes.Pantalla001.geometry}
        // material={nodes.Pantalla001.material}

        position={[26.24, 8.3, -8.5]}
        rotation={[0, -0.38, 0]}
        scale={[0.71, 0.86, 0.53]}
      >
        <Html transform occlude className="main-container">
          <HackDesignPage />
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PantallaGigante001.geometry}
        material={materials["BordePantalla.001"]}
        position={[26.24, 8.3, -8.5]}
        rotation={[0, -0.38, 0]}
        scale={[0.71, 0.86, 0.53]}
      />
    </group>
  );
}
