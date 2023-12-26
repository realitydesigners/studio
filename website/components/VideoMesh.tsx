import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Html } from '@react-three/drei';
import { useIframeSize } from '@/context/IframeSizeContext';

const VideoMesh = () => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const { width, height } = useIframeSize();
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

    const videoURL = "https://ping.gg/quick/h6a013z7t7adnqp?view=cl7bfavf735090hjq2s2rxnwx";

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.style.width = `${width * scale}px`;
            iframeRef.current.style.height = `${height * scale}px`;
        }
    }, [scale, width, height]);

    return (
        <Html position={[0, 0, 2]} transform style={containerStyle}>
            <iframe
                ref={iframeRef}
                src={videoURL}
                title="Live Video"
                style={iframeStyle}
                className="bg-gray-700" // debugging
            />
        </Html>
    );
};

export default VideoMesh;
