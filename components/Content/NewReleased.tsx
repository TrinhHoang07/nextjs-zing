import {AiOutlineRight} from "react-icons/ai";
import Image from "next/image";
import img from "../../public/mycoco.jpg";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {useState} from "react";
import {Tooltip} from "antd";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {audioSong, currentIndexSong} from "../../store";
import {arrAudioSong} from '../../store'
import {dispatchSong} from "../../uiltil/helper";
import Link from "next/link";
import {soundSong} from "../../interface";


const songOne:soundSong[] = [
    {
        id: 1,
        name: 'Mặt Trời Khóc',
        des: 'Emcee L, Orange',
        src: 'https://docs.google.com/uc?id=1X5NB3S0T_-tmJa30JXBZ_4frqGLas6J9'
    },
    {
        id: 2,
        name: 'Cảm Nắng',
        des: 'Suni Hạ Linh',
        src: 'https://docs.google.com/uc?id=1ycU0xJN_YeGvztmC6QeND2dLk4VpmWhA'
    },
    {
        id: 3,
        name: 'Shay Nắnggg',
        des: 'Amee, Abito',
        src: 'https://docs.google.com/uc?id=1zwDgLgtIxZ2-mrUdpqzzdrhG0M5jtEg7'
    }
]

const songTwo:soundSong[] = [
    {
        id: 4,
        name: 'Chạy Về Khóc Với Anh',
        des: 'Eric',
        src: 'https://docs.google.com/uc?id=180obfMXb5ngtk70jxVzOB-jviImRNoPQ'
    },
    {
        id: 5,
        name: 'Cảm Nắng',
        des: 'Suni Hạ Linh',
        src: 'https://docs.google.com/uc?id=1ycU0xJN_YeGvztmC6QeND2dLk4VpmWhA'
    },
    {
        id: 6,
        name: 'Vào Hạ',
        des: 'Suni Hạ Linh',
        src: 'https://docs.google.com/uc?id=1U4IsaN-lwq91DoeTBiz4v9HhLjyx2G27'
    }
]

const songThree:soundSong[] = [
    {
        id: 7,
        name: 'Đoạn Tuyệt Nàng Đi',
        des: 'Hoang Trinh',
        src: 'https://docs.google.com/uc?id=1wdu7ft6Gv9WgRuMS6-J4PxqrSIxnctsS'
    },
    {
        id: 8,
        name: 'I Love You',
        des: 'I Don\'t Know',
        src: 'https://docs.google.com/uc?id=17ASaAcvx_ktSBJS4qtd-MMk2ohV3kOOB'
    },
    {
        id: 9,
        name: 'Miss You',
        des: 'No One',
        src: 'https://docs.google.com/uc?id=1pa1BYmA_vtI7HRZliK4-Ah3dbovGW4TG'
    }
]

const mvInfoOne:soundSong[] = [
    {
        id: 1,
        name: 'Yêu Thương Ngày Đó',
        des: 'Sobin',
        src: 'https://docs.google.com/uc?id=1yjaLMGZqepffeckbYHs-55ER_3RTzafd'
    },
    {
        id: 2,
        name: 'Xe Đạp',
        des: 'Thùy Chi',
        src: 'https://docs.google.com/uc?id=1ORvF61blHLERQeKKlmN3oJk1mY0SDccR'
    }
]

const mvInfoTwo:soundSong[] = [
    {
        id: 3,
        name: 'Phố Đã Lên Đèn',
        des: 'Huyền Tâm Môn',
        src: 'https://docs.google.com/uc?id=1QP_feFVUo3Rj7D7mCATtvf2Zadt_BWOU'
    },
    {
        id: 4,
        name: 'Xin Đừng Lặng Im',
        des: 'SoBin',
        src: 'https://docs.google.com/uc?id=1iCbjfIXwcFimA0IPe0wlH_M35NNocp6f'
    }
]

const mvInfoThree:soundSong[] = [
    {
        id: 5,
        name: 'Sóng Gió',
        des: 'Jack & KICM',
        src: 'https://docs.google.com/uc?id=1Wq3Y-O5io52S5LOliQmlw9tuF4gxA1OB'
    },
    {
        id: 6,
        name: 'Não Cá Vàng',
        des: 'Lou Hoàng, Only C',
        src: 'https://docs.google.com/uc?id=1vQzsAmuwbb15gTVnBtuDW18Iv7tfSxFl'
    }
]

function NewReleased() {

    const [isAlbum, setIsAlbum] = useState<boolean>(true);
    const [active, setActive] = useState<string>('songs');
    const setAudioSong = useSetRecoilState(audioSong);
    const setArrAudio = useSetRecoilState(arrAudioSong);
    const setCurrentIndexSong = useSetRecoilState(currentIndexSong);


    const handleActiveSongs = () => {
        setActive('songs');
        setIsAlbum(true);
    }

    const handleActiveAlbums = () => {
        setActive('albums');
        setIsAlbum(false);
    }

    return (
        <div className={"mt-6"}>
            <h2 className={"text-white font-bold text-xl"}>Mới Phát Hành</h2>
            <div className="flex items-center justify-between">
                <div className="flex items-center text-white mt-4">
                    <button onClick={handleActiveSongs} className={`w-96px h-6 hover:cusor-pointer text-xs uppercase border border-arrow rounded-2xl m-0 ${active === 'songs' && "bg-fuchsia-600"}`}>Bài Hát</button>
                    <button onClick={handleActiveAlbums} className={`w-96px h-6 hover:cusor-pointer text-xs uppercase border border-arrow rounded-2xl m-0 ml-4 ${active === 'albums' && "bg-fuchsia-600"}`}>Album</button>
                </div>
                <div className={"flex items-center text-arrow hover:cursor-pointer"}>
                    <Link href={"/new-release"}>
                        <a>
                            <h5 className={"text-xs uppercase text-arrow mr-1"}>Tất cả</h5>
                        </a>
                    </Link>
                    <AiOutlineRight size={"1rem"}/>
                </div>
            </div>
            {isAlbum ? (
                <div className="flex flex-wrap items-center mt-6">
                    <div className="lg:w-1/3 md:w-1/2 h-auto text-white ">
                        {songOne.map(song => (
                            <div key={song.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            }, setArrAudio, [...songOne, ...songTwo, ...songThree],
                                setCurrentIndexSong, (song.id - 1)
                            )} className="flex items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
                                <div className="flex">
                                    <Image src={img} width={40} height={40} className={"object-cover rounded"} alt={"Logo song"}/>
                                    <div className={"ml-2"}>
                                        <h1 className="text-sm font-medium m-0 text-white">{song.name}</h1>
                                        <p className="text-xs m-0">{song.des}</p>
                                    </div>
                                </div>
                                <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                                    <div className={"w-10 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                        <BiDotsHorizontalRounded size={"1.5rem"}/>
                                    </div>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 h-auto px-6 md:px-0 text-white">
                        {songTwo.map(song => (
                            <div key={song.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            }, setArrAudio, [...songOne, ...songTwo, ...songThree],
                                setCurrentIndexSong, (song.id - 1)
                            )} className="flex items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
                                <div className="flex">
                                    <Image src={img} width={40} height={40} className={"object-cover rounded"} alt={"Logo song"}/>
                                    <div className={"ml-2"}>
                                        <h1 className="text-sm font-medium m-0 text-white">{song.name}</h1>
                                        <p className="text-xs m-0">{song.des}</p>
                                    </div>
                                </div>
                                <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                                    <div className={"w-10 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                        <BiDotsHorizontalRounded size={"1.5rem"}/>
                                    </div>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-1/3 h-auto md:w-full lg:block md:flex flex-wrap text-white">
                        {songThree.map(song => (
                            <div key={song.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            }, setArrAudio, [...songOne, ...songTwo, ...songThree],
                                setCurrentIndexSong, (song.id - 1)
                            )} className="flex md:w-1/2 lg:w-full items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
                                <div className="flex">
                                    <Image src={img} width={40} height={40} className={"object-cover rounded"} alt={"Logo song"}/>
                                    <div className={"ml-2"}>
                                        <h1 className="text-sm font-medium m-0 text-white">{song.name}</h1>
                                        <p className="text-xs m-0">{song.des}</p>
                                    </div>
                                </div>
                                <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                                    <div className={"w-10 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                        <BiDotsHorizontalRounded size={"1.5rem"}/>
                                    </div>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (<div className="flex flex-wrap items-center mt-6">
                <div className="lg:w-1/3 md:w-1/2 h-auto text-white">
                    {mvInfoOne.map(mv => (
                        <div key={mv.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                            id: mv.id,
                            name: mv.name,
                            des: mv.des,
                            src: mv.src
                        }, setArrAudio, [...mvInfoOne, ...mvInfoTwo, ...mvInfoThree],
                            setCurrentIndexSong, (mv.id - 1)
                        )} className="flex items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
                            <div className="flex items-center">
                                <Image src={img} width={70} height={70} className={"object-cover rounded"} alt={"Logo song"}/>
                                <div className={"ml-2"}>
                                    <h1 className="text-sm font-medium m-0 text-white">{mv.name}</h1>
                                    <p className="text-xs m-0">{mv.des}</p>
                                </div>
                            </div>
                            <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                                <div className={"w-10 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                    <BiDotsHorizontalRounded size={"1.5rem"}/>
                                </div>
                            </Tooltip>
                        </div>
                    ))}
                </div>
                <div className="lg:w-1/3 md:w-1/2 h-auto px-6 md:px-0 text-white">
                    {mvInfoTwo.map(mv => (
                        <div key={mv.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                            id: mv.id,
                            name: mv.name,
                            des: mv.des,
                            src: mv.src
                        }, setArrAudio,[...mvInfoOne, ...mvInfoTwo, ...mvInfoThree],
                            setCurrentIndexSong, (mv.id - 1)
                        )} className="flex items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
                            <div className="flex items-center">
                                <Image src={img} width={70} height={70} className={"object-cover rounded"} alt={"Logo song"}/>
                                <div className={"ml-2"}>
                                    <h1 className="text-sm font-medium m-0 text-white">{mv.name}</h1>
                                    <p className="text-xs m-0">{mv.des}</p>
                                </div>
                            </div>
                            <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                                <div className={"w-10 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                    <BiDotsHorizontalRounded size={"1.5rem"}/>
                                </div>
                            </Tooltip>
                        </div>
                    ))}
                </div>
                <div className="lg:w-1/3 md:w-full lg:block md:flex md:flex-wrap h-auto text-white">
                    {mvInfoThree.map(mv => (
                        <div key={mv.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                            id: mv.id,
                            name: mv.name,
                            des: mv.des,
                            src: mv.src
                        }, setArrAudio, [...mvInfoOne, ...mvInfoTwo, ...mvInfoThree],
                            setCurrentIndexSong, (mv.id - 1)
                        )} className="flex md:w-1/2 lg:w-full items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
                            <div className="flex items-center">
                                <Image src={img} width={70} height={70} className={"object-cover rounded"} alt={"Logo song"}/>
                                <div className={"ml-2"}>
                                    <h1 className="text-sm font-medium m-0 text-white">{mv.name}</h1>
                                    <p className="text-xs m-0">{mv.des}</p>
                                </div>
                            </div>
                            <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                                <div className={"w-10 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                    <BiDotsHorizontalRounded size={"1.5rem"}/>
                                </div>
                            </Tooltip>
                        </div>
                    ))}
                </div>
            </div>)}
        </div>
    )
}
export default NewReleased