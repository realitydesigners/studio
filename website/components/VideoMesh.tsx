import { useVideoSize } from '@/context/IframeSizeContext';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';

interface VideoMeshProps {
    position: [number, number, number];
    rotation: [number, number, number];
}


const VideoMesh: React.FC<VideoMeshProps> = ({ position, rotation }) => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const { width, height } = useVideoSize();
    const [scale, setScale] = useState<number>(1);


    useEffect(() => {
        if (width === 1280 && height === 960) {
            setScale(1.34);
        } else if (width === 960 && height === 960) {
            setScale(1.79);
        } else {
            setScale(1);
        }
    }, [width, height]);


    const topOffset = (height - height * scale) / 2;
    const leftOffset = (width - width * scale) / 2;

    const containerStyle: React.CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
        overflow: 'hidden',
        position: 'relative',
    };

    const iframeStyle: React.CSSProperties = {
        position: 'absolute',
        top: `${topOffset}px`,
        left: `${leftOffset}px`,
        width: `${width * scale}px`,
        height: `${height * scale}px`,
        border: 'none',
        transform: 'scale(1)',
        transformOrigin: 'top left',
        transition: 'transform 0.3s ease',
    };

    const videoURL = "https://ping.gg/quick/h6a013z7t7adnqp?view=clqzurw3405290fl4bckek9bm";

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.style.width = `${width * scale}px`;
            iframeRef.current.style.height = `${height * scale}px`;
        }
    }, [scale, width, height]);

    return (
        <group position={position} rotation={rotation}>
            <Html transform style={containerStyle}>
                <iframe
                    ref={iframeRef}
                    src={videoURL}
                    title="Live Video"
                    style={iframeStyle}
                    className="bg-gray-700" // debugging
                />
            </Html>
        </group>
    );
};

export default VideoMesh;
