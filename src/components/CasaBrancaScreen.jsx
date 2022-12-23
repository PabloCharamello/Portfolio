import React, { useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { CasaBrancaPage } from "./ElementsPortfolio/CasaBrancaPage";

export function CasaBrancaScreen(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/casaBrancaScreen.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        // geometry={nodes.Pantalla001.geometry}
        // material={nodes.Pantalla001.material}
        position={[26.24, 14.3, -8.5]}
        rotation={[0, -0.21, 0]}
        scale={[0.71, 0.86, 0.53]}
      >
        <Html transform occlude className="main-container">
          <CasaBrancaPage />
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PantallaGigante001.geometry}
        material={materials["BordePantalla.001"]}
        position={[26.24, 14.3, -8.5]}
        rotation={[0, -0.21, 0]}
        scale={[0.71, 0.86, 0.53]}
      />
    </group>
  );
}
