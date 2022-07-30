import Slider from "./Slider";
import InfoRadio from "./InfoRadio";
import PodCard from "./PodCard";
import TypePod from "./TypePod";
import OutStanding from "./OutStanding";
import GameShow from "./GameShow";


function Radio() {
    return (
        <div className={"pb-8"}>
            <Slider />
            <InfoRadio />
            <PodCard />
            <TypePod />
            <OutStanding />
            <GameShow />
        </div>
    )
}
export default Radio;