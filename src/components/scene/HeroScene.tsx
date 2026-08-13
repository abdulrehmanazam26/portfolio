'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * The mouth of the corridor: camera parked, not flying yet (flight starts
 * in the Work section). Idle drift + a small mouse-parallax read so it
 * doesn't feel like a static image, without being the show's real motion.
 */
function IdleCorridor() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.02;
    }
    const targetX = state.pointer.x * 0.15;
    const targetY = state.pointer.y * 0.08;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.04;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, -10);
  });

  return (
    <group ref={groupRef}>
      <fog attach="fog" args={['#07060B', 4, 20]} />
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 1, -4]} intensity={12} color="#7B4DFF" distance={12} decay={2} />
      <pointLight position={[2, -1, -8]} intensity={8} color="#E0389B" distance={14} decay={2} />
      <mesh position={[-3.2, 0, -10]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[24, 6]} />
        <meshStandardMaterial color="#0d0c14" roughness={0.9} />
      </mesh>
      <mesh position={[3.2, 0, -10]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[24, 6]} />
        <meshStandardMaterial color="#0d0c14" roughness={0.9} />
      </mesh>
      <mesh position={[0, -3, -10]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6.4, 24]} />
        <meshStandardMaterial color="#07060B" roughness={1} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return <IdleCorridor />;
}
