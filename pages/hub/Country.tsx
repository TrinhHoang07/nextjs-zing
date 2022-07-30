import workout from '../../public/country-vn.jpg';
import workoutc from '../../public/hub-workout-c.jpg';
import running from '../../public/country-korea.jpg';
import runningc from '../../public/hub-running-c.jpg';
import game from '../../public/country-usuk.jpg';
import gamec from '../../public/hub-game-c.jpg';


import Image from 'next/image';
import {BsPlayCircle} from "react-icons/bs";
import Link from 'next/link';
import {favoriteSinger} from "../../interface";


const MA:favoriteSinger[] = [
    {
        id: 1,
        name: workout,
        des: 'Nhạc Việt',
        mt: workoutc
    },
    {
        id: 2,
        name: running,
        des: 'Nhạc Âu Mỹ',
        mt: runningc
    },
    {
        id: 3,
        name: game,
        des: 'Nhạc Hàn',
        mt: gamec
    },
]


function Country() {
    return (
        <div className={"mt-4"}>
            <h2 className={"text-white font-bold text-xl"}>Quốc Gia</h2>
            <div className="flex mt-6">
                {MA.map(info => (
                    <div key={info.id} className="w-1/3 px-2">
                        <Link href={"#"}>
                            <a>
                                <div className={"relative flex rounded overflow-hidden"}>
                                    <div className={"flex w-full h-full rounded cursor-pointer hover:animate-scaleOne"}>
                                        <Image src={info.name} className={"w-full h-full rounded"} alt={"logo today"} />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
                                            <h3 className={"text-xl font-bold text-white uppercase mb-4"}>
                                                {info.des}
                                            </h3>
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
export default Country;