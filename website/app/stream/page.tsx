"use client";
import React, {
	useRef,
	useState,
	useEffect,
	useContext,
	createContext,
} from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import {
	Html,
	PerspectiveCamera,
	OrbitControls,
	Resize,
} from "@react-three/drei";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const IframeSizeContext = createContext<any>({
	width: 1280,
	height: 960,
	setSize: () => { }, // Initial value is a no-op function
});
const useIframeSize = () => useContext(IframeSizeContext);

const VideoMesh = () => {
	const meshRef = useRef<Mesh>(null);
	const { width, height } = useIframeSize();

	useFrame(({ camera }) => {
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.0;
		}
	});

	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color="gray" />
			<Html position={[0, 0, 2]} transform color="#fff">
				<iframe
					src="https://ping.gg/quick/h6a013z7t7adnqp?view=cl7bfavf735090hjq2s2rxnwx"
					width={width}
					height={height}
					title="Live Video"
					style={{ border: "none", opacity: 0.8 }}
					className="bg-white p-1"
				/>
			</Html>
		</mesh>
	);
};

const VideoTestPage = () => {
	const [iframeSize, setIframeSize] = useState({ width: 1280, height: 960 });

	const toggleIframeSize = () => {
		if (iframeSize.width === iframeSize.height) {
			setIframeSize({ width: 1280, height: 960 }); // Rectangle
		} else {
			setIframeSize({ width: 960, height: 960 }); // Square
		}
	};
	const ResizeVideo = () => {
		return (
			<button
				type="button"
				onClick={toggleIframeSize}
				className="absolute z-10 m text-white top-4 bg-white/10 p-1 pl-2 pr-2 left-4"
			>
				Toggle Iframe Size
			</button>
		);
	};

	return (
		<IframeSizeContext.Provider
			value={{ ...iframeSize, setSize: setIframeSize }}
		>
			<div className="bg-black w-full h-screen relative">
				<Canvas>
					<PerspectiveCamera makeDefault position={[0, 0, 50]} />
					<OrbitControls />
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 10, 10]} />
					<VideoMesh />
				</Canvas>
				<ResizeVideo />
				<AudioComponent />
			</div>
		</IframeSizeContext.Provider>
	);
};

export default VideoTestPage;

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
				className="absolute z-10 m text-white top-4 bg-white/10 p-1 pl-2 pr-2 right-4"
				onClick={startAudio}
			>
				Start Audio
			</button>
		</div>
	);
};

// const BGImage = () => {
// 	const texture = useLoader(TextureLoader, "/image.png");
// 	const radius = 75;

// 	return (
// 		<mesh>
// 			<sphereGeometry args={[radius, 64, 64]} />
// 			<meshBasicMaterial map={texture} side={THREE.BackSide} />
// 		</mesh>
// 	);
// };
