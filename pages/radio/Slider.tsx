import Image from "next/image";
import img from '../../public/slider.jpg';
import {Progress} from "antd";
import {BsPlayCircle} from "react-icons/bs";

const sliderArr = [
    {
        id: 1,
        name: 'V-POP',
        percent: 88,
        listen: '1k đang nghe'
    },
    {
        id: 2,
        name: 'XONE Radio',
        percent: 100,
        listen: '896 đang nghe'
    },
    {
        id: 3,
        name: 'Chạm',
        percent: 60,
        listen: '320 đang nghe'
    },
    {
        id: 4,
        name: 'On Air',
        percent: 90,
        listen: '71 đang nghe'
    },
    {
        id: 5,
        name: 'Bolero',
        percent: 100,
        listen: '395 đang nghe'
    },
    {
        id: 6,
        name: 'US-UK',
        percent: 95,
        listen: '209 đang nghe'
    }
]


function Slider() {
    return (
        <div className={"flex items-center flex-wrap justify-between mt-8"}>
            {
                sliderArr.map(slider => (
                    <div key={slider.id} className={"lg:w-1/6 md:w-1/5 px-3 lg:pt-0 md:pt-2"}>
                        <div className={"flex relative cursor-pointer hpt"}>
                            <Image src={img} className={"rounded-full hover:animate-scaleOne"} alt={"logo slider"}/>
                            <Progress type="circle"
                                      className={"w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
                                      percent={slider.percent} format={() => ''}
                                      strokeColor={'#ff4b4a'}
                                      strokeWidth={3}
                            />
                            <div className="absolute left-1/2 -bottom-0.5 bg-red-600 rounded px-2 -translate-x-1/2">
                                <p className={"text-xs font-medium text-white uppercase"}>Live</p>
                            </div>
                            <div className={"absolute text-white hptc inset-0 flex bg-rgbaT rounded-full"}>
                                <BsPlayCircle className={"m-auto"} size={"1.75rem"}/>
                            </div>
                        </div>
                        <div className={"text-center mt-2"}>
                            <h3 className={"text-white font-bold text-lg"}>{slider.name}</h3>
                            <p className={"text-arrow -mt-1"}>{slider.listen}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Slider;