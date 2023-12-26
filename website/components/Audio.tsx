import React, { useState, useEffect } from 'react';

const AudioComponent = () => {
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

    useEffect(() => {
        const context =
            new // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                (window.AudioContext || (window as any).webkitAudioContext)();

        setAudioContext(context);
    }, []);

    const startAudio = () => {
        if (audioContext) {
            audioContext.resume().then(() => {
                console.log("Playback resumed successfully");
            });
        }
    };

    return (
        <div>
            <button
                type="button"
                className=" text-xs z-10 relative rounded-full font-mono text-gray-200  bg-white/10 p-1 pl-2 pr-2 right-4"
                onClick={startAudio}
            >
                Audio
            </button>
        </div>
    );
};

export default AudioComponent;
