import Audio from "@/components/menu/Audio";
import ResizeScreen from "@/components/menu/ResizeScreen";
import ResizeVideo from "@/components/menu/ResizeVideo";
import ScreenName from "@/components/menu/ScreenName";

export default function Menu() {
    return (
        <div className=" w-full h-auto p-4 justify-center gap-4  absolute bottom-4 z-80 flex justify-center items-center">
            <ResizeScreen />
            <ResizeVideo />
            <Audio />
            <ScreenName />
        </div>
    );
}
