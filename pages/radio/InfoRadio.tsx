import Image from "next/image";
import img from '../../public/remix.jpg';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

function InfoRadio() {
    return (
        <div className={"mt-8"}>
            <h3 className={"inline-block px-9 pb-1 text-base text-three font-medium"}>Kênh</h3>
            <div className="flex">
                <div className="flex flex-col justify-between items-center px-6 py-3 bg-primary rounded-lg">
                    <div className="flex w-16 h-16">
                        <Image src={img} className={"rounded-full"} alt={"logo info"}/>
                    </div>
                    <div className="flex w-16 h-16 my-6">
                        <Image src={img} className={"rounded-full"} alt={"logo info"}/>
                    </div>
                    <div className="flex w-16 h-16">
                        <Image src={img} className={"rounded-full"} alt={"logo info"}/>
                    </div>
                </div>
                <div className="relative overflow-hidden">
                    <div
                        className={"absolute text-white top-1/2 bg-chartColor z-10 right-4 -translate-y-1/2 flex items-center justify-center cursor-pointer w-12 h-12 rounded-full"}>
                        <BsChevronRight size={"1.3rem"}/>
                    </div>
                    <div
                        className={"absolute text-white top-1/2 bg-chartColor z-10 left-4 -translate-y-1/2 flex items-center justify-center cursor-pointer w-12 h-12 rounded-full"}>
                        <BsChevronLeft size={"1.3rem"}/>
                    </div>
                    <div className="flex w-full flex-col flex-1 overflow-x-auto webkit-scroll">
                        <div className="flex">
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex bg-primary rounded w-584 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-584 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-584 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-584 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-584 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>
                            <div className="flex bg-primary rounded w-292 flex-shrink-0 my-1 ml-2">
                                <div className={"flex w-16 h-16 m-2"}>
                                    <Image src={img} className={"rounded-lg"} alt={"info"}/>
                                </div>
                                <div className={"mt-2"}>
                                    <h3 className={"text-sm text-white font-bold"}>Nhạc XONE theo yêu cầu</h3>
                                    <p className={"text-arrow mt-0.5"}>10:00 - 11:00</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoRadio;