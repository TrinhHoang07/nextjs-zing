import img from '../../public/blackpink.jpg';
import bts from '../../public/bts.jpg';
import yeon from '../../public/yeon.jpg';
import desbl from '../../public/desbl.jpg';
import desyeon from '../../public/desyeon.jpg';
import Image from 'next/image';
import butter from '../../public/butter.jpg';
import {BsPlayCircle} from "react-icons/bs";
import Link from 'next/link';
import {favoriteSinger} from "../../interface";


const corners:favoriteSinger[] = [
    {
        id: 1,
        name: img,
        des: 'Blackpink',
        mt: desbl
    },
    {
        id: 2,
        name: yeon,
        des: 'Taeyeon',
        mt: desyeon
    },
    {
        id: 3,
        name: bts,
        des: 'BTS',
        mt: butter
    },
]


function FavoriteSinger() {
    return (
        <div className={"mt-8"}>
            <h2 className={"text-white font-bold text-xl"}>Nghệ Sĩ Yêu Thích</h2>
            <div className="flex mt-6">
                {corners.map(info => (
                    <div key={info.id} className="w-1/4 px-2">
                        <Link href={"#"}>
                            <a>
                                <div className={"relative flex rounded overflow-hidden"}>
                                    <div className={"flex w-full h-full rounded cursor-pointer hpt hover:animate-scaleOne"}>
                                        <Image src={info.name} className={"w-full h-full rounded"} alt={"logo today"} />
                                        <div className={"hptc flex items-center text-white z-0 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"}>
                                            <div className="w-7 h-7 flex items-center cursor-pointer justify-center mx-6 rounded-full hover:opacity-90">
                                                <BsPlayCircle size={"2rem"}/>
                                            </div>
                                        </div>
                                        <div className="absolute right-3 bottom-3 left-3">
                                            <h3 className={"text-xl font-bold text-white uppercase mb-4"}>
                                                {info.des}
                                            </h3>
                                            <div className={"flex items-center justify-between"}>
                                                <div><Image src={info.mt} className={"w-full h-full rounded"} alt={"logo today"} /></div>
                                                <div className={"mx-2"}><Image src={info.mt} className={"w-full h-full rounded"} alt={"logo today"} /></div>
                                                <div><Image src={info.mt} className={"w-full h-full rounded"} alt={"logo today"} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FavoriteSinger;