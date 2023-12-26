import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import VideoMesh from './VideoMesh';

const ThreeCanvas = () => {
    return (
        <Canvas>

            <PerspectiveCamera makeDefault position={[0, 0, 50]} />
            <OrbitControls />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <VideoMesh />
        </Canvas>
    );
};

export default ThreeCanvas;
