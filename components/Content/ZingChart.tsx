import {BsPlayCircleFill, BsPlayFill} from "react-icons/bs";
import Image from 'next/image'
import img from '../../public/mycoco.jpg';
import ChartSong from './ChartSong';
import Link from 'next/link'
import {useSetRecoilState} from "recoil";
import {arrAudioSong, audioSong, currentIndexSong} from "../../store";
import {dispatchSong} from '../../uiltil/helper';
import {useAxios} from "../../hooks";


function ZingChart() {

    const [data] = useAxios('api/zingchart');
    const setAudioSong = useSetRecoilState(audioSong);
    const setArrAudio = useSetRecoilState(arrAudioSong);
    const setCurrentIndexSong = useSetRecoilState(currentIndexSong);

    return (
        <div className={"bg-primary mt-6"}>
            <div className="p-4 flex">
                <div className="w-5/12 p-2">
                    <div className="flex items-center text-white">
                        <h2 className="font-bold text-3xl text-white mr-2">#zingchart</h2>
                        <BsPlayCircleFill size={"1.75rem"}/>
                    </div>
                    {data?.general.map(info => (
                        <div key={info.id} onDoubleClick={() => dispatchSong(setAudioSong, {
                            id: info.id,
                            name: info.name,
                            des: info.des,
                            src: info.src
                        }, setArrAudio, [...data?.general],
                            setCurrentIndexSong, (info.id -1)
                        )}
                             className={"flex justify-between select-none hpt hover:bg-hoverImg cursor-pointer my-3 px-4 py-3 items-center text-white bg-chartColor rounded"}>
                            <div className="flex items-center">
                                <div className={"flex items-center mr-3"}>
                                    <span className={`text-3xl ${info.color} font-bold`}>{info.id}</span>
                                </div>
                                <div className={"relative w-15 h-15 flex mr-2"}>
                                    <Image src={img} className={"w-full h-full rounded"} alt={"logo song"}/>
                                    <div className={"absolute hptc inset-0 flex bg-rgbaT rounded"}>
                                        <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                    </div>
                                </div>
                                <div className={""}>
                                    <h2 className={"font-medium text-white leading-tight text-base"}>{info.name}</h2>
                                    <p className={"text-sm text-desColor"}>{info.des}</p>
                                </div>
                            </div>
                            <div>
                                <span className={"text-xl font-bold"}>{info.percent}</span>
                            </div>
                        </div>
                    ))}
                    <div className={"text-center"}>
                        <Link href="/zingchart">
                            <a className={"mt-1 inline-block text-white outline-0 py-1 border border-avatar text-base rounded-3xl bg-primary px-6"}>Xem
                                thêm</a>
                        </Link>
                    </div>
                </div>
                <div className={"flex-1 flex flex-col justify-end p-2 mb-3 mt-18"}>
                    <ChartSong/>
                </div>
            </div>
        </div>
    )
}

export default ZingChart;