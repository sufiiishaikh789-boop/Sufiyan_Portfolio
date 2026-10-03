'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MathUtils, type Group } from 'three'

type OrbColors = { primary: string; violet: string }

function Orb({ primary, violet }: OrbColors) {
  const spin = useRef<Group>(null)
  const tilt = useRef<Group>(null)

  useFrame((state, delta) => {
    if (spin.current) {
      spin.current.rotation.y += delta * 0.12
      spin.current.rotation.z += delta * 0.03
    }
    if (tilt.current) {
      tilt.current.rotation.x = MathUtils.lerp(tilt.current.rotation.x, -state.pointer.y * 0.35, 0.04)
      tilt.current.rotation.y = MathUtils.lerp(tilt.current.rotation.y, state.pointer.x * 0.45, 0.04)
    }
  })

  return (
    <group ref={tilt}>
      <group ref={spin}>
        <mesh>
          <icosahedronGeometry args={[1.75, 2]} />
          <meshBasicMaterial color={primary} wireframe transparent opacity={0.28} />
        </mesh>
        <points>
          <icosahedronGeometry args={[1.75, 2]} />
          <pointsMaterial color={primary} size={0.045} sizeAttenuation transparent opacity={0.9} />
        </points>
        <mesh rotation={[0.6, 0.3, 0]}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshBasicMaterial color={violet} wireframe transparent opacity={0.22} />
        </mesh>
        <mesh rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[2.25, 0.006, 8, 160]} />
          <meshBasicMaterial color={primary} transparent opacity={0.45} />
        </mesh>
        <mesh rotation={[Math.PI / 1.7, 0.5, 0]}>
          <torusGeometry args={[2.05, 0.005, 8, 160]} />
          <meshBasicMaterial color={violet} transparent opacity={0.35} />
        </mesh>
      </group>
    </group>
  )
}

export default function OrbScene(colors: OrbColors) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      eventSource={typeof document !== 'undefined' ? document.body : undefined}
      eventPrefix="client"
      aria-hidden="true"
    >
      <Orb {...colors} />
    </Canvas>
  )
}
