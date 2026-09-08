"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Sphere, Capsule, Grid } from "@react-three/drei";
import * as THREE from "three";

function SmoothCoder() {
  const group = useRef<THREE.Group>(null);
  const head = useRef<THREE.Mesh>(null);
  const leftHand = useRef<THREE.Mesh>(null);
  const rightHand = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      // Gentle floating breathing effect
      group.current.position.y = Math.sin(t * 1.5) * 0.05 - 1.2;
    }
    if (head.current) {
      // Looking around slightly at the screens
      head.current.rotation.y = Math.sin(t * 0.5) * 0.15 - 0.2;
      head.current.rotation.x = Math.sin(t * 0.8) * 0.05 + 0.1;
    }
    if (leftHand.current && rightHand.current) {
      // Rapid typing motion
      leftHand.current.position.y = Math.sin(t * 20) * 0.04 + 0.7;
      rightHand.current.position.y = Math.cos(t * 20) * 0.04 + 0.7;
    }
  });

  // Sleek, high-tech metallic materials instead of cubes
  const bodyMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#4C7EFF", roughness: 0.2, metalness: 0.8 }), []);
  const jointMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#121826", roughness: 0.1, metalness: 0.9 }), []);

  return (
    <group ref={group} position={[3, -1, 0]} rotation={[0, -0.3, 0]}>
      {/* Torso */}
      <mesh position={[0, 0.8, 0]} rotation={[0.1, 0, 0]} material={bodyMat}>
        <capsuleGeometry args={[0.3, 0.9, 4, 32]} />
      </mesh>
      
      {/* Head */}
      <mesh ref={head} position={[0, 1.75, 0.05]} material={bodyMat}>
        <sphereGeometry args={[0.25, 32, 32]} />
      </mesh>

      {/* Shoulders */}
      <mesh position={[-0.38, 1.4, 0]} material={jointMat}><sphereGeometry args={[0.12, 16, 16]} /></mesh>
      <mesh position={[0.38, 1.4, 0]} material={jointMat}><sphereGeometry args={[0.12, 16, 16]} /></mesh>

      {/* Arms (Upper) */}
      <mesh position={[-0.45, 1.1, 0.1]} rotation={[0.5, 0, 0.2]} material={bodyMat}>
        <capsuleGeometry args={[0.07, 0.4, 4, 16]} />
      </mesh>
      <mesh position={[0.45, 1.1, 0.1]} rotation={[0.5, 0, -0.2]} material={bodyMat}>
        <capsuleGeometry args={[0.07, 0.4, 4, 16]} />
      </mesh>

      {/* Elbows */}
      <mesh position={[-0.5, 0.85, 0.3]} material={jointMat}><sphereGeometry args={[0.09, 16, 16]} /></mesh>
      <mesh position={[0.5, 0.85, 0.3]} material={jointMat}><sphereGeometry args={[0.09, 16, 16]} /></mesh>

      {/* Arms (Lower) */}
      <mesh position={[-0.4, 0.7, 0.5]} rotation={[-1.0, 0, -0.1]} material={bodyMat}>
        <capsuleGeometry args={[0.06, 0.35, 4, 16]} />
      </mesh>
      <mesh position={[0.4, 0.7, 0.5]} rotation={[-1.0, 0, 0.1]} material={bodyMat}>
        <capsuleGeometry args={[0.06, 0.35, 4, 16]} />
      </mesh>

      {/* Hands (Typing) */}
      <mesh ref={leftHand} position={[-0.3, 0.6, 0.75]} material={jointMat}><sphereGeometry args={[0.07, 16, 16]} /></mesh>
      <mesh ref={rightHand} position={[0.3, 0.6, 0.75]} material={jointMat}><sphereGeometry args={[0.07, 16, 16]} /></mesh>
    </group>
  );
}

function HolographicScreens() {
  const codeLines = `
@RestController
@RequestMapping("/api/v1")
public class SystemController {
  
  @Autowired
  private AI_Engine aiEngine;
  
  @PostMapping("/deploy")
  public Response scale() {
    return aiEngine.optimize();
  }
}
  `.trim();

  return (
    <group position={[3, 0, 1.2]} rotation={[0, -0.3, 0]}>
      <Float speed={2} rotationIntensity={0.05} floatIntensity={0.1}>
        {/* Main Center Screen */}
        <mesh position={[0, 0.8, 0]} rotation={[-0.1, 0, 0]}>
          <planeGeometry args={[2.0, 1.4]} />
          <meshBasicMaterial color="#4FD1FF" transparent opacity={0.05} side={THREE.DoubleSide} />
          {/* Screen border glow */}
          <lineSegments>
            <edgesGeometry args={[new THREE.PlaneGeometry(2.0, 1.4)]} />
            <lineBasicMaterial color="#4FD1FF" transparent opacity={0.3} />
          </lineSegments>
          
          <Text
            position={[-0.9, 0.5, 0.01]}
            fontSize={0.07}
            color="#4FD1FF"
            anchorX="left"
            anchorY="top"
          >
            {codeLines}
          </Text>
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Left Side Screen */}
        <mesh position={[-1.4, 0.7, 0.4]} rotation={[-0.1, 0.5, 0]}>
          <planeGeometry args={[1.0, 1.6]} />
          <meshBasicMaterial color="#F2B84B" transparent opacity={0.05} side={THREE.DoubleSide} />
          <lineSegments>
            <edgesGeometry args={[new THREE.PlaneGeometry(1.0, 1.6)]} />
            <lineBasicMaterial color="#F2B84B" transparent opacity={0.3} />
          </lineSegments>
          <Text
            position={[-0.4, 0.6, 0.01]}
            fontSize={0.06}
            color="#F2B84B"
            anchorX="left"
            anchorY="top"
          >
            {"> DB: POSTGRES\n> STATUS: SYNCED\n> QPS: 14,392\n> JWT: SECURE\n\n[ OK ]"}
          </Text>
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.1} floatIntensity={0.15}>
        {/* Right Side Screen */}
        <mesh position={[1.4, 0.7, 0.4]} rotation={[-0.1, -0.5, 0]}>
          <planeGeometry args={[1.0, 1.6]} />
          <meshBasicMaterial color="#4C7EFF" transparent opacity={0.05} side={THREE.DoubleSide} />
          <lineSegments>
            <edgesGeometry args={[new THREE.PlaneGeometry(1.0, 1.6)]} />
            <lineBasicMaterial color="#4C7EFF" transparent opacity={0.3} />
          </lineSegments>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshBasicMaterial color="#4C7EFF" transparent opacity={0.4} wireframe />
          </mesh>
        </mesh>
      </Float>
    </group>
  );
}

function ShootingStars() {
  const count = 30;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const stars = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 60 - 10, // Spawn more towards the left
      y: Math.random() * 50 + 10,         // Spawn high up
      z: (Math.random() - 0.5) * 30 - 15,
      speed: Math.random() * 3 + 2, // 2 to 5 units per sec
      scale: Math.random() * 1.5 + 0.5
    }));
  }, []);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    
    stars.forEach((star, i) => {
      // Move diagonally DOWN and RIGHT
      star.x += star.speed * delta * 0.8; // Move RIGHT
      star.y -= star.speed * delta;       // Move DOWN
      
      // Reset if it goes too far down or too far right
      if (star.y < -15 || star.x > 30) {
        star.x = (Math.random() - 0.5) * 40 - 20; // Spawn back on the left (-40 to 0)
        star.y = Math.random() * 40 + 20;         // Spawn high (20 to 60)
        star.speed = Math.random() * 3 + 2;
      }
      
      dummy.position.set(star.x, star.y, star.z);
      // Elongate to create a "streak" effect
      dummy.scale.set(0.015, star.scale * 1.5, 0.015);
      
      // Tilt to the RIGHT (negative Z rotation) to match the exact (0.8x, -1y) trajectory
      dummy.rotation.z = -Math.atan2(0.8, 1); 
      dummy.updateMatrix();
      
      mesh.setMatrixAt(i, dummy.matrix);
    });
    
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined as any, undefined as any, count]}>
      <cylinderGeometry args={[1, 1, 1, 8]} />
      <meshBasicMaterial color="#4FD1FF" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function MathEquations() {
  const equations = [
    // Probability
    { text: "P(A|B) = P(B|A)P(A) / P(B)", position: [-6.5, 2.5, -2], color: "#4FD1FF", speed: 1.5 },
    // Statistics
    { text: "f(x) = (1 / σ√(2π)) exp(-½((x-μ)/σ)²)", position: [-5.5, 3.5, -1], color: "#F2B84B", speed: 2 },
    // Linear Algebra (SVD - using V* instead of Vᵀ to prevent missing character boxes)
    { text: "A = UΣV*", position: [-5.0, 1.5, 0], color: "#4FD1FF", speed: 1.8 },
    // Linear Algebra (Eigenvalue)
    { text: "Ax = λx", position: [-4.0, -1.0, 1], color: "#F2B84B", speed: 2.5 }
  ];

  return (
    <group>
      {equations.map((eq, i) => (
        <Float key={i} speed={eq.speed} rotationIntensity={0.2} floatIntensity={0.5}>
          <Text
            position={eq.position as [number, number, number]}
            fontSize={0.4}
            color={eq.color}
            anchorX="center"
            anchorY="middle"
            fillOpacity={0.4}
            outlineWidth={0.01}
            outlineColor={eq.color}
            outlineOpacity={0.1}
            // Using a standard elegant serif font for math (Lora)
            font="https://fonts.gstatic.com/s/lora/v35/0QI6MX1D_JOuGQbT0gvTJPa787weuyJGmKxum0s.woff"
          >
            {eq.text}
          </Text>
        </Float>
      ))}
    </group>
  );
}

function DataParticles() {
  const count = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20; // x
      pos[i * 3 + 1] = Math.random() * 10 - 2; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2; // z
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#4FD1FF" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export function HeroScene3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-ascent-1/20 to-ascent-2/5 blur-3xl opacity-50 absolute inset-0 z-0" />
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.5, 7], fov: 45 }}>
        <React.Suspense fallback={null}>
          <fog attach="fog" args={["#0B0F17", 5, 15]} />
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} color="#4FD1FF" />
          <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#F2B84B" />
          
          <SmoothCoder />
          <HolographicScreens />
          <MathEquations />
          <DataParticles />
          <ShootingStars />
          
          {/* Infinite Grid Floor */}
          <Grid 
            position={[0, -2, 0]} 
            args={[20, 20]} 
            cellSize={0.5} 
            cellThickness={1} 
            cellColor="#4C7EFF" 
            sectionSize={2.5} 
            sectionThickness={1.5} 
            sectionColor="#4FD1FF" 
            fadeDistance={10} 
            fadeStrength={1} 
          />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
