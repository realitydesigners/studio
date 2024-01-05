"use client";
import Scene from "@/components/Scene";
import Menu from "@/components/menu/Menu";
import { ScreenSizeProvider, VideoSizeProvider } from "@/context/IframeSizeContext";
import { SelectedNameProvider } from "@/context/NameContext";

const HoomePage = () => {
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


export default HoomePage;
