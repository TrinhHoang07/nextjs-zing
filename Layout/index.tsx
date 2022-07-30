import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Control from "../components/Control";
import {isOpenModalSearch} from "../store";
import {useSetRecoilState} from "recoil";

interface Props {
    children?: JSX.Element[] | JSX.Element
}

function Layout({children}: Props) {

    const setIsOpenModalSearch = useSetRecoilState(isOpenModalSearch);

    const handleClick = () => {
        setIsOpenModalSearch(false);
        const divRefNe = document.querySelector('.divRefNe');
        if(divRefNe) {
            divRefNe.classList.remove('rounded-bl-none');
            divRefNe.classList.remove('rounded-br-none');
        }
    }

    return (
        <div onClick={handleClick} className={"grid grid-cols-pro grid-rows-pro h-full"}>
            <NavBar />
            <main className="col-span-1 row-span-2 px-59 bg-header scrollMain overflow-y-auto">
                <Header />
                {children}
            </main>
            <Control />
        </div>
    )
}
export default Layout