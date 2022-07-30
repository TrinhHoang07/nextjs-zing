import Image from "next/image";
import img from '../../public/mv-kpop.jpg';
import imgc from '../../public/remix.jpg';
import {BsPlayCircle} from "react-icons/bs";

const arrMV = [
    {
        id: 1,
        name: 'How You Like That',
        des: 'BLACKPINK'
    },
    {
        id: 2,
        name: 'ON The Ground',
        des: 'ROSE',
    },
    {
        id: 3,
        name: 'Nonstop',
        des: 'OH MY GIRL'
    },
    {
        id: 4,
        name: 'ON',
        des: 'BTS rr'
    },
    {
        id: 5,
        name: 'Love Sick Girl',
        des: 'BLACKPINK'
    }
]

function ItemKPOP() {
    return (
        <div className={"my-3"}>
            <div className="flex flex-wrap items-center">
                {
                    arrMV.map(item => (
                        <div key={item.id} className="w-1/3 p-3">
                            <div className="rounded-lg overflow-hidden">
                                <div className="relative cursor-pointer hover:animate-scaleOne hpt flex">
                                    <Image className={"rounded-lg"} src={img} alt={"item logo"} />
                                    <div className={"hptc text-white z-0 absolute bg-rgbaT inset-0 flex"}>
                                        <div className="w-7 h-7 flex items-center cursor-pointer justify-center m-auto rounded-full hover:opacity-90">
                                            <BsPlayCircle size={"2.5rem"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mt-2">
                                <div className="w-12 h-12 flex">
                                    <Image className={"rounded-full"} src={imgc} alt={"logo avatar"} />
                                </div>
                                <div className={"ml-2"}>
                                    <h3 className={"text-base font-medium text-white"}>{item.name}</h3>
                                    <p className={"text-arrow text-sm -mt-0.5"}>{item.des}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ItemKPOP;