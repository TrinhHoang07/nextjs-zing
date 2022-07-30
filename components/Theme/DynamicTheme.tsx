import Image from "next/image";
import img from '../../public/edm.jpg';

function DynamicTheme() {
    return <div className={"mt-2"}>
        <h1 className={"text-white text-xl font-medium"}>Dynamic</h1>
        <div className="flex items-center mt-2">
            <div className="w-1/5 px-2">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>London</p>
            </div>
            <div className="w-1/5 px-2">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>London</p>
            </div>
            <div className="w-1/5 px-2">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>London</p>
            </div>
            <div className="w-1/5 px-2">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>London</p>
            </div>
            <div className="w-1/5 px-2">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>London</p>
            </div>
        </div>
    </div>
}
export default DynamicTheme;