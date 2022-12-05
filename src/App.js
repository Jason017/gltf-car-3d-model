import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

import CarModel from "./CarModel";

export default function App() {
  return (
    <Canvas>
      <color attach="background" args={["#fff0ea"]} />
      <fog attach="fog" args={["#fff0ea", 10, 60]} />
      <ambientLight intensity={10} />

      <Suspense fallback={null}>
        <CarModel position={[0, 1, 0]} />
        <mesh
          scale={[1000, 1000, 1]}
          rotation={[-Math.PI / 2, 0, 0]}
          onPointerOver={(e) => e.stopPropagation()}
        >
          <planeBufferGeometry attach="geometry" />
          <meshBasicMaterial
            attach="material"
            transparent
            opacity={0.7}
            color="skyblue"
          />
          <OrbitControls
            maxPolarAngle={(7 * Math.PI) / 18}
            maxDistance={20}
            autoRotate={false}
          />
        </mesh>
      </Suspense>
    </Canvas>
  );
}
