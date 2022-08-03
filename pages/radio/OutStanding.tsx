import Image from "next/image";
import img from "../../public/mycoco.jpg";
import {Tooltip} from "antd";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {HiOutlineBookmark} from "react-icons/hi";


function OutStanding() {
    return (
        <div className={"mt-8"}>
            <div className="flex items-center justify-between">
                <h2 className={"text-white font-bold text-xl"}>Các Tập Nổi Bật</h2>
            </div>
            <div className="flex items-center mt-6 lg:flex-nowrap md:flex-wrap">
                <div className="lg:w-1/3 md:w-1/2 text-white">
                    <div className="flex relative items-center select-none cursor-pointer justify-between hpt hover:bg-input py-3 pl-3 rounded">
                        <div className="flex">
                            <Image src={img} width={60} height={60} className={"object-cover rounded"}
                                   alt={"Logo song"}/>
                            <div className={"ml-2"}>
                                <h1 className="text-base font-medium m-0 text-white line-clamp-1">#54 Ý nghĩa đằng sau
                                    ca...</h1>
                                <p className="text-sm text-arrow">XONE with Stars</p>
                                <p className="text-sm text-arrow">22/07/2022 . 60 phút</p>
                            </div>
                        </div>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-0 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <BiDotsHorizontalRounded size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Thêm vào thư viện"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-11 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <HiOutlineBookmark size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="flex relative items-center select-none cursor-pointer justify-between hpt hover:bg-input py-3 pl-3 rounded">
                        <div className="flex">
                            <Image src={img} width={60} height={60} className={"object-cover rounded"}
                                   alt={"Logo song"}/>
                            <div className={"ml-2"}>
                                <h1 className="text-base font-medium m-0 text-white line-clamp-1">#54 Ý nghĩa đằng sau
                                    ca...</h1>
                                <p className="text-sm text-arrow">XONE with Stars</p>
                                <p className="text-sm text-arrow">22/07/2022 . 60 phút</p>
                            </div>
                        </div>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-0 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <BiDotsHorizontalRounded size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Thêm vào thư viện"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-11 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <HiOutlineBookmark size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="flex relative items-center select-none cursor-pointer justify-between hpt hover:bg-input py-3 pl-3 rounded">
                        <div className="flex">
                            <Image src={img} width={60} height={60} className={"object-cover rounded"}
                                   alt={"Logo song"}/>
                            <div className={"ml-2"}>
                                <h1 className="text-base font-medium m-0 text-white line-clamp-1">#54 Ý nghĩa đằng sau
                                    ca...</h1>
                                <p className="text-sm text-arrow">XONE with Stars</p>
                                <p className="text-sm text-arrow">22/07/2022 . 60 phút</p>
                            </div>
                        </div>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-0 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <BiDotsHorizontalRounded size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Thêm vào thư viện"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-11 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <HiOutlineBookmark size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 text-white lg:mx-6 md:mx-0">
                    <div className="flex relative items-center select-none cursor-pointer justify-between hpt hover:bg-input py-3 pl-3 rounded">
                        <div className="flex">
                            <Image src={img} width={60} height={60} className={"object-cover rounded"}
                                   alt={"Logo song"}/>
                            <div className={"ml-2"}>
                                <h1 className="text-base font-medium m-0 text-white line-clamp-1">#54 Ý nghĩa đằng sau
                                    ca...</h1>
                                <p className="text-sm text-arrow">XONE with Stars</p>
                                <p className="text-sm text-arrow">22/07/2022 . 60 phút</p>
                            </div>
                        </div>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-0 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <BiDotsHorizontalRounded size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Thêm vào thư viện"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-11 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <HiOutlineBookmark size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="flex relative items-center select-none cursor-pointer justify-between hpt hover:bg-input py-3 pl-3 rounded">
                        <div className="flex">
                            <Image src={img} width={60} height={60} className={"object-cover rounded"}
                                   alt={"Logo song"}/>
                            <div className={"ml-2"}>
                                <h1 className="text-base font-medium m-0 text-white line-clamp-1">#54 Ý nghĩa đằng sau
                                    ca...</h1>
                                <p className="text-sm text-arrow">XONE with Stars</p>
                                <p className="text-sm text-arrow">22/07/2022 . 60 phút</p>
                            </div>
                        </div>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-0 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <BiDotsHorizontalRounded size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Thêm vào thư viện"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-11 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <HiOutlineBookmark size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="flex relative items-center select-none cursor-pointer justify-between hpt hover:bg-input py-3 pl-3 rounded">
                        <div className="flex">
                            <Image src={img} width={60} height={60} className={"object-cover rounded"}
                                   alt={"Logo song"}/>
                            <div className={"ml-2"}>
                                <h1 className="text-base font-medium m-0 text-white line-clamp-1">#54 Ý nghĩa đằng sau
                                    ca...</h1>
                                <p className="text-sm text-arrow">XONE with Stars</p>
                                <p className="text-sm text-arrow">22/07/2022 . 60 phút</p>
                            </div>
                        </div>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-0 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <BiDotsHorizontalRounded size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Thêm vào thư viện"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-11 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <HiOutlineBookmark size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-full lg:block md:flex flex-wrap text-white">
                    <div className="flex lg:w-full md:w-1/2 relative items-center select-none cursor-pointer justify-between hpt hover:bg-input py-3 pl-3 rounded">
                        <div className="flex">
                            <Image src={img} width={60} height={60} className={"object-cover rounded"}
                                   alt={"Logo song"}/>
                            <div className={"ml-2"}>
                                <h1 className="text-base font-medium m-0 text-white line-clamp-1">#54 Ý nghĩa đằng sau
                                    ca...</h1>
                                <p className="text-sm text-arrow">XONE with Stars</p>
                                <p className="text-sm text-arrow">22/07/2022 . 60 phút</p>
                            </div>
                        </div>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-0 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <BiDotsHorizontalRounded size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Thêm vào thư viện"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-11 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <HiOutlineBookmark size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="flex lg:w-full md:w-1/2 relative items-center select-none cursor-pointer justify-between hpt hover:bg-input py-3 pl-3 rounded">
                        <div className="flex">
                            <Image src={img} width={60} height={60} className={"object-cover rounded"}
                                   alt={"Logo song"}/>
                            <div className={"ml-2"}>
                                <h1 className="text-base font-medium m-0 text-white line-clamp-1">#54 Ý nghĩa đằng sau
                                    ca...</h1>
                                <p className="text-sm text-arrow">XONE with Stars</p>
                                <p className="text-sm text-arrow">22/07/2022 . 60 phút</p>
                            </div>
                        </div>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-0 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <BiDotsHorizontalRounded size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Thêm vào thư viện"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-11 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <HiOutlineBookmark size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="flex lg:w-full md:w-1/2 relative items-center select-none cursor-pointer justify-between hpt hover:bg-input py-3 pl-3 rounded">
                        <div className="flex">
                            <Image src={img} width={60} height={60} className={"object-cover rounded"}
                                   alt={"Logo song"}/>
                            <div className={"ml-2"}>
                                <h1 className="text-base font-medium m-0 text-white line-clamp-1">#54 Ý nghĩa đằng sau
                                    ca...</h1>
                                <p className="text-sm text-arrow">XONE with Stars</p>
                                <p className="text-sm text-arrow">22/07/2022 . 60 phút</p>
                            </div>
                        </div>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Khác"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-0 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <BiDotsHorizontalRounded size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                        <Tooltip mouseLeaveDelay={0} className={"p-1"} color={"#333333"} title={"Thêm vào thư viện"}>
                            <div
                                className={"w-10 bg-input absolute top-1/2 right-11 bottom-1 hptc h-10 rounded-full flex items-center justify-center mr-2 hover:bg-dotHover"}>
                                <HiOutlineBookmark size={"1.3rem"}/>
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutStanding;