import { Canvas } from "@react-three/fiber";
import Card from "./Card";
import { GizmoHelper, GizmoViewcube, GizmoViewport, OrbitControls } from "@react-three/drei";

export default function Scene() {
    return (
        <Canvas
            camera={{fov: 50, near: 0.1, far: 200, position: [0, 6, 0]}}
            gl={{antialias: true}}
        >
            <GizmoHelper alignment="bottom-right" margin={[80,80]} >
                <GizmoViewcube/>
                <GizmoViewport/>
            </GizmoHelper>
            
            <gridHelper args={[6, 4]} position={[0,-1,0]}/>
            <ambientLight intensity={0.6} />
            <axesHelper args={[2]}/>
            <OrbitControls/>
            <Card />
        </Canvas>
    );
}