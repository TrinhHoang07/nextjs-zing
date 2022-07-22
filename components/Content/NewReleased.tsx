import {AiOutlineRight} from "react-icons/ai";
import Image from "next/image";
import img from "../../public/mycoco.jpg";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {useState} from "react";
import {Tooltip} from "antd";
import {useSetRecoilState} from "recoil";
import {audioSong} from "../../store";
import {dispatchSong} from "../../uiltil/helper";
import Link from "next/link";


interface Song {
    id: number,
    name: string,
    des: string,
    src: string
}

const songOne:Song[] = [
    {
        id: 1,
        name: 'Mặt Trời Khóc',
        des: 'Emcee L, Orange',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/14f422ddf99c10c2498d/8063796588128207312?authen=exp=1658551137~acl=/14f422ddf99c10c2498d/*~hmac=31abeda2aa180624d94d9da05c5c70b6&fs=MTY1ODM3ODMzNzY2NXx3ZWJWNnwxMDA3NDAyMTAzfDU4LjE4Ny4yMDUdUngMjA'
    },
    {
        id: 2,
        name: 'Stay With Me',
        des: 'Chi Pu',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/d822af62d4263d786437/2073143776979494976?authen=exp=1658551498~acl=/d822af62d4263d786437/*~hmac=65cd17352708d300c8c1410785e23227&fs=MTY1ODM3ODY5ODM0OHx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 3,
        name: 'Shay Nắnggg',
        des: 'Amee, Abito',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/f3ec91e21aa3f3fdaab2/3914616908628383772?authen=exp=1658551099~acl=/f3ec91e21aa3f3fdaab2/*~hmac=943a2fcb43d05c93e069b7ffa0858eb4&fs=MTY1ODM3ODI5OTU5Mnx3ZWJWNnwxMDmUsIC2NDQxMjgxfDExNS43My4xMzgdUngMTg5'
    }
]

const songTwo:Song[] = [
    {
        id: 1,
        name: 'Chạy Về Khóc Với Anh',
        des: 'Eric',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/baa2ed6e9d2f74712d3e/7034223956028953907?authen=exp=1658551143~acl=/baa2ed6e9d2f74712d3e/*~hmac=098ad8838542dd3011142bbcb96c0b5b&fs=MTY1ODM3ODM0MzmUsIC1N3x3ZWJWNnwyMDmUsIC3OTkwNXwxMTgdUngNjkdUngNjYdUngOTk'
    },
    {
        id: 2,
        name: 'Stay With Me',
        des: 'Chi Pu',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/d822af62d4263d786437/2073143776979494976?authen=exp=1658551498~acl=/d822af62d4263d786437/*~hmac=65cd17352708d300c8c1410785e23227&fs=MTY1ODM3ODY5ODM0OHx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 3,
        name: 'Vào Hạ',
        des: 'Suni Hạ Linh',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/e9bcac7c713d9863c12c/5123305378795324434?authen=exp=1658551255~acl=/e9bcac7c713d9863c12c/*~hmac=4febaabcfa44eb9dcd70f619bdafc0a5&fs=MTY1ODM3ODQ1NTY3OHx3ZWJWNnwwfDEyNS4yMzUdUngMjM0LjQ0'
    }
]

const songThree:Song[] = [
    {
        id: 1,
        name: 'Đoạn Tuyệt Nàng Đi',
        des: 'Hoang Trinh',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/21cc6b43c102285c7113/427934704861987726?authen=exp=1658551740~acl=/21cc6b43c102285c7113/*~hmac=32c403d23bb190a3ac6e431e85a0d697&fs=MTY1ODM3ODk0MDmUsICwNnx3ZWJWNnwwfDU4LjE4Ny4xODkdUngNTU'
    },
    {
        id: 2,
        name: 'I Love You',
        des: 'I Don\'t Know',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/2313a1ca358edcd0859f/2989909249187583829?authen=exp=1658551886~acl=/2313a1ca358edcd0859f/*~hmac=bb2a69db98849e31aa31dc24a0e4d7d1&fs=MTY1ODM3OTA4Njg5NXx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 3,
        name: 'Miss You',
        des: 'No One',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/a682d50ddc4935176c58/7385455273955198637?authen=exp=1658551915~acl=/a682d50ddc4935176c58/*~hmac=da7b0c59f629832342fcda69e8a5115c&fs=MTY1ODM3OTExNTgxOXx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    }
]

const mvInfoOne:Song[] = [
    {
        id: 1,
        name: 'Nếu Ngày Ấy',
        des: 'Sobin',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/659ad76efc2915774c38/9154281717259436772?authen=exp=1658552038~acl=/659ad76efc2915774c38/*~hmac=3ef883f777b313cd65b2104f6530d44c&fs=MTY1ODM3OTIzODk0MHx3ZWJWNnwxMDE5MDE5MjYzfDE0LjI0My4yOS4xOTM'
    },
    {
        id: 2,
        name: 'Xe Đạp',
        des: 'Thùy Chi',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/607dd564df20367e6f31/7961013187244538410?authen=exp=1658552109~acl=/607dd564df20367e6f31/*~hmac=ecdccd9d5e3cd7162d6cc8838c481100&fs=MTY1ODM3OTMwOTU2OHx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    }
]

const mvInfoTwo:Song[] = [
    {
        id: 1,
        name: 'Phố Đã Lên Đèn',
        des: 'Huyền Tâm Môn',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/9586d48c35cbdc9585da/4770777444890002512?authen=exp=1658552162~acl=/9586d48c35cbdc9585da/*~hmac=7be52921a617c916e630743ce4fef4d5&fs=MTY1ODM3OTM2MjkxN3x3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 2,
        name: 'Xin Đừng Lặng Im',
        des: 'SoBin',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/3cedeac33387dad98396/8127820420268223686?authen=exp=1658551910~acl=/3cedeac33387dad98396/*~hmac=3950f7654dba238997fd4abbd4842a06&fs=MTY1ODM3OTExMDQxMnx3ZWJWNnwxMDM2NzmUsIC2MTQ3fDEyNS4yMzUdUngMjM4LjIxOA'
    }
]

const mvInfoThree:Song[] = [
    {
        id: 1,
        name: 'Sóng Gió',
        des: 'Jack & KICM',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/b800471a6d5d8403dd4c/1145597756150434004?authen=exp=1658552257~acl=/b800471a6d5d8403dd4c/*~hmac=5483b01f3e49461df5a074bcbf034bb9&fs=MTY1ODM3OTQ1NzAyNXx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 2,
        name: 'Não Cá Vàng',
        des: 'Lou Hoàng, Only C',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/10b17cee94af7df124be/606436130488205377?authen=exp=1658552350~acl=/10b17cee94af7df124be/*~hmac=4e3bf71724aa8a2f8f1ad08e684f86d0&fs=MTY1ODM3OTU1MDMyNXx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    }
]

function NewReleased() {

    const [isAlbum, setIsAlbum] = useState<boolean>(true);
    const [active, setActive] = useState<string>('songs');
    const setAudioSong = useSetRecoilState(audioSong);

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
                <div className="flex items-center mt-6">
                    <div className="w-1/3 h-auto text-white ">
                        {songOne.map(song => (
                            <div key={song.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            })} className="flex items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
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
                    <div className="w-1/3 h-auto mx-6 text-white">
                        {songTwo.map(song => (
                            <div key={song.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            })} className="flex items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
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
                    <div className="w-1/3 h-auto text-white">
                        {songThree.map(song => (
                            <div key={song.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            })} className="flex items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
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
            ) : (<div className="flex items-center mt-6">
                <div className="w-1/3 h-auto text-white">
                    {mvInfoOne.map(mv => (
                        <div key={mv.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                            id: mv.id,
                            name: mv.name,
                            des: mv.des,
                            src: mv.src
                        })} className="flex items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
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
                <div className="w-1/3 h-auto mx-6 text-white">
                    {mvInfoTwo.map(mv => (
                        <div key={mv.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                            id: mv.id,
                            name: mv.name,
                            des: mv.des,
                            src: mv.src
                        })} className="flex items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
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
                <div className="w-1/3 h-auto text-white">
                    {mvInfoThree.map(mv => (
                        <div key={mv.id} onDoubleClick={() => dispatchSong(setAudioSong,{
                            id: mv.id,
                            name: mv.name,
                            des: mv.des,
                            src: mv.src
                        })} className="flex items-center select-none cursor-pointer justify-between hpt hover:bg-input py-2 pl-2 rounded">
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