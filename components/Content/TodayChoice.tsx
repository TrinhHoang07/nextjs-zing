import img from '../../public/chooToday.jpg'
import Image from 'next/image'
import {AiOutlineHeart} from "react-icons/ai";
import {BsPlayCircle} from "react-icons/bs";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {Tooltip} from "antd";
import Link from "next/link";

interface Song {
    id: number,
    name: string,
    des: string
}

const chooseSongToday:Song[] = [
    {
        id: 1,
        name: 'Nhạc Cho Thứ Hai',
        des: 'Pop tràn đầy năng lượng cho thứ hai đầu tiên'
    },
    {
        id: 2,
        name: 'Catchy Tune',
        des: 'Dễ nghe dễ nhớ, bắt tai gây nghiện ngay từ lần đầu tiên'
    },
    {
        id: 3,
        name: 'V-Pop Summer',
        des: 'Mùa hè đến gần với những sự lựa chọn V-Pop đầy màu sắc'
    },
    {
        id: 4,
        name: 'Coffe & Chill',
        des: 'Sắm ngay cho mình một cốc cafe và bật ngay chế độ '
    }
]


function TodayChoice() {
    return (
        <div className={"mt-6"}>
            <h2 className={"text-white font-bold text-xl"}>Lựa Chọn Hôm Nay</h2>
            <div className="flex mt-6">
                {chooseSongToday.map(info => (
                    <div key={info.id} className="w-1/4 px-2">
                        <Link href={""}>
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
                                <div>
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
export default TodayChoice