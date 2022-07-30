import Image from "next/image";
import img from '../../public/relax.jpg';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";


function GameShow() {
    return (
        <div className={"mt-8"}>
            <div className="flex items-center justify-between">
                <h2 className={"text-white font-bold text-xl"}>Chương Trình Nổi Bật</h2>
                <div className="flex items-center">
                    <div className="text-white mr-3 cursor-pointer">
                        <BsChevronLeft size={"1.3rem"} />
                    </div>
                    <div className="text-white cursor-pointer">
                        <BsChevronRight size={"1.3rem"} />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="flex items-center mt-6 webkit-scroll overflow-x-auto">
                    <div className="w-bug flex flex-shrink-0 bg-dotHover rounded-xl p-4">
                        <div className="flex flex-shrink-0">
                            <Image src={img} width={120} height={120} className={"rounded-lg"} alt={"logo show"} />
                        </div>
                        <div className={"ml-4 flex flex-col justify-center"}>
                            <p className={"text-three font-medium"}>XONE Radio</p>
                            <h3 className={"text-white text-lg font-bold"}>XONE With Stars</h3>
                            <p className={"line-clamp-3 text-three font-medium"}>
                                Talkshow 1 tiếng với các ca sĩ, nhạc sĩ, rapper, music producer,... Hẹn hò cùng các nghệ sĩ trong nước: Tóc Tiên, Đức Phúc... hay gặp gỡ độc quyền các nghệ sĩ Quốc tế: Alan Walker, Rita Ora…cùng XONE Radio.

                                Khám phá và thưởng thức âm nhạc đa sắc màu. Phát trực tiếp lúc 18h00 thứ 6, phát lại lúc 19h00 Chủ nhật hàng tuần tại tab XONE Radio trên Zing MP3 và tần số FM 89MHz.

                                XONE WITH STARS - Dating with Stars

                                Đừng quên đón nghe bạn nhé!

                                #XONEwStars #Music
                            </p>
                        </div>
                    </div>
                    <div className="w-bug flex flex-shrink-0 bg-dotHover rounded-xl p-4 mx-6">
                        <div className="flex flex-shrink-0">
                            <Image src={img} width={120} height={120} className={"rounded-lg"} alt={"logo show"} />
                        </div>
                        <div className={"ml-4 flex flex-col justify-center"}>
                            <p className={"text-three font-medium"}>XONE Radio</p>
                            <h3 className={"text-white text-lg font-bold"}>XONE With Stars</h3>
                            <p className={"line-clamp-3 text-three font-medium"}>
                                Talkshow 1 tiếng với các ca sĩ, nhạc sĩ, rapper, music producer,... Hẹn hò cùng các nghệ sĩ trong nước: Tóc Tiên, Đức Phúc... hay gặp gỡ độc quyền các nghệ sĩ Quốc tế: Alan Walker, Rita Ora…cùng XONE Radio.

                                Khám phá và thưởng thức âm nhạc đa sắc màu. Phát trực tiếp lúc 18h00 thứ 6, phát lại lúc 19h00 Chủ nhật hàng tuần tại tab XONE Radio trên Zing MP3 và tần số FM 89MHz.

                                XONE WITH STARS - Dating with Stars

                                Đừng quên đón nghe bạn nhé!

                                #XONEwStars #Music
                            </p>
                        </div>
                    </div>
                    <div className="w-bug flex flex-shrink-0 bg-dotHover rounded-xl p-4">
                        <div className="flex flex-shrink-0">
                            <Image src={img} width={120} height={120} className={"rounded-lg"} alt={"logo show"} />
                        </div>
                        <div className={"ml-4 flex flex-col justify-center"}>
                            <p className={"text-three font-medium"}>XONE Radio</p>
                            <h3 className={"text-white text-lg font-bold"}>XONE With Stars</h3>
                            <p className={"line-clamp-3 text-three font-medium"}>
                                Talkshow 1 tiếng với các ca sĩ, nhạc sĩ, rapper, music producer,... Hẹn hò cùng các nghệ sĩ trong nước: Tóc Tiên, Đức Phúc... hay gặp gỡ độc quyền các nghệ sĩ Quốc tế: Alan Walker, Rita Ora…cùng XONE Radio.

                                Khám phá và thưởng thức âm nhạc đa sắc màu. Phát trực tiếp lúc 18h00 thứ 6, phát lại lúc 19h00 Chủ nhật hàng tuần tại tab XONE Radio trên Zing MP3 và tần số FM 89MHz.

                                XONE WITH STARS - Dating with Stars

                                Đừng quên đón nghe bạn nhé!

                                #XONEwStars #Music
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GameShow;