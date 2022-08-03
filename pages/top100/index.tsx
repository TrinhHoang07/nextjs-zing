import Logo from "./Logo";
import OutandingTop100 from "./OutandingTop100";
import Top100VN from "./Top100VN";
import Top100Asian from "./Top100Asian";
import Top100USUK from "./Top100USUK";
import Top100HT from "./Top100HT";


function Top100() {
    return (
        <div className={"pb-8"}>
            <Logo />
            <OutandingTop100 />
            <Top100VN />
            <Top100Asian />
            <Top100USUK />
            <Top100HT />
        </div>

    )
}
export default Top100;