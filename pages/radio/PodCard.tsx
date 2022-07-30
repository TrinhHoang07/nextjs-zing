import img from '../../public/podcard.jpg';
import Image from 'next/image';
import Link from 'next/link';
import {useAxios} from "../../hooks";
import {MdOutlineNavigateNext} from "react-icons/md";


function PodCard() {

    const [data] = useAxios('api/PodCard');

    return (
        <div className={"mt-8"}>
            <div className="flex items-center justify-between">
                <h2 className={"text-white font-bold text-xl"}>Khám Phá PodCast</h2>
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
                                    </div>
                                </div>
                                <div className={"mt-2"}>
                                    <h2 className="text-base font-bold text-white mt-1">{info.name}</h2>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PodCard;