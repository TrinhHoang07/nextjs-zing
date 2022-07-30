import img from '../../public/hiphop.jpg';
import Image from 'next/image'
import {AiOutlineHeart} from "react-icons/ai";
import {BsPlayCircle} from "react-icons/bs";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import Link from 'next/link';
import {Tooltip} from "antd";
import {useAxios} from "../../hooks";
import {MdOutlineNavigateNext} from "react-icons/md";


function Hiphop() {

    const [data] = useAxios('api/bolero');

    return (
        <div className={"mt-4"}>
            <div className="flex items-center justify-between">
                <h2 className={"text-white hover:text-fuchsia-600 cursor-pointer font-bold text-xl"}>Hip-hop</h2>
                <p className="text-sm hover:text-fuchsia-600 cursor-pointer text-arrow flex uppercase items-center">Tất cả
                    <MdOutlineNavigateNext size={"1.5rem"}/>
                </p>
            </div>
            <div className="flex mt-6">
                {data?.general.map(info => (
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
export default Hiphop;