import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

interface IframeSize {
    width: number;
    height: number;
    scale: number;
}

interface IframeSizeContextType extends IframeSize {
    setSize: Dispatch<SetStateAction<IframeSize>>;
}

const IframeSizeContext = createContext<IframeSizeContextType>({
    width: 1280,
    height: 960,
    scale: 1.34,
    setSize: () => { },
});

export const IframeSizeProvider = ({ children }: { children: React.ReactNode }) => {
    const [size, setSize] = useState<IframeSize>({ width: 1280, height: 960, scale: 1.34 }); // Initialize with a default scale of 1

    const value = { ...size, setSize };

    return (
        <IframeSizeContext.Provider value={value}>
            {children}
        </IframeSizeContext.Provider>
    );
};

export const useIframeSize = () => useContext(IframeSizeContext);

export default IframeSizeContext;
