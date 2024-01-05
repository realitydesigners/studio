import { useVideoSize } from '@/components/context/IframeSizeContext';

const ResizeVideo = () => {
    const { width, height, setSize } = useVideoSize();

    const toggleVideoSize = () => {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        setSize((currentSize: { width: any; height: any; }) => ({
            width: currentSize.width === currentSize.height ? 1280 : 960,
            height: currentSize.width === currentSize.height ? 960 : 960,
            scale: currentSize.width === currentSize.height ? 1.34 : 1.79,
        }));
    };

    return (
        <button
            type="button"
            onClick={toggleVideoSize}
            className="text-md uppercase pl-4 pr-4 p-2 font-bold font-mono rounded-full z-10 relative  text-gray-200  bg-white/10 p-1 pl-2 pr-2 "
        >
            Resize Video
        </button>
    );
};

export default ResizeVideo;
