import React, { useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";

export function HugeScreen(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/hugeScreen.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="PantallaGigante"
          castShadow
          receiveShadow
          geometry={nodes.PantallaGigante.geometry}
          material={materials.BordePantalla}
          position={[-9.14, 9.19, 6.46]}
          rotation={[0, 0.69, 0]}
          scale={[0.95, 1.14, 0.7]}
        />
        <mesh
          name="Pantalla"
          castShadow
          receiveShadow
          geometry={nodes.Pantalla.geometry}
          material={nodes.Pantalla.material}
          position={[-9.14, 9.19, 6.46]}
          rotation={[0, 0.69, 0]}
          scale={[0.95, 1.14, 0.7]}
        >
          <Html className="main-container" transform>
            Hola
          </Html>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/hugeScreen.glb");
