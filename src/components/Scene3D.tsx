import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars, Text3D, Center } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color, speed = 1, distort = 0.4, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  size?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2 * speed;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const GlowingRing = ({ position, color, size = 2 }: {
  position: [number, number, number];
  color: string;
  size?: number;
}) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3}>
      <mesh ref={ringRef} position={position}>
        <torusGeometry args={[size, 0.05, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
  }

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#a855f7"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
          <spotLight
            position={[0, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={0.8}
            color="#c084fc"
          />

          <AnimatedSphere position={[3, 1, -2]} color="#7c3aed" size={0.8} distort={0.5} />
          <AnimatedSphere position={[-3.5, -1, -1]} color="#a855f7" size={0.6} distort={0.3} speed={0.8} />
          <AnimatedSphere position={[2, -2, 1]} color="#c084fc" size={0.4} distort={0.6} speed={1.2} />
          <AnimatedSphere position={[-2, 2, -3]} color="#8b5cf6" size={0.5} distort={0.4} speed={0.6} />

          <GlowingRing position={[0, 0, -2]} color="#a855f7" size={3} />
          <GlowingRing position={[2, -1, -4]} color="#7c3aed" size={1.5} />

          <ParticleField />
          <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade speed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
