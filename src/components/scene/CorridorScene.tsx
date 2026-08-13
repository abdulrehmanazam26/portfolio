'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import type { Project } from '@/content/projects';

const SLAB_SPACING = 8;

function CameraRig({
  progressRef,
  total,
}: {
  progressRef: React.MutableRefObject<number>;
  total: number;
}) {
  useFrame((state) => {
    const targetZ = 4 - progressRef.current * (total * SLAB_SPACING);
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.08;
    state.camera.lookAt(0, 0, state.camera.position.z - 10);
  });
  return null;
}

function Slab({ index, project }: { index: number; project: Project }) {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const z = -index * SLAB_SPACING;
  const side = index % 2 === 0 ? -1 : 1;
  const litColor = index % 2 === 0 ? '#7B4DFF' : '#E0389B';
  const texture = useTexture(project.texture ?? project.image ?? '/work/blooming-bridge/hero.png');

  useFrame((state) => {
    if (!materialRef.current) return;
    const distance = Math.abs(state.camera.position.z - z);
    const lit = THREE.MathUtils.clamp(1 - distance / (SLAB_SPACING * 0.7), 0, 1);
    materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(0.05, 1.6, lit);
  });

  return (
    <group position={[side * 2.4, 0, z]}>
      <mesh>
        <planeGeometry args={[2.6, 3.4]} />
        <meshStandardMaterial
          ref={materialRef}
          map={texture}
          emissive={litColor}
          emissiveIntensity={0.05}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

function CorridorWalls({ length }: { length: number }) {
  return (
    <>
      <mesh position={[-3.2, 0, -length / 2]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[length, 6]} />
        <meshStandardMaterial color="#07060B" roughness={0.9} />
      </mesh>
      <mesh position={[3.2, 0, -length / 2]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[length, 6]} />
        <meshStandardMaterial color="#07060B" roughness={0.9} />
      </mesh>
      <mesh position={[0, -3, -length / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6.4, length]} />
        <meshStandardMaterial color="#07060B" roughness={1} />
      </mesh>
    </>
  );
}

export default function CorridorScene({
  progress,
  projects,
}: {
  progress: number;
  projects: Project[];
}) {
  const progressRef = useRef(progress);
  progressRef.current = progress;

  return (
    <>
      <fog attach="fog" args={['#07060B', 6, 26]} />
      <ambientLight intensity={0.08} color="#12101C" />
      <CorridorWalls length={projects.length * SLAB_SPACING + 20} />
      {projects.map((project, index) => (
        <Slab key={project.slug} index={index} project={project} />
      ))}
      <CameraRig progressRef={progressRef} total={projects.length} />
    </>
  );
}
