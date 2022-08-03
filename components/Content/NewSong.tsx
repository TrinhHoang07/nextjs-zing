import Link from "next/link";
import Image from "next/image";
import mtk from "../../public/mtk.jpg";
import {BsPlayCircle} from "react-icons/bs";
import NewSongN2 from "./NewSongN2";
import {useAxios} from "../../hooks";


function NewSong() {

    const [data] = useAxios('api/newsongs');

    return (
        <div className={"mt-8"}>
            <h2 className={"text-white font-bold text-xl"}>Nhạc Mới</h2>
            <div className="flex pt-4 items-center justify-evenly flex-wrap">
                {
                    data?.general.map(song => (
                        <div key={song.id} className={"lg:w-1/3 md:w-1/2 h-auto p-3"}>
                            <Link href={"#"}>
                                <a className={"flex p-4 bg-primary overflow-hidden hpt rounded-md"}>
                                    <div className={"relative flex-1 flex overflow-hidden rounded-md"}>
                                        <Image src={mtk} className={"rounded-md hover:animate-scaleOne"} alt="song vn"/>
                                        <div className={"absolute text-white hptc inset-0 flex bg-rgbaT rounded"}>
                                            <BsPlayCircle className={"m-auto"} size={"1.75rem"}/>
                                        </div>
                                    </div>
                                    <div className={"flex-1 ml-3 flex flex-col justify-between"}>
                                        <div className={""}>
                                            <h3 className={"font-bold leading-5 text-base text-white"}>{song.name}</h3>
                                            <p className={"text-sm text-arrow mt-1"}>{song.des}</p>
                                        </div>
                                        <div className={"text-white"}>
                                            <span className={"text-4xl mr-2 text-transparent stroke4"}>#1</span>
                                            <span className={"text-base text-arrow"}>{song.date}</span>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <NewSongN2 />
        </div>
    )
}

export default NewSong;