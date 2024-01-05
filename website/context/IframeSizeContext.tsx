import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface IframeSize {
    width: number;
    height: number;
    scale: number;
}

interface IframeSizeContextType extends IframeSize {
    setSize: Dispatch<SetStateAction<IframeSize>>;
}

const ScreenSizeContext = createContext<IframeSizeContextType>({
    width: 1280,
    height: 960,
    scale: 1.34,
    setSize: () => { },
});

const VideoSizeContext = createContext<IframeSizeContextType>({
    width: 1440,
    height: 960,
    scale: 1.34,
    setSize: () => { },
});


export const ScreenSizeProvider = ({ children }: { children: React.ReactNode }) => {
    const [size, setSize] = useState<IframeSize>({ width: 1440, height: 960, scale: 1.34 }); // Initialize with a default scale of 1

    const value = { ...size, setSize };

    return (
        <ScreenSizeContext.Provider value={value}>
            {children}
        </ScreenSizeContext.Provider>
    );
};

export const VideoSizeProvider = ({ children }: { children: React.ReactNode }) => {
    const [videoSize, setVideoSize] = useState<IframeSize>({ width: 1280, height: 960, scale: 1.34 });

    const value = { ...videoSize, setSize: setVideoSize };

    return (
        <VideoSizeContext.Provider value={value}>
            {children}
        </VideoSizeContext.Provider>
    );
};


export const useIframeSize = () => useContext(ScreenSizeContext);
export const useVideoSize = () => useContext(VideoSizeContext);


