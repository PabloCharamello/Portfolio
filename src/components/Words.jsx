import { Float, Text3D } from "@react-three/drei";

export function Words() {
  return (
    <>
      <Float
        speed={1.5}
        rotationIntensity={0.35}
        floatIntensity={0.5}
        position={[6.1, 5.2, 0.95]}
      >
        <Text3D
          font="/fonts/Roboto_Regular.json"
          size={0.385}
          height={0.065}
          curveSegments={12}
          rotation={[0, -0.345, -0.05]}
        >
          Pablo Charamello
          <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
        </Text3D>
      </Float>
      <Float
        rotationIntensity={0.35}
        floatIntensity={0.5}
        position={[3.5, 6, 0]}
      >
        <Text3D
          font={"fonts/Roboto_Regular.json"}
          size={0.575}
          height={0.085}
          curveSegments={12}
          rotation={[0, -0.35, -0.05]}
        >
          Full Stack Developer
          <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
        </Text3D>
      </Float>
    </>
  );
}
