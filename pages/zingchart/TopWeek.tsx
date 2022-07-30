import {dispatchSong} from "../../uiltil/helper";
import Image from "next/image";
import img from "../../public/thumbnail.jpg";
import {BsPlayFill} from "react-icons/bs";
import {FiHeart} from "react-icons/fi";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {useSetRecoilState} from "recoil";
import {arrAudioSong, audioSong, currentIndexSong} from "../../store";
import {useAxios} from "../../hooks";


function TopWeek() {

    const setAudioSong = useSetRecoilState(audioSong);
    const setArrAudio = useSetRecoilState(arrAudioSong);
    const setCurrentIndexSong = useSetRecoilState(currentIndexSong);
    const [data] = useAxios('api/topweek');

    return (
            <>
                {
                    data?.general.map(song => (
                        <div key={song.id}>
                            <div className={"px-5 bg-primary h-px"}></div>
                            <div onDoubleClick={() => dispatchSong(setAudioSong, {
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            }, setArrAudio, [...data?.general],
                                setCurrentIndexSong, (song.id -1)
                            )} className={"flex select-none justify-between items-center py-3 rounded hpt cursor-pointer hover:bg-input"}>
                                <div className={"w-7/12 flex-1 flex items-center text-arrow"}>
                                    <div className={"flex items-center mr-3 ml-3"}>
                                        <span className={`text-3xl font-bold`}>{song.id}</span>
                                    </div>
                                    <div className={"flex items-center mr-2"}>
                                        <span className={`text-3xl font-bold`}>-</span>
                                    </div>
                                    <div className={"w-10 h-10 flex mx-2 relative flex-shrink-0"}>
                                        <Image src={img} className={"w-full h-full rounded"} alt="logo song" />
                                        <div className={"absolute hptc inset-0 text-white flex bg-rgbaT rounded"}>
                                            <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium line-clamp-1 text-white text-three">{song.name}</h3>
                                        <p className={"text-arrow text-sm line-clamp-1 -mt-1 text-arrow"}>{song.des}</p>
                                    </div>
                                </div>
                                <div className={"mr-2 text-arrow hide"}>{song.time}</div>
                                <div className={"mr-2 text-arrow flex hptc"}>
                                    <div className="mr-2 w-10 h-10 rounded-full hover:bg-dotHover text-white flex items-center justify-center">
                                        <FiHeart size={"1rem"}/>
                                    </div>
                                    <div className="w-10 h-10 rounded-full hover:bg-dotHover text-white flex items-center justify-center">
                                        <BiDotsHorizontalRounded size={"1.2rem"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
    )
}
export default TopWeek;