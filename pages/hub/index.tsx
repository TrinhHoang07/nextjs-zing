import Image from "next/image";
import hubimg from '../../public/hublogo.jpg';
import MoodAndActivity from "./MoodAndActivity";
import MoodAndActivity2 from "./MoodAndActivity2";
import {useRef, useState} from "react";
import Country from "./Country";
import Bolero from "./Bolero";
import Edm from "./Edm";
import Remix from "./Remix";
import Hiphop from "./Hiphop";
import RB from "./RB";
import SongMovie from "./SongMovie";
import SongChild from "./SongChild";
import SongNo from "./SongNo";
import Latin from "./Latin";

function Hub() {

    const [check, setCheck] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);

    const handleCheck = () => {
        setCheck(true);
        if(divRef.current) {
            divRef.current.style.display = 'none';
        }
    }

    return (
        <div>
            <div className={"flex rounded cursor-pointer mt-4"}>
                <Image src={hubimg} className={"rounded-md"} alt={"logo hub"} />
            </div>
            <MoodAndActivity />
            <MoodAndActivity2 />
            {check && <MoodAndActivity2 />}
            <div ref={divRef} className={"text-center mt-6"}>
                <button onClick={handleCheck} className={"border border-arrow rounded-full py-1 text-base px-6 font-medium text-white"}>Tất cả</button>
            </div>
            <Country />
            <Bolero />
            <Edm />
            <Remix />
            <Hiphop />
            <RB />
            <SongMovie />
            <SongChild />
            <SongNo />
            <Latin />
        </div>
    )
}
export default Hub;