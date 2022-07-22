import {BsPlayCircleFill, BsPlayFill} from "react-icons/bs";
import Image from 'next/image'
import img from '../../public/mycoco.jpg';
import ChartSong from './ChartSong';
import Link from 'next/link'
import {useSetRecoilState} from "recoil";
import {audioSong} from "../../store";
import {dispatchSong} from '../../uiltil/helper';

interface Song {
    id: number,
    name: string,
    des: string,
    color: string,
    percent: string,
    src: string
}

const songCharts:Song[] = [
    {
        id: 1,
        name: 'Em Nên',
        des: 'Khang Việt',
        color: 'stroke1',
        percent: '50%',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/b20d982d446cad32f47d/6809065341606619327?authen=exp=1658630252~acl=/b20d982d446cad32f47d/*~hmac=0bbfa37923d0a187ff7568d0115aea6e&fs=MTY1ODQ1NzQ1MjUwN3x3ZWJWNnwxMDEwNTmUsIC0NTEwfDEyMC43Mi4xMDYdUngOTA'
    },
    {
        id: 2,
        name: 'Mẹ Anh Bắt Chia Tay',
        des: 'Miu Lê',
        color: 'stroke2',
        percent: '31%',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/656217daee9b07c55e8a/2674514253420310719?authen=exp=1658630271~acl=/656217daee9b07c55e8a/*~hmac=86dcea1ce0b089447ff59641f76e8fc9&fs=MTY1ODQ1NzQ3MTA1NXx3ZWJWNnwxMDYwMDMzNDI1fDEwMS41My4xOC4xMzA'
    },
    {
        id: 3,
        name: 'Nếu Gọi Nhau Là Anh Em',
        des: 'Du Thiên, Đạt Villa',
        color: 'stroke3',
        percent: '19%',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/a8cb7f7a993b7065292a/6349799785833644892?authen=exp=1658630904~acl=/a8cb7f7a993b7065292a/*~hmac=469f99cce02c558134605eddf9a0a87e&fs=MTY1ODQ1ODEwNDE1Mnx3ZWJWNnwwfDE0LjE2My41MS4yOA'
    }
]

function ZingChart() {

    const setAudioSong = useSetRecoilState(audioSong);

    return (
        <div className={"bg-primary mt-6"}>
            <div className="p-4 flex">
                <div className="w-5/12 p-2">
                    <div className="flex items-center text-white">
                        <h2 className="font-bold text-3xl text-white mr-2">#zingchart</h2>
                        <BsPlayCircleFill size={"1.75rem"}/>
                    </div>
                    {songCharts.map(info => (
                        <div key={info.id} onDoubleClick={() => dispatchSong(setAudioSong, {
                            id: info.id,
                            name: info.name,
                            des: info.des,
                            src: info.src
                        })} className={"flex justify-between select-none hpt hover:bg-hoverImg cursor-pointer my-3 px-4 py-3 items-center text-white bg-chartColor rounded"}>
                            <div className="flex items-center">
                                <div className={"flex items-center mr-3"}>
                                    <span className={`text-3xl ${info.color} font-bold`}>{info.id}</span>
                                </div>
                                <div className={"relative w-15 h-15 flex mr-2"}>
                                    <Image src={img} className={"w-full h-full rounded"} alt={"logo song"} />
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
                        <Link href="#">
                            <a className={"mt-1 inline-block text-white outline-0 py-1 border border-avatar text-base rounded-3xl bg-primary px-6"}>Xem thêm</a>
                        </Link>
                    </div>
                </div>
                <div className={"flex-1 flex flex-col justify-end p-2 mb-3 mt-18"}>
                    <ChartSong />
                </div>
            </div>
        </div>
    )
}
export default ZingChart;