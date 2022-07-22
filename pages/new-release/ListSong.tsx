import {IoMusicalNotesOutline} from "react-icons/io5";
import Image from 'next/image';
import img from '../../public/thumbnail.jpg';
import {BsPlayFill} from "react-icons/bs";
import {FiHeart} from "react-icons/fi";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {useSetRecoilState} from "recoil";
import {audioSong} from "../../store";
import {dispatchSong} from "../../uiltil/helper";

interface Song {
    id: number,
    name: string,
    des: string,
    time: string,
    date: string,
    type: string,
    src: string
}

const listSong:Song[] = [
    {
        id: 1,
        name: 'Mưa Trong Lòng',
        des: 'Trịnh Đình Quang',
        time: '04:30',
        date: '3 ngày trước',
        type: 'vpop',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/c1dac0c05484bddae495/8130756290863704173?authen=exp=1658633740~acl=/c1dac0c05484bddae495/*~hmac=d2675de21cb8d4dfc8d0703879a5fb58&fs=MTY1ODQ2MDk0MDk1NXx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 2,
        name: 'Nếu Là Anh',
        des: 'The Men',
        time: '03:20',
        date: '5 ngày trước',
        type: 'vpop',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/1ab6d6b671f298acc1e3/4489476148413944828?authen=exp=1658633713~acl=/1ab6d6b671f298acc1e3/*~hmac=c7a39be086a659ef713f8f3920120a5e&fs=MTY1ODQ2MDkxMzmUsICzNHx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 3,
        name: 'Khóc Trong Mưa',
        des: 'Không Nhớ Tên',
        time: '04:12',
        date: '1 ngày trước',
        type: 'vpop',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/e9b7d6b6def237ac6ee3/3775831160906295735?authen=exp=1658633688~acl=/e9b7d6b6def237ac6ee3/*~hmac=f8494d0500d0c6d2a016e95c7ec2626c&fs=MTY1ODQ2MDg4ODYwNXx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 4,
        name: 'Là Bạn Không Thể Yêu',
        des: 'Lou Hoàng',
        time: '03:50',
        date: 'Hôm nay',
        type: 'vpop',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/4fc0c9e3eca405fa5cb5/190965040541950049?authen=exp=1658633382~acl=/4fc0c9e3eca405fa5cb5/*~hmac=90da5d2b83d89facb9f65b6c45ba02ba&fs=MTY1ODQ2MDU4MjmUsIC5Mnx3ZWJWNnwxMDA5ODE2MTQwfDQyLjExOC43MC4xODE'
    },
    {
        id: 5,
        name: 'Một Mình Có Buồn Không',
        des: 'Thiều Bảo Trâm',
        time: '05:01',
        date: '2 ngày trước',
        type: 'vpop',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/cc7489bdd3fc3aa263ed/8248994389777648421?authen=exp=1658633632~acl=/cc7489bdd3fc3aa263ed/*~hmac=0df6b4e659f6cf9d402f7e9f066696dd&fs=MTY1ODQ2MDgzMjY1MXx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 6,
        name: 'Simple Love',
        des: 'Obito, Seachains, Davis',
        time: '03:45',
        date: '1 ngày trước',
        type: 'usuk',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/813fdcaffae813b64af9/1023182095096648874?authen=exp=1658632504~acl=/813fdcaffae813b64af9/*~hmac=1c8705bf16d1400c5b6b72da5315a727&fs=MTY1ODQ1OTmUsICwNDmUsICyMHx3ZWJWNnwxMDmUsIC1NDY4MzYyfDU5LjE1My4yMjAdUngOTY'
    },
    {
        id: 7,
        name: 'I Love You',
        des: 'Bảo Thy',
        time: '05:00',
        date: '3 ngày trước',
        type: 'usuk',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/9f1b90720b36e268bb27/819304179003128259?authen=exp=1658632930~acl=/9f1b90720b36e268bb27/*~hmac=b2d414215e926faef7bc9d1c3d41439c&fs=MTY1ODQ2MDEzMDQ4OHx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 8,
        name: 'Cause I Love You',
        des: 'Noo Phước Thịnh',
        time: '03:50',
        date: '2 ngày trước',
        type: 'usuk',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/b14954a436e5dfbb86f4/2443337667425550337?authen=exp=1658633018~acl=/b14954a436e5dfbb86f4/*~hmac=25c03da2f7c41abdaa7509d715ee1cc6&fs=MTY1ODQ2MDIxODg4NHx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 9,
        name: 'Sao Em Vô Tình',
        des: 'Jack 5 trịu',
        time: '05:02',
        date: '1 ngày trước',
        type: 'usuk',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/0fa1213a097de023b96c/2819329265115630931?authen=exp=1658632707~acl=/0fa1213a097de023b96c/*~hmac=96e903050c3eb966aa75b428bd174a34&fs=MTY1ODQ1OTkwNzmUsIC5MHx3ZWJWNnwwfDExNy4zLjU3LjEzMA'
    },
    {
        id: 10,
        name: 'Sao Em Nỡ',
        des: 'Jaykii',
        time: '04:09',
        date: '5 ngày trước',
        type: 'kpop',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/6c88a7ab77ef9eb1c7fe/3404711572806749260?authen=exp=1658633300~acl=/6c88a7ab77ef9eb1c7fe/*~hmac=3759b04fa79d57662190d9f498651f56&fs=MTY1ODQ2MDUwMDgwM3x3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 11,
        name: 'Yêu Một Người Có Lẽ',
        des: 'Lou Hoàng, Miu Lê',
        time: '05:00',
        date: '3 ngày trước',
        type: 'kpop',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/45ba4ac8eb8c02d25b9d/7169464155318924092?authen=exp=1658632983~acl=/45ba4ac8eb8c02d25b9d/*~hmac=ee6346afab13a96c815bc351d1d7cb44&fs=MTY1ODQ2MDE4MzEzM3x3ZWJWNnwxMDg3MzQyMDAxfDExNi4xMDIdUngMTmUsIC4LjEwMA'
    },
    {
        id: 12,
        name: 'Là Bạn Không Thể Yêu',
        des: 'Lou Hoàng',
        time: '03:09',
        date: '1 ngày trước',
        type: 'kpop',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/4fc0c9e3eca405fa5cb5/190965040541950049?authen=exp=1658633382~acl=/4fc0c9e3eca405fa5cb5/*~hmac=90da5d2b83d89facb9f65b6c45ba02ba&fs=MTY1ODQ2MDU4MjmUsIC5Mnx3ZWJWNnwxMDA5ODE2MTQwfDQyLjExOC43MC4xODE'
    }
]

interface Props {
    state: string
}

function ListSong({state}: Props) {
    console.log(state);

    const setAudioSong = useSetRecoilState(audioSong);

    return (
        <div className={"px-5 mt-4"}>
            <div className={"flex items-center py-2 mb-1"}>
                <h3 className={"font-medium uppercase w-7/12 text-xs text-arrow"}>Bài Hát</h3>
                <h3 className={"font-medium uppercase flex-grow text-xs text-arrow"}>Phát Hành</h3>
                <h3 className={"font-medium uppercase text-xs text-arrow"}>Thời gian</h3>
            </div>
            {
                state === 'all' && (
                    listSong.map(song => (
                        <div key={song.id}>
                            <div className={"px-5 bg-primary h-px"}></div>
                            <div onDoubleClick={() => dispatchSong(setAudioSong, {
                                    id: song.id,
                                    name: song.name,
                                    des: song.des,
                                    src: song.src
                            })} className={"flex select-none items-center py-3 rounded hpt cursor-pointer hover:bg-input"}>
                                <div className={"w-7/12 flex items-center text-arrow"}>
                                    <IoMusicalNotesOutline size={"1.2rem"} className={"ml-2 mr-1"}/>
                                    <div className={"w-10 h-10 flex mx-2 relative"}>
                                        <Image src={img} className={"w-full h-full rounded"} alt="logo song" />
                                        <div className={"absolute hptc inset-0 text-white flex bg-rgbaT rounded"}>
                                            <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium text-white text-three">{song.name}</h3>
                                        <p className={"text-arrow text-sm -mt-1 text-arrow"}>{song.des}</p>
                                    </div>
                                </div>
                                <div className={"flex-grow text-arrow text-sm"}>{song.date}</div>
                                <div className={"mr-2 text-arrow hide"}>{song.time}</div>
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
                )
            }
            {
                state === 'kpop' && (
                    listSong.filter(item => item.type === 'kpop').map(song => (
                        <div key={song.id}>
                            <div className={"px-5 bg-primary h-px"}></div>
                            <div onDoubleClick={() => dispatchSong(setAudioSong, {
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            })} className={"flex select-none items-center py-3 rounded hpt cursor-pointer hover:bg-input"}>
                                <div className={"w-7/12 flex items-center text-arrow"}>
                                    <IoMusicalNotesOutline size={"1.2rem"} className={"ml-2 mr-1"}/>
                                    <div className={"w-10 h-10 flex mx-2 relative"}>
                                        <Image src={img} className={"w-full h-full rounded"} alt="logo song" />
                                        <div className={"absolute hptc inset-0 text-white flex bg-rgbaT rounded"}>
                                            <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium text-white text-three">{song.name}</h3>
                                        <p className={"text-arrow text-sm -mt-1 text-arrow"}>{song.des}</p>
                                    </div>
                                </div>
                                <div className={"flex-grow text-arrow text-sm"}>{song.date}</div>
                                <div className={"mr-2 text-arrow hide"}>{song.time}</div>
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
                )
            }
            {
                state === 'vpop' && (
                    listSong.filter(item => item.type === 'vpop').map(song => (
                        <div key={song.id}>
                            <div className={"px-5 bg-primary h-px"}></div>
                            <div onDoubleClick={() => dispatchSong(setAudioSong, {
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            })} className={"flex select-none items-center py-3 rounded hpt cursor-pointer hover:bg-input"}>
                                <div className={"w-7/12 flex items-center text-arrow"}>
                                    <IoMusicalNotesOutline size={"1.2rem"} className={"ml-2 mr-1"}/>
                                    <div className={"w-10 h-10 flex mx-2 relative"}>
                                        <Image src={img} className={"w-full h-full rounded"} alt="logo song" />
                                        <div className={"absolute hptc inset-0 text-white flex bg-rgbaT rounded"}>
                                            <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium text-white text-three">{song.name}</h3>
                                        <p className={"text-arrow text-sm -mt-1 text-arrow"}>{song.des}</p>
                                    </div>
                                </div>
                                <div className={"flex-grow text-arrow text-sm"}>{song.date}</div>
                                <div className={"mr-2 text-arrow hide"}>{song.time}</div>
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
                )
            }
            {
                state === 'usuk' && (
                    listSong.filter(item => item.type === 'usuk').map(song => (
                        <div key={song.id}>
                            <div className={"px-5 bg-primary h-px"}></div>
                            <div onDoubleClick={() => dispatchSong(setAudioSong, {
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            })} className={"flex select-none items-center py-3 rounded hpt cursor-pointer hover:bg-input"}>
                                <div className={"w-7/12 flex items-center text-arrow"}>
                                    <IoMusicalNotesOutline size={"1.2rem"} className={"ml-2 mr-1"}/>
                                    <div className={"w-10 h-10 flex mx-2 relative"}>
                                        <Image src={img} className={"w-full h-full rounded"} alt="logo song" />
                                        <div className={"absolute hptc inset-0 text-white flex bg-rgbaT rounded"}>
                                            <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium text-white text-three">{song.name}</h3>
                                        <p className={"text-arrow text-sm -mt-1 text-arrow"}>{song.des}</p>
                                    </div>
                                </div>
                                <div className={"flex-grow text-arrow text-sm"}>{song.date}</div>
                                <div className={"mr-2 text-arrow hide"}>{song.time}</div>
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
                )
            }
        </div>
    )
}
export default ListSong;