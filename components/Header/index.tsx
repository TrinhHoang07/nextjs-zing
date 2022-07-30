import {AiOutlineSearch} from "react-icons/ai";
import {FiArrowLeft, FiArrowRight, FiSettings} from "react-icons/fi";
import {FaTshirt, FaUser} from "react-icons/fa";
import Theme from "../Theme";
import {useCallback, useRef, useState} from "react";
import SearchModal from "./SearchModal";
import {IoMdClose} from "react-icons/io";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {isOpenModalSearch} from "../../store";


function Header() {


    const [theme, setTheme] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const setIsOpenModalSearch = useSetRecoilState(isOpenModalSearch);
    const isOpen = useRecoilValue(isOpenModalSearch);

    const back = () => {
        if (window.history.state.as !== '/') {
            window.history.back();
        }
    }

    const forward = () => {
        window.history.forward();
    }

    const handleCloseThemes = useCallback(() => {
        setTheme(false);
    }, [])

    const handleClose = () => {
        setInput('');
        inputRef.current && inputRef.current.focus();
    }

    const handleFocused = () => {
        setIsOpenModalSearch(true);
        if (divRef.current) {
            divRef.current.classList.add('rounded-bl-none');
            divRef.current.classList.add('rounded-br-none');
        }
    }


    return <header
        className={"h-header-px flex items-center bg-header justify-between sticky z-50 top-0 right-0 left-0"}>
        {theme && <Theme callback={handleCloseThemes}/>}
        <div className={"flex items-center"}>
            <div onClick={back} className={"w-11 h-6 flex items-center justify-start"}>
                <FiArrowLeft size={"1.5rem"} className={"text-avatar cursor-pointer"}/>
            </div>
            <div onClick={forward} className={"w-11 h-6 flex items-center justify-start"}>
                <FiArrowRight size={"1.5rem"} className={"text-avatar cursor-pointer"}/>
            </div>
            <div
                ref={divRef}
                onClick={e => e.stopPropagation()}
                className={"w-540 relative divRefNe flex rounded-20 items-center bg-input text-white caret-white"}>
                <span className={"inline-block pl-2 cursor-pointer"}><AiOutlineSearch size={"1.5rem"}/></span>
                <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={handleFocused}
                    className={"w-full h-10 border-0 outline-0 bg-input text-sm rounded-full pl-1"}
                    type="text"
                    id="input"
                    placeholder={"Tìm kiếm bài hát, nghệ sĩ, lời bài hát, ..."}
                />
                {
                    input.length > 0 && (
                        <span onClick={handleClose} className={"inline-block text-white pr-2 cursor-pointer"}><IoMdClose
                            size={"1.2rem"}/></span>
                    )
                }
                {
                    isOpen && (
                        input.length > 0 ? (
                            <SearchModal set={setInput} data={"Từ khóa liên quan"}/>
                        ) : (
                            <SearchModal set={setInput} data={"Đề xuất cho bạn"}/>
                        )
                    )
                }
            </div>
        </div>
        <div className={"flex items-center text-white"}>
            <div
                onClick={() => setTheme(true)}
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