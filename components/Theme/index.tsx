import {IoMdClose} from "react-icons/io";
import DynamicTheme from "./DynamicTheme";
import Topic from "./Topic";
import Singer from "./Singer";
import Dark from "./Dark";
import Light from "./Light";

interface Props {
    callback: Function
}

function Theme({callback}: Props) {
    return <div onClick={() => callback()} className={"fixed inset-0 z-50 flex bg-rgbaT"}>
        <div onClick={(e) => e.stopPropagation()} className="m-auto w-3/4 h-h-full-h bg-header rounded-xl">
            <div className="px-6 h-full theme-scroll overflow-y-auto">
                <header className={"h-20 bg-header z-30 flex items-center justify-between sticky top-0 left-0 right-0"}>
                    <h1 className={"font-bold text-2xl text-white"}>Giao Diện</h1>
                    <div onClick={() => callback()} className={"w-8 h-8 text-white cursor-pointer flex items-center justify-center"}>
                        <IoMdClose size={"1.75rem"}/>
                    </div>
                </header>
                <div className={"mb-8"}>
                    <DynamicTheme />
                    <Topic />
                    <Singer />
                    <Dark />
                    <Light />
                </div>
            </div>
        </div>
    </div>
}
export default Theme;