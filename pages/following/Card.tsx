import Image from "next/image";
import img from '../../public/imgbeauty.jpg';
import {FiHeart} from "react-icons/fi";
import {FaRegComments} from "react-icons/fa";

function Card() {
    return (
        <div className={"w-1/2 px-2 mt-4"}>
            <div className="p-5 bg-input rounded-lg">
                <header className="flex items-center">
                    <div className="flex w-12 h-12">
                        <Image src={img} className={"w-full h-full rounded-full"} alt={"logo card"} />
                    </div>
                    <div className={"ml-2"}>
                        <h2 className={"font-medium text-three text-base"}>Name . Quan tâm</h2>
                        <p className={"text-three text-sm"}>28 tháng 7, lúc 11:11</p>
                    </div>
                </header>
                <div className={""}>
                    <p className={"my-2 text-base text-white text-justify tracking-tighter"}>
                        Trước thềm chung kết Street Dance Việt Nam, nhìn lại chặng đường anh em Phanh Cóc đã đi qua cùng nhau mà bồi hồi quá. Mong rằng chúng ta sẽ có một cái kết trọn vẹn nhất, đẹp đẽ nhất, xứng đáng nhất với những nỗ lực của anh em nhé! Nguyễn Đăng Quân và Thành Đạt tiến lênnnn !!! 🦾

                        Nguyen Minh Thien Vũ Đình Hòa Đỗ Huy Hoang Thu Vu Sơn Lương Tường Nguyễn Tố Linh Loi Xuan Ly
                    </p>
                    <div className="flex w-full">
                        <Image src={img} className={"w-full rounded-lg flex-1 object-contain"} alt={"content image"} />
                    </div>
                </div>
                <div className={"flex items-center mt-3"}>
                    <FiHeart size={"1.2rem"} className={"cursor-pointer text-white hover:opacity-80"}/>
                    <FaRegComments className={"ml-6 cursor-pointer text-white hover:opacity-80"} size={"1.2rem"}/>
                </div>
            </div>
        </div>
    )
}
export default Card;