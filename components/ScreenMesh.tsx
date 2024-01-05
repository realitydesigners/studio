import { useIframeSize } from '@/components/context/IframeSizeContext';
import { useSelectedName } from '@/components/context/NameContext';
import { Html, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';


interface ScreenMeshProps {
    position: [number, number, number];
    rotation: [number, number, number];
}


const ScreenMesh: React.FC<ScreenMeshProps> = ({ position, rotation }) => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const { width, height } = useIframeSize();
    const [scale, setScale] = useState<number>(1);


    useEffect(() => {
        if (width === 1440 && height === 960) {
            setScale(1.35);
        } else if (width === 960 && height === 960) {
            setScale(2.05);
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

    const videoURL = "https://ping.gg/quick/h6a013z7t7adnqp?view=cl7bfavf735090hjq2s2rxnwx";

    const { selectedScreen } = useSelectedName();



    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.style.width = `${width * scale}px`;
            iframeRef.current.style.height = `${height * scale}px`;
        }
    }, [scale, width, height]);

    return (
        <group position={position} rotation={rotation}>
            <Text font="/Staatliches.ttf" position={[0, -15, 0]} fontSize={2} color="white" anchorX="center" anchorY="middle"> {selectedScreen}</Text>
            <Html transform style={containerStyle}>
                <iframe
                    ref={iframeRef}
                    src={videoURL}
                    title="Live Video"
                    style={iframeStyle}
                    className="bg-gray-200" // debugging
                />
            </Html>
        </group>
    );
};

export default ScreenMesh;
