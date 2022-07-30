import {useState} from "react";
import SW from "../../components/Content/Swiper";
import Card from "./Card";

function Following() {

    const [active, setActive] = useState('vn');

    return (
        <div className={"mt-10"}>
            <div className="flex">
                <div className="m-auto flex bg-input p-1 rounded-full">
                    <h3 onClick={() => setActive('vn')} className={`cursor-pointer uppercase text-sm font-medium text-three w-120px text-center rounded-full py-1 ${active === 'vn' && 'bg-follow'}`}>Việt Nam</h3>
                    <h3 onClick={() => setActive('usuk')} className={`cursor-pointer uppercase text-sm font-medium text-three w-120px text-center rounded-full py-1 ${active === 'usuk' && 'bg-follow'}`}>US-UK</h3>
                    <h3 onClick={() => setActive('kpop')} className={`cursor-pointer uppercase text-sm font-medium text-three w-120px text-center rounded-full py-1 ${active === 'kpop' && 'bg-follow'}`}>K-POP</h3>
                    <h3 onClick={() => setActive('hn')} className={`cursor-pointer uppercase text-sm font-medium text-three w-120px text-center rounded-full py-1 ${active === 'hn' && 'bg-follow'}`}>Hoa Ngữ</h3>
                    <h3 onClick={() => setActive('nb')} className={`cursor-pointer uppercase text-sm font-medium text-three w-120px text-center rounded-full py-1 ${active === 'nb' && 'bg-follow'}`}>Nổi Bật</h3>
                </div>
            </div>
            {
                active === 'vn' && (
                    <>
                        <div className={"w-full overflow-x-auto flex flex-row mt-8"}>
                            <SW />
                        </div>
                        <div className="mt-6 flex items-center flex-wrap">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </>
                )
            }
            {
                active === 'usuk' && (
                    <>
                        <div className="mt-6 flex items-center flex-wrap">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </>
                )
            }
            {
                active === 'kpop' && (
                    <>
                        <div className="mt-6 flex items-center flex-wrap">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </>
                )
            }
            {
                active === 'hn' && (
                    <>
                        <div className="mt-6 flex items-center flex-wrap">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </>
                )
            }
            {
                active === 'nb' && (
                    <>
                        <div className="mt-6 flex items-center flex-wrap">
                            <Card />
                            <Card />
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default Following;