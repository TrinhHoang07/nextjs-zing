import Image from 'next/image'
import logo from '../../public/logo-dark.svg';
import logor from '../../public/logorespon.svg';
import Item from "./Item";
import {CgCircleci} from "react-icons/cg";
import {MdOutlineLibraryMusic, MdMultilineChart, MdOutlineFeed, MdSlideshow} from 'react-icons/md'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {FiRadio} from 'react-icons/fi'
import {BiCategory} from "react-icons/bi";
import {AiOutlineStar} from "react-icons/ai";
import {IoIosAdd} from "react-icons/io";


const sizeIcon = '1.55rem';
const info = [
    {
        icon: <MdOutlineLibraryMusic className={"flex-shrink-0 md:w-70px sm:w-70px lg:w-auto"} size={sizeIcon}/>,
        name: 'Cá Nhân',
        link: '#'
    },
    {
        icon: <CgCircleci className={"flex-shrink-0 md:w-70px sm:w-70px lg:w-auto"} size={sizeIcon}/>,
        name: 'Khám Phá',
        active: true,
        link: '/'
    },
    {
        icon: <MdMultilineChart className={"flex-shrink-0 md:w-70px sm:w-70px lg:w-auto"} size={sizeIcon}/>,
        name: '#zingchart',
        link: '/zingchart'
    },
    {
        icon: <FiRadio className={"flex-shrink-0 md:w-70px sm:w-70px lg:w-auto"} size={sizeIcon}/>,
        name: 'Radio',
        link: '/radio'
    },
    {
        icon: <MdOutlineFeed className={"flex-shrink-0 md:w-70px sm:w-70px lg:w-auto"} size={sizeIcon}/>,
        name: 'Theo Dõi',
        link: '/following'
    }
]
const topMusic = [
    {
        icon: <BsMusicNoteBeamed className={"flex-shrink-0 md:w-70px sm:w-70px lg:w-auto"} size={sizeIcon}/>,
        name: 'Nhạc Mới',
        link: '/new-song'
    },
    {
        icon: <BiCategory className={"flex-shrink-0 md:w-70px sm:w-70px lg:w-auto"} size={sizeIcon}/>,
        name: 'Thể Loại',
        link: '/hub'
    },
    {
        icon: <AiOutlineStar className={"flex-shrink-0 md:w-70px sm:w-70px lg:w-auto"} size={sizeIcon}/>,
        name: 'Top 100',
        link: '/top100'
    },
    {
        icon: <MdSlideshow className={"flex-shrink-0 md:w-70px sm:w-70px lg:w-auto"} size={sizeIcon}/>,
        name: 'MV',
        link: '/mv',
    },
]

function NavBar() {

    return (
        <div className={"col-span-1 bg-primary row-span-2"}>
            <div className="">
                <div className="pt-3">
                    <div className="pl-7 sm:hidden md:hidden lg:block">
                        <Image width={120} height={40} src={logo} alt="logo-dark"/>
                    </div>
                    <div className="lg:hidden flex justify-center">
                        <Image width={45} height={45} src={logor} alt="logor-dark"/>
                    </div>
                    <div className="mt-4">
                        {info.map((item, index) => <Item item={item} key={index}/>)}
                    </div>
                    <div className="h-1-px bg-cyan-50 mr-7 ml-7 mt-4"></div>
                    <div className="mt-4">
                        {topMusic.map((item, index) => <Item item={item} key={index}/>)}
                    </div>
                    <div className="h-1-px bg-cyan-50 mr-7 ml-7 mt-4"></div>
                    <div className="mt-2 mb-2 text-three">
                        <div className={'flex items-center py-nav cursor-pointer sm:pl-0 md:pl-0 lg:pl-7'}>
                            <IoIosAdd className={"flex-shrink-0 sm:w-70px md:w-70px lg:w-auto"} size={sizeIcon}/>
                            <p className="ml-3 flex-shrink-0 text-sm font-medium">Tạo playlist mới</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar