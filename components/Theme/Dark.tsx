import Image from "next/image";
import img from '../../public/travel.jpg';

function Dark() {
    return <div className={"mt-6"}>
        <h1 className={"text-white text-xl font-medium"}>Màu Tối</h1>
        <div className="flex items-center flex-wrap mt-2">
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Xanh</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Đỏ</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Tím</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Vàng</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Nâu</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Đen</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Trắng</p>
            </div>
            <div className="w-1/5 px-2 mt-4">
                <div className="flex h-28 cursor-pointer">
                    <Image src={img} className={"rounded-lg"} alt={"logo theme"} />
                </div>
                <p className={"text-white text-sm mt-0.5 font-medium"}>Xóa</p>
            </div>
        </div>
    </div>
}
export default Dark;