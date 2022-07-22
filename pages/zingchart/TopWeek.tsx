import {dispatchSong} from "../../uiltil/helper";
import Image from "next/image";
import img from "../../public/thumbnail.jpg";
import {BsPlayFill} from "react-icons/bs";
import {FiHeart} from "react-icons/fi";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {useSetRecoilState} from "recoil";
import {audioSong} from "../../store";

interface Song {
    id: number,
    name: string,
    des: string,
    time: string,
    src: string,
}

const topWeek:Song[] = [
    {
        id: 1,
        name: 'Sau Lưng Anh Có Ai Kìa',
        des: 'Thiều Bảo Trâm',
        time: '04:01',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/6967661c225dcb03924c/4853633856808819522?authen=exp=1658650064~acl=/6967661c225dcb03924c/*~hmac=8ef251f0b1ab9c2b68fd658612668a78&fs=MTY1ODQ3NzI2NDYzMXx3ZWJWNnwwfDE0LjI0MS4yNDgdUngMjU'
    },
    {
        id: 2,
        name: 'Kém Duyên',
        des: 'Rum, NIT, Masew',
        time: '05:11',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/24d3f87c2f38c6669f29/2095096462496895008?authen=exp=1658649879~acl=/24d3f87c2f38c6669f29/*~hmac=63aebed456adb40e67163b8aaaa3fc4e&fs=MTY1ODQ3NzA3OTUxM3x3ZWJWNnwwfDExMi4xOTmUsICdUngMTYwLjI0Mw'
    },
    {
        id: 3,
        name: 'Bạc Phận',
        des: 'Jack 5 trịu',
        time: '05:01',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/60d1145d3b1ad2448b0b/6176654472241979692?authen=exp=1658650459~acl=/60d1145d3b1ad2448b0b/*~hmac=1f117c3a18029394e325e5deb65bebcf&fs=MTY1ODQ3NzY2MDAwMXx3ZWJWNnwwfDEdUngNTIdUngMjA2LjEwMg'
    },
    {
        id: 4,
        name: 'Em Gì Ơi',
        des: 'Jack 5 trịu, KICM',
        time: '04:25',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/82e92cd20995e0cbb984/7970188110350163799?authen=exp=1658651742~acl=/82e92cd20995e0cbb984/*~hmac=1698b75d9e79500b3690a1ddcc481d31&fs=MTY1ODQ3ODk0MjA5NHx3ZWJWNnwwfDEyNS4yMzUdUngMjM2LjE5NA'
    },
    {
        id: 5,
        name: 'Về Bên Anh',
        des: 'Jack 5 trịu',
        time: '05:01',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/00063ebaf6fe1fa046ef/2900534645056634121?authen=exp=1658651372~acl=/00063ebaf6fe1fa046ef/*~hmac=5f6c1079e26e11ae7e05ba5640c179ae&fs=MTY1ODQ3ODU3MjAyNHx3ZWJWNnwwfDExOC43MC4xODIdUngMjMy'
    }
]


function TopWeek() {

    const setAudioSong = useSetRecoilState(audioSong);

    return (
            <>
                {
                    topWeek.map(song => (
                        <div key={song.id}>
                            <div className={"px-5 bg-primary h-px"}></div>
                            <div onDoubleClick={() => dispatchSong(setAudioSong, {
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            })} className={"flex select-none justify-between items-center py-3 rounded hpt cursor-pointer hover:bg-input"}>
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