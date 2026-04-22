import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshTransmissionMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function Core() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]}>
        <MeshTransmissionMaterial
          backside
          backsideThickness={1}
          thickness={1.5}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.05}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color="#f0f9ff" // Very light sky-50 tint
          transmission={1}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  // Using the curated palette from design.md: Sky Blue and Emerald
  const nodes = [
    { color: "#0ea5e9", size: 0.35, pos: [3.2, 0, 0] },   // sky-500
    { color: "#00A651", size: 0.25, pos: [-2.5, 1.5, 2] }, // brand-emerald
    { color: "#38bdf8", size: 0.3, pos: [0, -2.5, 2.5] }, // sky-400
    { color: "#0ea5e9", size: 0.2, pos: [-1.5, -1.5, -2] }, // sky-500
    { color: "#1a1b26", size: 0.28, pos: [2, 2, -1.5] },   // dark navy contrast
  ];

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={0.5} position={node.pos as [number, number, number]}>
          <Sphere args={[node.size, 32, 32]}>
            <meshPhysicalMaterial 
              color={node.color} 
              roughness={0.1} 
              metalness={0.2} 
              clearcoat={1}
              emissive={node.color}
              emissiveIntensity={0.2}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[550px] lg:h-[650px] relative pointer-events-auto">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 35 }} 
        dpr={[1, 2]} 
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      >
        <color attach="background" args={["transparent" as any]} />
        
        {/* Soft, premium lighting */}
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#0ea5e9" />
        <directionalLight position={[0, 5, 5]} intensity={1} color="#ffffff" />
        
        <Core />
        <OrbitingNodes />
        
        {/* Adds realistic reflections without the dark void look */}
        <Environment preset="city" />
        
        {/* Soft shadow on the "ground" for depth */}
        <ContactShadows 
          position={[0, -4, 0]} 
          opacity={0.15} 
          scale={15} 
          blur={2.5} 
          far={4.5} 
        />
      </Canvas>
    </div>
  );
}
