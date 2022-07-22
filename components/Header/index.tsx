import {AiOutlineSearch} from "react-icons/ai";
import {FiArrowLeft, FiArrowRight, FiSettings} from "react-icons/fi";
import {FaTshirt, FaUser} from "react-icons/fa";


function Header() {

    const back = () => {
        if (window.history.state.as !== '/') {
            window.history.back();
        }
    }

    const forward = () => {
        window.history.forward();
    }

    return <header
        className={"h-header-px flex items-center bg-header justify-between sticky z-10 top-0 right-0 left-0"}>
        <div className={"flex items-center"}>
            <div onClick={back} className={"w-11 h-6 flex items-center justify-start"}>
                <FiArrowLeft size={"1.5rem"} className={"text-avatar cursor-pointer"}/>
            </div>
            <div onClick={forward} className={"w-11 h-6 flex items-center justify-start"}>
                <FiArrowRight size={"1.5rem"} className={"text-avatar cursor-pointer"}/>
            </div>
            <div className={"w-540 flex rounded-full items-center bg-input text-white caret-white"}>
                <span className={"inline-block pl-2 cursor-pointer"}><AiOutlineSearch size={"1.5rem"}/></span>
                <input
                    className={"w-full h-10 border-0 outline-0 bg-input text-sm rounded-full pl-1"}
                    type="text"
                    id="input"
                    placeholder={"Tìm kiếm bài hát, nghệ sĩ, lời bài hát, ..."}
                />
            </div>
        </div>
        <div className={"flex items-center text-white"}>
            <div
                className="cursor-pointer w-10 h-10 flex items-center justify-center bg-controlHover mr-2 rounded-full">
                <FaTshirt size={"1.2rem"}/>
            </div>
            <div
                className="cursor-pointer w-10 h-10 flex items-center justify-center bg-controlHover mr-2 rounded-full">
                <FiSettings size={"1.2rem"}/>
            </div>
            <div className="bg-avatar w-10 h-10 flex items-center justify-center bg-controlHover rounded-full">
                <FaUser size={"1.2rem"}/>
            </div>
        </div>
    </header>
}

export default Header;