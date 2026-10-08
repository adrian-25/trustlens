"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"
import { RoundedBox, MeshTransmissionMaterial } from "@react-three/drei"

function Cube() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
    }
  })

  return (
    <group>
      <RoundedBox ref={meshRef} args={[2, 2, 2]} radius={0.1} smoothness={4}>
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={0.5}
          chromaticAberration={0.2}
          anisotropy={0.3}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color="#00d68f"
          transmission={0.9}
          roughness={0.1}
        />
      </RoundedBox>
      
      {/* Inner glow */}
      <pointLight position={[0, 0, 0]} color="#00d68f" intensity={2} />
    </group>
  )
}

export function RotatingCube() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#4f7cff" intensity={0.8} />
        <pointLight position={[-10, -10, -10]} color="#00d68f" intensity={0.5} />
        <Cube />
      </Canvas>
    </div>
  )
}
