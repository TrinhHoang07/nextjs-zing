import Image from "next/image";
import img from '../../public/country-vn.jpg';

function Singer() {
    return <div className={"mt-6"}>
        <h1 className={"text-white text-xl font-medium"}>Nghệ Sỹ</h1>
        <div className="flex items-center flex-wrap mt-2">
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Singer Name</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Singer Name</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Singer Name</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Singer Name</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Singer Name</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Singer Name</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Singer Name</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Singer Name</p>
            </div>
        </div>
    </div>
}
export default Singer;