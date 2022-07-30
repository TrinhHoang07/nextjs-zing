import {BsPlayCircleFill} from "react-icons/bs";
import ListNewSong from "./ListNewSong";


function NewSong() {
    return (
        <div className={"pb-8"}>
            <div className="flex items-center text-blue-600 mt-12 mb-6">
                <h2 className="font-bold text-4xl text-white mr-2">Nhạc Mới</h2>
                <BsPlayCircleFill size={"2.2rem"} />
            </div>
            <div className="mt-6">
                <ListNewSong />
            </div>
        </div>
    )
}
export default NewSong;