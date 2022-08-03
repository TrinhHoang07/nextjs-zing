import Image from 'next/image'
import img from '../../public/mycoco.jpg';
import vn from '../../public/song-vn-2x.jpg';
import usuk from '../../public/web_song_usuk.jpg';
import kpop from '../../public/web_song_kpop.jpg';
import Link from 'next/link';
import NewReleased from './NewReleased'
import TodayChoice from "./TodayChoice";
import NewSongEveryDay from "./NewSongEveryDay";
import ZingChart from "./ZingChart";
import InfoSingers from "./InfoSingers";
import Top100Song from "./Top100Song";
import Mixtape from "./Mixtape";
import Corner from "./Corner";
import NewSong from "./NewSong";
import Event from "./Event";
import FavoriteSinger from "./FavoriteSinger";
import Footer from "./Footer";
import SWBanner from "./SwiperBanner";

function Content() {

    return <div className={""}>
        <div className="flex pt-6 items-center justify-evenly">
            <SWBanner />
        </div>
        <NewReleased />
        <TodayChoice />
        <NewSongEveryDay />
        <ZingChart />
        <div className="flex pt-4 items-center justify-evenly">
            <div className={"w-1/3 h-auto p-3"}>
                    <Link href={""}>
                        <a className={"flex overflow-hidden rounded-md"}>
                            <Image src={vn} className={"rounded-md hover:animate-scaleOne"} alt="song vn" />
                        </a>
                    </Link>
            </div>
            <div className={"w-1/3 h-auto p-3"}>
                <Link href={""}>
                    <a className={"flex overflow-hidden rounded-md"}>
                        <Image src={usuk} className={"rounded-md hover:animate-scaleOne"} alt="song us uk" />
                    </a>
                </Link>
            </div>
            <div className={"w-1/3 h-auto p-3"}>
                <Link href={""}>
                    <a className={"flex overflow-hidden rounded-md"}>
                        <Image src={kpop} className={"rounded-md hover:animate-scaleOne"} alt="song k-pop" />
                    </a>
                </Link>
            </div>
        </div>
        <InfoSingers />
        <Top100Song />
        <Mixtape />
        <Corner />
        <NewSong />
        <Event />
        <FavoriteSinger />
        <Footer />
    </div>
}
export default Content