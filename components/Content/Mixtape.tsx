import img from '../../public/mixtape.jpg';
import Image from 'next/image'
import {AiOutlineHeart} from "react-icons/ai";
import {BsPlayCircle} from "react-icons/bs";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import Link from 'next/link';
import {Tooltip} from "antd";

interface Song {
    id: number,
    name: string,
    des: string
}

const newSongEveryDay:Song[] = [
    {
        id: 1,
        name: 'Mixtapes Họ Yêu Ai Mất Rồiii',
        des: ''
    },
    {
        id: 2,
        name: 'Mixtape Thương Thầm',
        des: 'NB3 Hoài Bảo, Lee Ken, Nal'
    },
    {
        id: 3,
        name: 'Mixtape Răng Khôn',
        des: 'Phí Phương Anh, RIN9, Orange'
    },
    {
        id: 4,
        name: 'Mixtape Ánh Chiều Tàn (Lofi Version)',
        des: ''
    }
]


function Mixtape() {
    return (
        <div className={"mt-8"}>
            <h2 className={"text-white font-bold text-xl"}>Mixtape Yêu Thích</h2>
            <div className="flex mt-6">
                {newSongEveryDay.map(info => (
                    <div key={info.id} className="w-1/4 px-2">
                        <Link href={"#"}>
                            <a>
                                <div className={"relative flex rounded overflow-hidden"}>
                                    <div className={"flex w-full h-full rounded cursor-pointer hpt hover:animate-scaleOne"}>
                                        <Image src={img} className={"w-full h-full rounded"} alt={"logo today"} />
                                        <div className={"hptc flex items-center text-white z-0 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"}>
                                            <Tooltip title={"Thêm vào thư viện"} mouseLeaveDelay={0} color={"#333333"}>
                                                <div className="w-7 h-7 flex items-center cursor-pointer justify-center hover:bg-hoverImg rounded-full">
                                                    <AiOutlineHeart size={"1.4rem"}/>
                                                </div>
                                            </Tooltip>
                                            <div className="w-7 h-7 flex items-center cursor-pointer justify-center mx-6 rounded-full hover:opacity-90">
                                                <BsPlayCircle size={"2rem"}/>
                                            </div>
                                            <Tooltip title={"Khác"} mouseLeaveDelay={0} color={"#333333"}>
                                                <div className="w-7 h-7 flex items-center cursor-pointer justify-center rounded-full hover:bg-hoverImg">
                                                    <BiDotsHorizontalRounded size={"1.4rem"}/>
                                                </div>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                                <div className={"mt-2"}>
                                    <h2 className="text-base font-bold text-white mt-1">{info.name}</h2>
                                    <p className={"text-arrow text-sm leading-snug mt-1 line-clamp-2"}>{info.des}</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Mixtape;