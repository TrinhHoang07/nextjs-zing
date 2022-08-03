import Link from "next/link";
import Image from "next/image";
import vn from "../../public/event.jpg";
import {Avatar} from "antd";
import {FaUserCircle} from "react-icons/fa";
import {useAxios} from "../../hooks";


function Event() {

    const [data] = useAxios('api/events');

    return (
        <div className={"mt-8"}>
            <h2 className={"text-white font-bold text-xl"}>Sự Kiện</h2>
            <div className="flex pt-4 flex-wrap items-center justify-evenly">
                {
                    data?.general.map(song => (
                        <div key={song.id} className={"lg:w-1/3 md:w-1/2 h-auto p-3"}>
                            <Link href={""}>
                                <a className={"flex overflow-hidden rounded-md"}>
                                    <div className={"relative flex "}>
                                        <Image src={vn} className={"rounded-md hover:animate-scaleOne"} alt="song vn" />
                                        <div className="opacity-overlay"></div>
                                        <div className={"absolute bottom-3.5 left-1.5"}>
                                            <p className={"uppercase text-red-600 font-medium bg-red-50 text-ssm inline-block p-px"}>{song.ph}</p>
                                            <h3 className={"text-lg text-white font-medium line-clamp-1"}>{song.name}</h3>
                                            <p className={"text-base text-white"}>{song.des}</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <div className={"mt-1 flex items-center justify-between"}>
                                <div>
                                    <h6 className={"text-white text-base mb-1"}>Lượt quan tâm</h6>
                                    <div className="flex items-center">
                                        <Avatar.Group
                                            size={"small"}
                                        >
                                            <Avatar className={"flex bg-avatar items-center justify-center"} src={<FaUserCircle />} size="small"/>
                                            <Avatar className={"flex bg-avatar items-center justify-center"} src={<FaUserCircle />} size="small"/>
                                            <Avatar className={"flex bg-avatar items-center justify-center"} src={<FaUserCircle />} size="small"/>
                                            <Avatar className={"flex bg-avatar items-center justify-center"} src={<FaUserCircle />} size="small"/>
                                            <Avatar className={"flex bg-avatar items-center justify-center"} src={<FaUserCircle />} size="small"/>
                                            <Avatar className={"flex bg-avatar items-center justify-center"} src={<FaUserCircle />} size="small"/>
                                        </Avatar.Group>
                                        <span className={"text-arrow text-sm ml-1"}>+{song.count}</span>
                                    </div>
                                </div>
                                <div className={"rounded-3xl hover:opacity-80 uppercase text-sm text-white bg-blue-600"}>
                                    <Link href={""}>
                                        <a className={"no-underline block px-5 py-2"}>Quan Tâm</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Event;