import {BsPlayCircleFill} from "react-icons/bs";
import Link from "next/link";
import {useState} from "react";
import ListSong from "./ListSong";
import ListMv from "./ListMv";


function NewRelease() {

    const [active, setActive] = useState<boolean>(true);
    const [state, setState] = useState<string>('all');

    return (<div>
        <header className="flex items-center">
            <h2 className="font-bold text-4xl text-white py-12">Mới Phát Hành</h2>
            <div className={"text-blue-600 ml-1"}>
                <BsPlayCircleFill size={"2.2rem"} />
            </div>
        </header>
        <div className={"flex items-center"}>
            <Link href={""}>
                <a onClick={() => setActive(true)} className={`py-4 font-medium uppercase ${active && "border-b-2 border-blue-600"}  text-base text-white`}>Bài Hát</a>
            </Link>
            <Link href={""} >
                <a onClick={() => setActive(false)} className={`py-4 font-medium ml-10 ${!active && "border-b-2 border-blue-600"} uppercase text-base text-white`}>Album</a>
            </Link>
        </div>
        <div className={"h-px bg-arrow"}></div>
        <div className={"flex items-center pt-6 text-white"}>
            <p onClick={() => setState('all')} className={`uppercase py-1 px-6 ${state === 'all' && "bg-blue-600"} rounded-2xl cursor-pointer font-medium border border-arrow mr-2`}>Tất cả</p>
            <p onClick={() => setState('vpop')} className={`uppercase py-1 px-6 ${state === 'vpop' && "bg-blue-600"} rounded-2xl cursor-pointer font-medium border border-arrow mx-2`}>V-Pop</p>
            <p onClick={() => setState('usuk')} className={`uppercase py-1 px-6 ${state === 'usuk' && "bg-blue-600"} rounded-2xl cursor-pointer font-medium border border-arrow mx-2`}>US-uk</p>
            <p onClick={() => setState('kpop')} className={`uppercase py-1 px-6 ${state === 'kpop' && "bg-blue-600"} rounded-2xl cursor-pointer font-medium border border-arrow ml-2`}>K-Pop</p>
        </div>
        {active ? (
            <ListSong state={state}/>
        ) : (
            <ListMv state={state}/>
        )}
    </div>)
}
export default NewRelease;