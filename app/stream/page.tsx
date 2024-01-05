"use client";
import Scene from "@/components/Scene";
import { AppProvider } from "@/components/context/AppContext";
import { SelectedNameProvider } from "@/components/context/NameContext";
import Menu from "@/components/menu/Menu";

const StreamPage = () => {
	return (

		<AppProvider>
			<SelectedNameProvider>
				<div className="bg-black w-full h-screen relative flex flex-col">
					<Menu />
					<Scene />
				</div>
			</SelectedNameProvider>
		</AppProvider>

	);
};


export default StreamPage;
