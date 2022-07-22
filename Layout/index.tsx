import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Control from "../components/Control";

interface Props {
    children?: JSX.Element[] | JSX.Element
}

function Layout({children}: Props) {
    return (
        <div className={"grid grid-cols-pro grid-rows-pro h-full"}>
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