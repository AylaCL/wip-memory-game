import { Edges } from "@react-three/drei";

export default function Card() {
    return (
        <mesh>
            <boxGeometry args={[1, 0.1, 1.5]} />
            <meshStandardMaterial attach="material-0" color="black" />
            <meshStandardMaterial attach="material-1" color="black" />
            <meshStandardMaterial attach="material-2" color="black" />
            <meshStandardMaterial attach="material-3" color="red" />
            <meshStandardMaterial attach="material-4" color="black" />
            <meshStandardMaterial attach="material-5" color="black" />
            
            <Edges
                linewidth={4}
                scale={1.01}
                threshold={15}
                color="orange"
            />
        </mesh>
    )
}
