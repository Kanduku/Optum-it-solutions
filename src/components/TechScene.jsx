import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  RoundedBox,
  MeshDistortMaterial
} from "@react-three/drei";

function Laptop() {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y =
        Math.sin(clock.elapsedTime * 0.35) * 0.12 - 0.35;
    }
  });

  return (
    <group
      ref={ref}
      rotation={[-0.08, -0.35, 0]}
      position={[0, -0.12, 0]}
    >
      {/* Laptop base */}
      <RoundedBox
        args={[2.5, 0.12, 1.65]}
        radius={0.08}
        position={[0, -0.62, 0]}
      >
        <meshStandardMaterial
          color="#142d50"
          metalness={0.8}
          roughness={0.24}
        />
      </RoundedBox>

      {/* Laptop screen frame */}
      <RoundedBox
        args={[2.28, 1.48, 0.09]}
        radius={0.07}
        position={[0, 0.2, -0.72]}
        rotation={[-0.12, 0, 0]}
      >
        <meshStandardMaterial
          color="#1c4d80"
          metalness={0.75}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Screen */}
      <mesh
        position={[0, 0.2, -0.665]}
        rotation={[-0.12, 0, 0]}
      >
        <planeGeometry args={[2.08, 1.27]} />
        <meshBasicMaterial color="#07172d" />
      </mesh>

      {/* Code lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            -0.72 + i * 0.2,
            0.45 - i * 0.14,
            -0.64
          ]}
          rotation={[-0.12, 0, 0]}
        >
          <boxGeometry args={[0.28, 0.025, 0.01]} />
          <meshBasicMaterial
            color={i % 2 ? "#7667ff" : "#20c9ed"}
          />
        </mesh>
      ))}
    </group>
  );
}

function Orb({ position, color, scale }) {
  return (
    <Float
      speed={1.8}
      rotationIntensity={0.5}
      floatIntensity={0.6}
    >
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[0.3, 2]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.45}
          roughness={0.2}
          metalness={0.6}
          distort={0.25}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function TechScene() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.2} />

        <pointLight
          position={[3, 3, 4]}
          intensity={25}
          color="#258cff"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={14}
          color="#8c4cff"
        />

        <Laptop />

        <Orb
          position={[-1.7, 0.75, -0.4]}
          color="#168cff"
          scale={0.75}
        />

        <Orb
          position={[1.7, 1.05, -0.8]}
          color="#7d58ff"
          scale={0.55}
        />

        <Orb
          position={[1.8, -0.8, 0.2]}
          color="#14c7e9"
          scale={0.42}
        />
      </Canvas>
    </div>
  );
}