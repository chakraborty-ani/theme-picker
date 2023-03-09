import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Sphere3D from "./Sphere3D";
import { OrbitControls } from "@react-three/drei";

const SphereCanvas = () => {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-6, 9, 3]} intensity={1} />
                <Sphere3D />
            </Suspense>
        </Canvas>
    )
}

export default SphereCanvas