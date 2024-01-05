"use client";
import Menu from "@/components/Menu";
import Scene from "@/components/Scene";
import { ScreenSizeProvider, VideoSizeProvider } from "@/context/IframeSizeContext";
import React from "react";

const StreamPage = () => {
	return (
		<ScreenSizeProvider>
			<VideoSizeProvider>
				<div className="bg-black w-full h-screen relative flex flex-col">
					<Menu />
					<Scene />
				</div>
			</VideoSizeProvider>
		</ScreenSizeProvider>
	);
};


export default StreamPage;
