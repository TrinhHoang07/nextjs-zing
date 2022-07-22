import {IoMusicalNotesOutline} from "react-icons/io5";
import Image from 'next/image';
import img from '../../public/thumbnail1.jpg';
import {BsPlayFill} from "react-icons/bs";
import {FiHeart} from "react-icons/fi";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {audioSong} from "../../store";
import {useSetRecoilState} from "recoil";
import {dispatchSong} from "../../uiltil/helper";

interface Song {
    id: number,
    name: string,
    des: string,
    date: string,
    src: string
}

const listMv:Song[] = [
    {
        id: 1,
        name: '1 Phút',
        des: 'Andrew',
        date: '3 ngày trước',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/09864cab96ef7fb126fe/6545706316276108068?authen=exp=1658646080~acl=/09864cab96ef7fb126fe/*~hmac=4be75ec434ce71999355cf9f1e803e09&fs=MTY1ODQ3MzI4MDmUsIC4OHx3ZWJWNnwwfDIwMy4yMDUdUngMzAdUngMzU'
    },
    {
        id: 2,
        name: 'Chiều Hôm Ấy',
        des: 'Jaykii',
        date: '5 ngày trước',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/19a31852c11628487107/2779820111073802153?authen=exp=1658645867~acl=/19a31852c11628487107/*~hmac=cd128800427578a56368af669cbacb42&fs=MTY1ODQ3MzA2NzU4MXx3ZWJWNnwwfDExNi45Ni4zMS4xOQ'
    },
    {
        id: 3,
        name: 'Thấy Là Yêu Thương',
        des: 'Only C, Lou Hoàng',
        date: '1 ngày trước',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/d536b5e561a188ffd1b0/747385880158281145?authen=exp=1658646265~acl=/d536b5e561a188ffd1b0/*~hmac=23382e9c51993585c21ea6dc31546de3&fs=MTY1ODQ3MzQ2NTmUsIC2Nnx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 4,
        name: 'Mãi Mãi Không Phải Anh',
        des: 'Không Nhớ',
        date: 'Hôm nay',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/44eca030d7773e296766/5109067020287327916?authen=exp=1658646290~acl=/44eca030d7773e296766/*~hmac=666de192399ae6f4f61dc9c5f8824d89&fs=MTY1ODQ3MzQ5MDgzMHx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 5,
        name: 'Hồng Nhan',
        des: 'Jack 5 Trịu',
        date: '2 ngày trước',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/0287cab2fef517ab4ee4/4725938721176572736?authen=exp=1658646022~acl=/0287cab2fef517ab4ee4/*~hmac=2faa80e01678eff98580894b22ff3f7f&fs=MTY1ODQ3MzIyMjkyMXx3ZWJWNnwwfDI3LjmUsIC3LjE3Ni42Mw'
    }
]

interface Props {
    state: string
}

function Album({state}: Props) {
    const setAudioSong = useSetRecoilState(audioSong);

    console.log(state);
    return (
        <div className={"px-5 mt-4"}>
            <div className={"flex items-center py-2 mb-1"}>
                <h3 className={"font-medium uppercase w-7/12 text-xs text-arrow"}>Album</h3>
                <h3 className={"font-medium uppercase flex-grow text-xs text-arrow"}>Phát Hành</h3>
                <h3 className={"font-medium uppercase text-xs text-arrow"}></h3>
            </div>
            {
                listMv.map(song => (
                    <div key={song.id}>
                        <div className={"px-5 bg-primary h-px"}></div>
                        <div onDoubleClick={() => dispatchSong(setAudioSong, {
                            id: song.id,
                            name: song.name,
                            des: song.des,
                            src: song.src
                        })} className={"flex select-none items-center py-4 rounded hpt cursor-pointer hover:bg-input"}>
                            <div className={"w-7/12 flex items-center text-arrow"}>
                                <IoMusicalNotesOutline size={"1.2rem"} className={"ml-2 mr-1"}/>
                                <div className={"w-70px h-70px flex mx-2 relative"}>
                                    <Image src={img} className={"w-full h-full rounded"} alt="logo song" />
                                    <div className={"absolute hptc inset-0 text-white flex bg-rgbaT rounded"}>
                                        <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                    </div>
                                </div>
                                <div className={"ml-1"}>
                                    <h3 className="text-base font-medium text-white text-three">{song.name}</h3>
                                    <p className={"text-arrow text-sm text-arrow"}>{song.des}</p>
                                </div>
                            </div>
                            <div className={"flex-grow text-arrow text-sm"}>{song.date}</div>
                            <div className={"mr-2 text-arrow flex hptc"}>
                                <div className="mr-2 w-10 h-10 rounded-full hover:bg-dotHover text-white flex items-center justify-center">
                                    <FiHeart size={"1rem"}/>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-dotHover text-white flex items-center justify-center">
                                    <BiDotsHorizontalRounded size={"1.2rem"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Album;