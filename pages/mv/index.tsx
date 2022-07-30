import {useState} from "react";
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import {FiMusic} from "react-icons/fi";
import {BiMenuAltLeft} from "react-icons/bi";
import Item from "./Item";
import ItemUsUk from "./ItemUsUk";
import ItemKPOP from "./ItemKPop";
import ItemHT from "./ItemHT";


function MV() {

    const [active, setActive] = useState('vn');
    const [isDown, setIsDown] = useState(true);
    const [isUp, setIsUp] = useState(true);

    const handleToggleUp = () => {
        setIsUp(prev => !prev);
    }

    const handleToggleDown = () => {
        setIsDown(prev => !prev);
    }

    return (
        <div className={"mt-4"}>
            <header className="flex h-14 items-center pb-px border-b border-arrow">
                <h1 className={"text-2xl font-bold mr-5 text-white relative after:absolute after:content-[''] after:w-px after:h-8 after:bg-arrow after:top-1/2 after:-translate-y-1/2 after:ml-5"}>MV</h1>
                <ul className="flex items-center ml-5 h-full">
                    <li onClick={() => setActive('vn')}
                        className={`text-three cursor-pointer ${active === 'vn' && "border-b-2 border-blue-600 text-white"} h-full leading-56 uppercase font-medium text-sm`}>Việt
                        Nam
                    </li>
                    <li onClick={() => setActive('usuk')}
                        className={`text-three cursor-pointer ${active === 'usuk' && "border-b-2 border-blue-600 text-white"} h-full leading-56 uppercase font-medium text-sm ml-8`}>US-UK
                    </li>
                    <li onClick={() => setActive('kpop')}
                        className={`text-three cursor-pointer ${active === 'kpop' && "border-b-2 border-blue-600 text-white"} h-full leading-56 uppercase font-medium text-sm ml-8`}>K-POP
                    </li>
                    <li onClick={() => setActive('ht')}
                        className={`text-three cursor-pointer ${active === 'ht' && "border-b-2 border-blue-600 text-white"} h-full leading-56 uppercase font-medium text-sm ml-8`}>Hòa
                        Tấu
                    </li>
                </ul>
            </header>
            <div className={"mt-8"}>
                <div className="flex items-center">
                    <div onClick={handleToggleDown}
                         className={"relative select-none flex items-center px-3 bg-input rounded-full py-2 cursor-pointer"}>
                        <FiMusic size={"1.2rem"} className={"text-white"}/>
                        <p className={"text-base text-white ml-2 mr-5"}>Tất Cả</p>
                        {isDown ? <BsChevronDown size={"1.2rem"} className={"text-white"}/> :
                            <BsChevronUp size={"1.2rem"} className={"text-white"}/>}
                        {
                            !isDown && (
                                <div
                                    className="absolute z-50 top-12 left-0 w-96 rounded-lg bg-after after:absolute after:w-0 after:h-0 after:-top-2 after:left-4 after:border-l-8 after:border-r-8 after:border-solid after:border-l-transparent after:border-r-transparent after:border-b-8 after:border-b-after">
                                    <div className="p-1">
                                        <div className="flex w-full flex-wrap">
                                            <div className="w-1/2 rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Country</p>
                                            </div>
                                            <div className="w-1/2 rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Pop</p>
                                            </div>
                                            <div className="w-1/2 rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Hiphop</p>
                                            </div>
                                            <div className="w-1/2 rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Latin</p>
                                            </div>
                                            <div className="w-1/2 rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Rap</p>
                                            </div>
                                            <div className="w-1/2 rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Rock</p>
                                            </div>
                                            <div className="w-1/2 rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Jazzz</p>
                                            </div>
                                            <div className="w-1/2 rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Folk</p>
                                            </div>
                                            <div className="w-1/2 rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Electronic</p>
                                            </div>
                                            <div className="w-1/2 rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Indie</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div onClick={handleToggleUp}
                         className={"relative select-none flex items-center px-3 bg-input rounded-full py-2 cursor-pointer ml-3"}>
                        <BiMenuAltLeft size={"1.2rem"} className={"text-white"}/>
                        <p className={"text-base text-white ml-2 mr-5"}>Nghe Nhiều</p>
                        {isUp ? <BsChevronDown size={"1.2rem"} className={"text-white"}/> :
                            <BsChevronUp size={"1.2rem"} className={"text-white"}/>}
                        {
                            !isUp && (
                                <div
                                    className="absolute z-50 top-12 left-0 w-40 rounded-lg bg-after after:absolute after:w-0 after:h-0 after:-top-2 after:left-4 after:border-l-8 after:border-r-8 after:border-solid after:border-l-transparent after:border-r-transparent after:border-b-8 after:border-b-after">
                                    <div className="p-1">
                                        <div className="flex w-full flex-wrap">
                                            <div className="w-full rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Nghe nhiều</p>
                                            </div>
                                            <div className="w-full rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Nổi bật</p>
                                            </div>
                                            <div className="w-full rounded cursor-pointer hover:bg-hoverAfter">
                                                <p className={"px-3 py-2 font-medium text-white text-sm"}>Mới nhất</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {
                active === 'vn' && <Item />
            }
            {
                active === 'usuk' && <ItemUsUk />
            }
            {
                active === 'kpop' && <ItemKPOP />
            }
            {
                active === 'ht' && <ItemHT />
            }
        </div>
    )
}

export default MV;