import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

interface IframeSize {
    width: number;
    height: number;
}

interface IframeSizeContextType extends IframeSize {
    setSize: Dispatch<SetStateAction<IframeSize>>;
}

const IframeSizeContext = createContext<IframeSizeContextType>({
    width: 1280,
    height: 960,
    setSize: () => { },
});

export const IframeSizeProvider = ({ children }: { children: React.ReactNode }) => {
    const [size, setSize] = useState<IframeSize>({ width: 1280, height: 960 });

    const value = { ...size, setSize };

    return (
        <IframeSizeContext.Provider value={value}>
            {children}
        </IframeSizeContext.Provider>
    );
};

export const useIframeSize = () => useContext(IframeSizeContext);

export default IframeSizeContext;
