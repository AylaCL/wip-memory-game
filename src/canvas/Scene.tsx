import { Canvas } from '@react-three/fiber'
import {
    GizmoHelper,
    GizmoViewport,
    OrbitControls,
    useHelper,
} from '@react-three/drei'
import GameBoard from '../components/GameBoard'
import { useRef } from 'react'
import { DirectionalLight, DirectionalLightHelper } from 'three'

function Lights() {
    const dirLightBottom = useRef<DirectionalLight>(null!)
    const dirLightTop = useRef<DirectionalLight>(null!)

    useHelper(dirLightBottom, DirectionalLightHelper, 1, 'red')
    useHelper(dirLightTop, DirectionalLightHelper, 1, 'blue')

    return (
        <>
            <directionalLight position={[0, -5, 0]} ref={dirLightBottom} />
            <directionalLight position={[0, 5, 0]} ref={dirLightTop} />
        </>
    )
}

export default function Scene() {
    return (
        <Canvas
            camera={{ fov: 50, near: 0.1, far: 200, position: [0, 6, 4] }}
            gl={{ antialias: true }}
        >
            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                <GizmoViewport />
            </GizmoHelper>

            <gridHelper args={[6, 4]} position={[0, -1, 0]} />
            <axesHelper args={[2]} />
            <ambientLight intensity={0.6} />
            <Lights />
            <OrbitControls />
            <GameBoard />
        </Canvas>
    )
}
