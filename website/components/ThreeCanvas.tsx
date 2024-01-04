import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import ScreenMesh from './ScreenMesh';
import VideoMesh from './VideoMesh';

const ThreeCanvas = () => {
    return (
        <Canvas>

            <PerspectiveCamera makeDefault position={[0, 0, 50]} />
            <OrbitControls />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Center />
            <group position={[0, 0, 0]} >
                <VideoMesh />
                <ScreenMesh />
            </group>
        </Canvas>
    );
};

export default ThreeCanvas;
