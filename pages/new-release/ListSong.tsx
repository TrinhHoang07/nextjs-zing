import {IoMusicalNotesOutline} from "react-icons/io5";
import Image from 'next/image';
import img from '../../public/thumbnail.jpg';
import {BsPlayFill} from "react-icons/bs";
import {FiHeart} from "react-icons/fi";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {useSetRecoilState} from "recoil";
import {arrAudioSong, audioSong, currentIndexSong} from "../../store";
import {dispatchSong} from "../../uiltil/helper";
import {useAxios} from "../../hooks";


interface Props {
    state: string
}

function ListSong({state}: Props) {
    console.log(state);

    const setAudioSong = useSetRecoilState(audioSong);
    const setArrAudio = useSetRecoilState(arrAudioSong);
    const setCurrentIndexSong = useSetRecoilState(currentIndexSong);
    const [data] = useAxios('api/listsong');

    return (
        <div className={"px-5 mt-4"}>
            <div className={"flex items-center py-2 mb-1"}>
                <h3 className={"font-medium uppercase w-7/12 text-xs text-arrow"}>Bài Hát</h3>
                <h3 className={"font-medium uppercase flex-grow text-xs text-arrow"}>Phát Hành</h3>
                <h3 className={"font-medium uppercase text-xs text-arrow"}>Thời gian</h3>
            </div>
            {
                state === 'all' && (
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
                            )} className={"flex select-none items-center py-3 rounded hpt cursor-pointer hover:bg-input"}>
                                <div className={"w-7/12 flex items-center text-arrow"}>
                                    <IoMusicalNotesOutline size={"1.2rem"} className={"ml-2 mr-1"}/>
                                    <div className={"w-10 h-10 flex mx-2 relative"}>
                                        <Image src={img} className={"w-full h-full rounded"} alt="logo song" />
                                        <div className={"absolute hptc inset-0 text-white flex bg-rgbaT rounded"}>
                                            <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium text-white text-three">{song.name}</h3>
                                        <p className={"text-arrow text-sm -mt-1 text-arrow"}>{song.des}</p>
                                    </div>
                                </div>
                                <div className={"flex-grow text-arrow text-sm"}>{song.date}</div>
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
                )
            }
            {
                state === 'kpop' && (
                    data?.general.filter(item => item.type === 'kpop').map(song => (
                        <div key={song.id}>
                            <div className={"px-5 bg-primary h-px"}></div>
                            <div onDoubleClick={() => dispatchSong(setAudioSong, {
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            }, setArrAudio, [...data?.general],
                                setCurrentIndexSong, (song.id -1)
                            )} className={"flex select-none items-center py-3 rounded hpt cursor-pointer hover:bg-input"}>
                                <div className={"w-7/12 flex items-center text-arrow"}>
                                    <IoMusicalNotesOutline size={"1.2rem"} className={"ml-2 mr-1"}/>
                                    <div className={"w-10 h-10 flex mx-2 relative"}>
                                        <Image src={img} className={"w-full h-full rounded"} alt="logo song" />
                                        <div className={"absolute hptc inset-0 text-white flex bg-rgbaT rounded"}>
                                            <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium text-white text-three">{song.name}</h3>
                                        <p className={"text-arrow text-sm -mt-1 text-arrow"}>{song.des}</p>
                                    </div>
                                </div>
                                <div className={"flex-grow text-arrow text-sm"}>{song.date}</div>
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
                )
            }
            {
                state === 'vpop' && (
                    data?.general.filter(item => item.type === 'vpop').map(song => (
                        <div key={song.id}>
                            <div className={"px-5 bg-primary h-px"}></div>
                            <div onDoubleClick={() => dispatchSong(setAudioSong, {
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            }, setArrAudio, [...data?.general],
                                setCurrentIndexSong, (song.id -1)
                            )} className={"flex select-none items-center py-3 rounded hpt cursor-pointer hover:bg-input"}>
                                <div className={"w-7/12 flex items-center text-arrow"}>
                                    <IoMusicalNotesOutline size={"1.2rem"} className={"ml-2 mr-1"}/>
                                    <div className={"w-10 h-10 flex mx-2 relative"}>
                                        <Image src={img} className={"w-full h-full rounded"} alt="logo song" />
                                        <div className={"absolute hptc inset-0 text-white flex bg-rgbaT rounded"}>
                                            <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium text-white text-three">{song.name}</h3>
                                        <p className={"text-arrow text-sm -mt-1 text-arrow"}>{song.des}</p>
                                    </div>
                                </div>
                                <div className={"flex-grow text-arrow text-sm"}>{song.date}</div>
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
                )
            }
            {
                state === 'usuk' && (
                    data?.general.filter(item => item.type === 'usuk').map(song => (
                        <div key={song.id}>
                            <div className={"px-5 bg-primary h-px"}></div>
                            <div onDoubleClick={() => dispatchSong(setAudioSong, {
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            }, setArrAudio, [...data?.general],
                                setCurrentIndexSong, (song.id -1)
                            )} className={"flex select-none items-center py-3 rounded hpt cursor-pointer hover:bg-input"}>
                                <div className={"w-7/12 flex items-center text-arrow"}>
                                    <IoMusicalNotesOutline size={"1.2rem"} className={"ml-2 mr-1"}/>
                                    <div className={"w-10 h-10 flex mx-2 relative"}>
                                        <Image src={img} className={"w-full h-full rounded"} alt="logo song" />
                                        <div className={"absolute hptc inset-0 text-white flex bg-rgbaT rounded"}>
                                            <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium text-white text-three">{song.name}</h3>
                                        <p className={"text-arrow text-sm -mt-1 text-arrow"}>{song.des}</p>
                                    </div>
                                </div>
                                <div className={"flex-grow text-arrow text-sm"}>{song.date}</div>
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
                )
            }
        </div>
    )
}
export default ListSong;