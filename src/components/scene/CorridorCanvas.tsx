'use client';

import { Canvas } from '@react-three/fiber';

/**
 * Shared Canvas shell for both the idle hero scene and the scroll-driven
 * work corridor. Always mounted via dynamic(..., { ssr: false }) by callers,
 * and only while its section is on screen — see useInView / useSceneCapable.
 */
export function CorridorCanvas({
  children,
  cameraZ = 5,
}: {
  children: React.ReactNode;
  cameraZ?: number;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }}
      camera={{ fov: 55, near: 0.1, far: 60, position: [0, 0, cameraZ] }}
      onCreated={({ gl }) => gl.setClearColor('#07060B')}
    >
      {children}
    </Canvas>
  );
}
