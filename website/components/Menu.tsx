import ResizeVideo from "@/components/ResizeVideo";
import Audio from "@/components/Audio";

export default function Menu() {
    return (
        <div className="bg-gray-600/20 w-full h-12  justify-evenly  absolute z-80 flex justify-center items-center">
            <ResizeVideo />
            <Audio />
        </div>
    );
}
