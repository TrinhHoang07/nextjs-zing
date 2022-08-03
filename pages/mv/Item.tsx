import Image from "next/image";
import img from '../../public/mv-img.jpg';
import imgc from '../../public/remix.jpg';
import {BsPlayCircle} from "react-icons/bs";

const arrMV = [
    {
        id: 1,
        name: 'Em Không Sai, Chúng Ta Sai',
        des: 'Erik'
    },
    {
        id: 2,
        name: 'Hơn Cả Yêu',
        des: 'Đức Phúc',
    },
    {
        id: 3,
        name: 'Hai Mươi Hai',
        des: 'Hứa Kim Tuyền, Ameee'
    },
    {
        id: 4,
        name: 'Bánh Mì Không',
        des: 'Đạt G, Du Uyên'
    },
    {
        id: 5,
        name: 'Phụ Tình',
        des: 'Trịnh Đình Quang'
    },
    {
        id: 6,
        name: 'Bạc Phận',
        des: 'Jack 5 trịu'
    },
    {
        id: 7,
        name: 'Thất Tình',
        des: 'Trịnh Đình Quang'
    },
    {
        id: 8,
        name: 'Hết Thương Cạn Nhớ',
        des: 'Hoàng Pro'
    }
]

function Item() {
    return (
        <div className={"my-3"}>
            <div className="flex flex-wrap items-center">
                {
                    arrMV.map(item => (
                        <div key={item.id} className="lg:w-1/3 md:w-1/2 p-3">
                            <div className="rounded-lg overflow-hidden">
                                <div className="relative cursor-pointer hover:animate-scaleOne hpt flex">
                                    <Image className={"rounded-lg"} src={img} alt={"item logo"} />
                                    <div className={"hptc text-white z-0 absolute bg-rgbaT inset-0 flex"}>
                                        <div className="w-7 h-7 flex items-center cursor-pointer justify-center m-auto rounded-full hover:opacity-90">
                                            <BsPlayCircle size={"2.5rem"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mt-2">
                                <div className="w-12 h-12 flex">
                                    <Image className={"rounded-full"} src={imgc} alt={"logo avatar"} />
                                </div>
                                <div className={"ml-2"}>
                                    <h3 className={"text-base font-medium text-white"}>{item.name}</h3>
                                    <p className={"text-arrow text-sm -mt-0.5"}>{item.des}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Item;