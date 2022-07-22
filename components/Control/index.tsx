import Image from "next/image";
import image from '../../public/control-img.jpg';
import {Slider} from 'antd';
import { AiOutlineHeart} from "react-icons/ai";
import {BsPlayCircle, BsThreeDots, BsPauseCircle} from "react-icons/bs";
import {TiArrowShuffle} from "react-icons/ti";
import {MdQueueMusic, MdSkipNext, MdSkipPrevious, MdSlideshow} from "react-icons/md";
import {IoIosRepeat} from "react-icons/io";
import {GiMicrophone} from "react-icons/gi";
import {BiWindows} from "react-icons/bi";
import {FiVolume2, FiVolumeX} from "react-icons/fi";
import {audioSong} from '../../store';
import {useRecoilValue} from "recoil";
import {useEffect, useRef, useState} from 'react';
import {Helper} from "../../uiltil/helper";


function Control() {

    const infoSong = useRecoilValue(audioSong);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlay, setIsPlay] = useState<boolean>(false);
    const [timeCurrent, setTimeCurrent] = useState<number>(0);
    const [durationTime, setDurationTime] = useState<number>(0);
    const [sliderValue, setSliderValue] = useState<number>(0);
    const [volume, setVolume] = useState<number>(1);


    useEffect(() => {
        audioRef.current && setDurationTime(audioRef.current.duration);
        handlePlay();
    }, [infoSong])


    useEffect(() => {
        audioRef.current && audioRef.current.addEventListener('timeupdate', () => {
            const durationTime = audioRef.current && audioRef.current.duration;
            audioRef.current && setTimeCurrent(Math.floor(audioRef.current.currentTime));
            durationTime && setDurationTime(Math.floor(durationTime - timeCurrent));
            durationTime && setSliderValue((100/durationTime)*timeCurrent);
        })
    }, [timeCurrent])



    const handleEnded = () => {
        setIsPlay(false);
    }

    const handleChangeSlider = (value: number) => {
        if(audioRef.current) {
            const timer = audioRef.current && Math.floor(audioRef.current.duration);
            setSliderValue(value);
            audioRef.current.currentTime = (value*timer)/100;
        }

    }

    const handleChangeVolume = (value: number) => {
        if(audioRef.current) {
            setVolume(value);
            audioRef.current.volume = value;
        }
    }

    const handlePlay = () => {
        setIsPlay(true);
        audioRef.current && audioRef.current.play();
    }

    const handlePause = () => {
        setIsPlay(false);
        audioRef.current && audioRef.current.pause();
    }

    return <div className={"col-span-5 h-control-px text-white bg-four"}>
        <audio ref={audioRef} onEnded={handleEnded} src={infoSong.src}></audio>
        <div className="flex items-center justify-between h-full mx-6">
            <div className="flex items-center w-30">
                <Image className={"rounded"} width={64} height={64} src={image} alt={"img song"}/>
                <div className="ml-2">
                    <h3 className={"font-medium text-base text-white"}>{infoSong.name}</h3>
                    <p className={"text-xs text-five"}>{infoSong.des}</p>
                </div>
                <div className={"ml-6 w-8 h-8 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                    <AiOutlineHeart size={"1.2rem"}/>
                </div>
                <div className={"ml-2 w-8 h-8 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                    <BsThreeDots size={"1.2rem"}/>
                </div>
            </div>
            <div className={"flex-1"}>
                <div className="flex items-center justify-center mt-2">
                    <div className={"w-8 h-8 mx-3 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                        <TiArrowShuffle size={"1.5rem"}/>
                    </div>
                    <div className={"w-8 h-8 mx-3 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                        <MdSkipPrevious size={"1.5rem"}/>
                    </div>
                    {isPlay ? (
                        <div onClick={handlePause} className={"w-8 h-8 mx-3 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                            <BsPauseCircle size={"2rem"}/>
                        </div>
                    ) : (
                        <div onClick={handlePlay} className={"w-8 h-8 mx-3 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                            <BsPlayCircle size={"2rem"}/>
                        </div>
                    )}
                    <div className={"w-8 h-8 mx-3 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                        <MdSkipNext size={"1.5rem"}/>
                    </div>
                    <div className={"w-8 h-8 mx-3 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                        <IoIosRepeat size={"1.5rem"}/>
                    </div>
                </div>
                <div className={"pt-2 flex items-center"}>
                    <span className={"mr-1"}>{timeCurrent ? Helper.secondToMinus(timeCurrent) : "00:00"}</span>
                    <Slider onChange={(value) => handleChangeSlider(value)} className={"flex-1"} step={0.5} tooltipVisible={false} value={sliderValue} min={0} max={100} />
                    <span className={"ml-1"}>{durationTime ? Helper.secondToMinus(durationTime) : "00:00"}</span>
                </div>
            </div>
            <div className="flex w-30 items-center justify-end">
                <div className={"w-8 h-8 flex rounded-full items-center justify-center hover:cursor-not-allowed"}>
                    <MdSlideshow size={"1.2rem"}/>
                </div>
                <div className={"w-8 h-8 ml-1 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                    <GiMicrophone size={"1.2rem"}/>
                </div>
                <div className={"w-8 h-8 ml-1 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                    <BiWindows size={"1.2rem"}/>
                </div>
                <div className={"flex items-center"}>
                    {volume > 0 ? (
                        <div onClick={() => handleChangeVolume(0)} className={"w-8 h-8 mx-1 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                            <FiVolume2 size={"1.2rem"}/>
                        </div>
                    ) : (
                        <div onClick={() => handleChangeVolume(1)} className={"w-8 h-8 mx-1 flex rounded-full items-center justify-center hover:bg-controlHover"}>
                            <FiVolumeX size={"1.2rem"}/>
                        </div>
                    )}
                    <div className="w-16 ml-1">
                        <Slider className={"m-0"} onChange={(value) => handleChangeVolume(value)} tooltipVisible={false} value={volume} min={0} max={1} step={0.1} />
                    </div>
                </div>
                <div className="w-px h-8 bg-gray-50 mx-5"></div>
                <div className={"w-8 h-8 flex rounded items-center justify-center bg-controlHover"}>
                    <MdQueueMusic size={"1.2rem"}/>
                </div>
            </div>
        </div>
    </div>
}
export default Control