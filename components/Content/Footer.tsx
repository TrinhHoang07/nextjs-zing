import Image from "next/image";
import img from '../../public/logofooter.png';
import logo2 from '../../public/logofooter2.png';
import logo3 from '../../public/logofooter3.png';
import logo4 from '../../public/logofooter4.png';
import logo5 from '../../public/logofooter5.png';
import logo6 from '../../public/logofooter6.png';
import logo7 from '../../public/logofooter7.png';
import logo8 from '../../public/logofooter8.png';
import logo9 from '../../public/logofooter9.png';
import logo10 from '../../public/logofooter10.png';

const th = [
    {
        id: 1,
        img: img
    },
    {
        id: 2,
        img: logo2
    },
    {
        id: 3,
        img: logo3
    },
    {
        id: 4,
        img: logo4
    },
    {
        id: 5,
        img: logo5
    },
    {
        id: 6,
        img: logo6
    },
    {
        id: 7,
        img: logo7
    },
    {
        id: 8,
        img: logo8
    },
    {
        id: 9,
        img: logo9
    },
    {
        id: 10,
        img: logo10
    }
]

function Footer() {
    return (
        <div className={"mt-12"}>
            <h3 className={"text-arrow font-bold uppercase text-sm text-center"}>Đối tác âm nhạc</h3>
            <div className={"w-full flex justify-center items-center flex-wrap px-8 mt-4 pb-10"}>
                {
                    th.map(item => (
                        <div key={item.id} className={"flex w-12-5 h-14 px-2 rounded-xl my-4"}>
                            <Image src={item.img} className={"w-full object-cover h-full rounded-xl bg-white"} alt={"doi tac"}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer;