import React from 'react';
import { useIframeSize } from '@/context/IframeSizeContext';


const ResizeVideo = () => {
    const { width, height, setSize } = useIframeSize();

    const toggleIframeSize = () => {
        setSize((currentSize: { width: any; height: any; }) => ({
            width: currentSize.width === currentSize.height ? 1280 : 960,
            height: currentSize.width === currentSize.height ? 960 : 960,
            scale: currentSize.width === currentSize.height ? 1.34 : 1.79,
        }));
    };

    return (
        <button
            type="button"
            onClick={toggleIframeSize}
            className="text-xs font-mono rounded-full z-10 relative  text-gray-200  bg-white/10 p-1 pl-2 pr-2 "
        >
            Resize
        </button>
    );
};

export default ResizeVideo;
