import travel from '../../public/travel.jpg';
import travelc from '../../public/travel-c.jpg';
import pointer from '../../public/pointer.jpg';
import pointerc from '../../public/pointer-c.jpg';
import relax from '../../public/relax.jpg';
import relaxc from '../../public/relax-c.jpg';


import Image from 'next/image';
import {BsPlayCircle} from "react-icons/bs";
import Link from 'next/link';
import {favoriteSinger} from "../../interface";


const MA:favoriteSinger[] = [
    {
        id: 1,
        name: travel,
        des: 'Du Lịch',
        mt: travelc
    },
    {
        id: 2,
        name: pointer,
        des: 'Tập chung',
        mt: pointerc
    },
    {
        id: 3,
        name: relax,
        des: 'Nghỉ ngơi',
        mt: relaxc
    },
]


function MoodAndActivity2() {
    return (
        <div className={"mt-4"}>
            <div className="flex">
                {MA.map(info => (
                    <div key={info.id} className="w-1/3 px-2">
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
                                            <div className={"flex items-center"}>
                                                <div className={"w-16 h-16"}><Image src={info.mt} className={"w-full h-full rounded"} alt={"logo today"} /></div>
                                                <div className={"mx-2 w-16 h-16"}><Image src={info.mt} className={"w-full h-full rounded"} alt={"logo today"} /></div>
                                                <div className={"w-16 h-16"}><Image src={info.mt} className={"w-full h-full rounded"} alt={"logo today"} /></div>
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
export default MoodAndActivity2;