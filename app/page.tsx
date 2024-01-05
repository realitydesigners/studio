"use client";
import Scene from "@/components/Scene";
import { ScreenSizeProvider, VideoSizeProvider } from "@/components/context/IframeSizeContext";
import { SelectedNameProvider } from "@/components/context/NameContext";
import Menu from "@/components/menu/Menu";

const StreamPage = () => {
  return (
    <SelectedNameProvider>
      <ScreenSizeProvider>
        <VideoSizeProvider>
          <div className="bg-black w-full h-screen relative flex flex-col">
            <Menu />
            <Scene />
          </div>
        </VideoSizeProvider>
      </ScreenSizeProvider>
    </SelectedNameProvider>
  );
};


export default StreamPage;
