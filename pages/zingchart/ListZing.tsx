import {dispatchSong} from "../../uiltil/helper";
import Image from "next/image";
import img from "../../public/thumbnail.jpg";
import {BsPlayFill} from "react-icons/bs";
import {FiHeart} from "react-icons/fi";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {audioSong} from "../../store";
import {useSetRecoilState} from "recoil";


interface Song {
    id: number,
    name: string,
    des: string,
    date: string,
    time: string,
    src: string
}

const listZing:Song[] = [
    {
        id: 1,
        name: 'Không Sao Mà, Em Đây Rồi',
        des: 'Suni Hạ Linh',
        date: 'Mãi mãi là thế',
        time: '05:00',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/366fa8ff83b86ae633a9/8235770814660146380?authen=exp=1658648274~acl=/366fa8ff83b86ae633a9/*~hmac=c60a787fe2e71387712adb310252ab23&fs=MTY1ODQ3NTQ3NDE1Mnx3ZWJWNnwxMDmUsIC4MzQxMTQ3fDQyLjExMy42MC45NA'
    },
    {
        id: 2,
        name: 'Lời Nói Điêu Trên Môi Em',
        des: 'Đỗ Nguyên Phúc, Lil Z',
        date: 'Sự thật',
        time: '03:50',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/5c564bdfe2980bc65289/4478687336677614561?authen=exp=1658648166~acl=/5c564bdfe2980bc65289/*~hmac=ede843e370311d655c8ca2a667ee8002&fs=MTY1ODQ3NTM2Njg4OHx3ZWJWNnwxMDQ1ODQ5MTmUsICyfDEdUngNTUdUngMTmUsICxLjI0Ng'
    },
    {
        id: 3,
        name: 'Trời Mang Giấu Đi',
        des: 'AMEE, Hoàng Dũng',
        date: 'Hôm nay',
        time: '04:30',
        src:  'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/01318d6c272bce75973a/2540879074278059846?authen=exp=1658648555~acl=/01318d6c272bce75973a/*~hmac=1ea3c99bf7a273214fa6ebc307aca035&fs=MTY1ODQ3NTmUsIC1NTE0Nnx3ZWJWNnwxMDU4MTM0NTEzfDExMy4yMy4xMTEdUngMTAx'
    },
    {
        id: 4,
        name: 'Rồi Em Sẽ Nhận Ra',
        des: 'Jason Việt Nguyễn',
        date: 'So I\'m ok',
        time: '02:58',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/471d2c98ffdc16824fcd/5914365967310426678?authen=exp=1658648841~acl=/471d2c98ffdc16824fcd/*~hmac=99841d7c4867007e47bc77145e17a90a&fs=MTY1ODQ3NjA0MTI2NHx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 5,
        name: 'Nụ Hôn Đánh Rơi',
        des: 'Hoàng Yến Chibi',
        date: 'Nước mắt',
        time: '05:00',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/2e8b58b08ef467aa3ee5/3494965449319269813?authen=exp=1658648463~acl=/2e8b58b08ef467aa3ee5/*~hmac=94ba74849ea28f299cf61d2dee35ba33&fs=MTY1ODQ3NTY2MzM0MXx3ZWJWNnwwfDExNS43OC4wLjmUsIC4'
    },
    {
        id: 6,
        name: 'Phố Cũ Còn Anh',
        des: 'Quinn',
        date: 'Còn lại gì?',
        time: '04:50',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/b0a036ab89ec60b239fd/532936088223796858?authen=exp=1658649022~acl=/b0a036ab89ec60b239fd/*~hmac=37f58853fcb1807f13a8edb084b3f4d3&fs=MTY1ODQ3NjIyMjEyNHx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 7,
        name: 'Trong Trí Nhớ Của Anh',
        des: 'Trần Nguyễn Trung Quân',
        date: 'Quân Single',
        time: '03:30',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/78971ef8c8bc21e278ad/5174807096146401153?authen=exp=1658649144~acl=/78971ef8c8bc21e278ad/*~hmac=c9220652dae6f0158544d7f242d20cb6&fs=MTY1ODQ3NjM0NDgzMnx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 8,
        name: 'Anh Mơ',
        des: 'Ngô Ngô',
        date: '(Single)',
        time: '04:12',
        src: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/67248827896660383977/8864709249155573953?authen=exp=1658649230~acl=/67248827896660383977/*~hmac=aa2ef5ad1db4e051e7caff93dc01904c&fs=MTY1ODQ3NjQzMDU2OHx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 9,
        name: 'Gửi',
        des: 'Readdy',
        date: 'Gửi (Single)',
        time: '05:09',
        src: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/46b48df8bebe57e00eaf/1991026228284020637?authen=exp=1658649315~acl=/46b48df8bebe57e00eaf/*~hmac=fd9a8277070a1f9a302d3dd54829a881&fs=MTY1ODQ3NjUxNTk0NXx3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    },
    {
        id: 10,
        name: 'Em Đã Biết',
        des: 'Suni Hạ Linh',
        date: 'The First Single',
        time: '04:32',
        src: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/06705302f2461b184257/7448177129453559225?authen=exp=1658649421~acl=/06705302f2461b184257/*~hmac=f21ba54fc9e142e27b61460f15a84fae&fs=MTY1ODQ3NjYyMTQ5M3x3ZWJWNnwxMDY1NzQ3NDM1fDIyMi4yNTIdUngMTAdUngMjAz'
    }
]

function ListZing() {

    const setAudioSong = useSetRecoilState(audioSong);

    return (
            <div>
                {
                    listZing.map(song => (
                        <div key={song.id}>
                            <div className={"px-5 bg-primary h-px"}></div>
                            <div onDoubleClick={() => dispatchSong(setAudioSong, {
                                id: song.id,
                                name: song.name,
                                des: song.des,
                                src: song.src
                            })} className={"flex select-none items-center py-3 rounded hpt cursor-pointer hover:bg-input"}>
                                <div className={"w-7/12 flex items-center text-arrow"}>
                                    <div className={"w-12 text-center ml-3"}>
                                        <span className={`text-3xl font-bold`}>{song.id}</span>
                                    </div>
                                    <div className={"flex items-center mr-2"}>
                                        <span className={`text-3xl font-bold`}>-</span>
                                    </div>
                                    <div className={"w-10 h-10 flex mx-2 relative"}>
                                        <Image src={img} className={"w-full h-full rounded"} alt="logo song" />
                                        <div className={"absolute hptc inset-0 text-white flex bg-rgbaT rounded"}>
                                            <BsPlayFill className={"m-auto"} size={"1.5rem"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium line-clamp-1 text-white text-three">{song.name}</h3>
                                        <p className={"text-arrow text-sm line-clamp-1 -mt-1 text-arrow"}>{song.des}</p>
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
                }
            </div>
    )
}
export default ListZing;