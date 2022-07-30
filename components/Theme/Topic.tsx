import Image from "next/image";
import img from '../../public/slider.jpg';

function Topic() {
    return <div className={"mt-6"}>
        <h1 className={"text-white text-xl font-medium"}>Chủ đề</h1>
        <div className="flex items-center mt-2">
            <div className="w-1/5 px-2">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Topic Name</p>
            </div>
            <div className="w-1/5 px-2">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Topic Name</p>
            </div>
            <div className="w-1/5 px-2">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Topic Name</p>
            </div>
        </div>
    </div>
}
export default Topic;