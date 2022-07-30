import Image from "next/image";
import img from '../../public/thumbnail1.jpg';

function Dark() {
    return <div className={"mt-6"}>
        <h1 className={"text-white text-xl font-medium"}>Màu Sáng</h1>
        <div className="flex items-center flex-wrap mt-2">
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Sáng</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Xám</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Xanh Nhạt</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Hồng Cánh Sen</p>
            </div>
        </div>
    </div>
}
export default Dark;