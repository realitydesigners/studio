import Audio from "@/components/Audio";
import ResizeVideo from "@/components/ResizeVideo";
import ResizeScreen from "./ResizeScreen";

export default function Menu() {
    return (
        <div className=" w-full h-auto p-4 justify-center gap-4  absolute bottom-4 z-80 flex justify-center items-center">
            <ResizeScreen />
            <ResizeVideo />
            <Audio />
        </div>
    );
}
