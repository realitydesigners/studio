
"use client";
import React from "react";
import Audio from "@/components/Audio";
import { IframeSizeProvider } from "@/context/IframeSizeContext";
import Menu from "@/components/Menu";
import ThreeCanvas from "@/components/ThreeCanvas";

const VideoTestPage = () => {
	return (
		<IframeSizeProvider>
			<div className="bg-black w-full h-screen relative flex flex-col ">
				<Menu />
				<ThreeCanvas />


			</div>
		</IframeSizeProvider>
	);
};

export default VideoTestPage;
