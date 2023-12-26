import "@/app/globals.css";
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Html } from '@react-three/drei';
import { useIframeSize } from '@/context/IframeSizeContext';

const VideoMesh = () => {
    const meshRef = useRef<Mesh>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { width, height } = useIframeSize();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.0;
        }
    });

    const videoURL = "https://ping.gg/quick/h6a013z7t7adnqp?view=cl7bfavf735090hjq2s2rxnwx";

    const containerStyle = {
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative' as 'relative',
        overflow: 'hidden' as 'hidden',
    };

    const iframeStyle = {
        position: 'absolute' as 'absolute',
        top: 0,
        left: 0,
        width: `${width}px`,
        height: `${height}px`,
        border: 'none' as 'none',
        background: 'gray' as 'gray',
    };

    return (
        <mesh ref={meshRef}>

            <Html position={[0, 0, 2]} transform style={containerStyle}>
                <div style={containerStyle}>
                    <iframe
                        ref={iframeRef}
                        src={videoURL}
                        title="Live Video"
                        allow="autoplay; fullscreen"
                        style={iframeStyle}
                    />
                </div>
            </Html>
        </mesh>
    );
};

export default VideoMesh;
