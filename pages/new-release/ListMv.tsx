import {IoMusicalNotesOutline} from "react-icons/io5";
import Image from 'next/image';
import img from '../../public/thumbnail1.jpg';
import {BsPlayFill} from "react-icons/bs";
import {FiHeart} from "react-icons/fi";
import {BiDotsHorizontalRounded} from "react-icons/bi";

interface Song {
    id: number,
    name: string,
    des: string,
    date: string,
}

const listMv:Song[] = [
    {
        id: 1,
        name: '1 Phút',
        des: 'Andrew',
        date: '3 ngày trước'
    },
    {
        id: 2,
        name: 'Chiều Hôm Ấy',
        des: 'Jaykii',
        date: '5 ngày trước'
    },
    {
        id: 3,
        name: 'Thấy Là Yêu Thương',
        des: 'Only C, Lou Hoàng',
        date: '1 ngày trước'
    },
    {
        id: 4,
        name: 'Mãi Mãi Không Phải Anh',
        des: 'Không Nhớ',
        date: 'Hôm nay'
    },
    {
        id: 5,
        name: 'Hồng Nhan',
        des: 'Jack 5 Trịu',
        date: '2 ngày trước'
    }
]

interface Props {
    state: string
}

function Album({state}: Props) {
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
                        <div className={"flex select-none items-center py-4 rounded hpt cursor-pointer hover:bg-input"}>
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