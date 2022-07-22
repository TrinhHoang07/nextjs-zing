import {BsPlayCircleFill} from "react-icons/bs";
import ChartSong from "../../components/Content/ChartSong";
import ListZing from "./ListZing";
import TopWeek from "./TopWeek";


function ZingChart() {
    return (
        <div className={"pb-8"}>
            <div className="flex items-center text-blue-600 mt-12 mb-6">
                <h2 className="font-bold text-4xl text-white mr-2">#zingchart</h2>
                <BsPlayCircleFill size={"2.2rem"} />
            </div>
            <div>
                <ChartSong />
            </div>
            <div className={"mt-4"}>
                <ListZing />
            </div>
            <div className={"mt-5 text-center"}>
                <button className={"px-6 py-2 rounded-full font-medium text-base text-white border border-blue-50"}>Xem top 100</button>
            </div>
            <div className="flex items-center text-blue-600 mt-12 mb-6">
                <h2 className="font-bold text-5xl text-white mr-2">Bảng Xếp Hạng Tuần</h2>
            </div>
            <div className="flex justify-between items-center">
                <div className={"flex-1 bg-primary rounded-2xl"}>
                    <div className={"pt-4 pl-8 pb-3 text-blue-600 flex items-center"}>
                        <h2 className="font-bold text-2xl text-white mr-1">Việt Nam</h2>
                        <BsPlayCircleFill size={"1.75rem"} />
                    </div>
                    <TopWeek />
                    <div className={"mt-5 text-center pb-6"}>
                        <button className={"px-6 py-1.5 rounded-full font-medium text-base text-white border border-blue-50"}>Xem thêm</button>
                    </div>
                </div>
                <div className={"flex-1 bg-primary rounded-2xl mx-4"}>
                    <div className={"pt-4 pl-8 pb-3 text-blue-600 flex items-center"}>
                        <h2 className="font-bold text-2xl text-white mr-1">US-UK</h2>
                        <BsPlayCircleFill size={"1.75rem"} />
                    </div>
                    <TopWeek />
                    <div className={"mt-5 text-center pb-6"}>
                        <button className={"px-6 py-1.5 rounded-full font-medium text-base text-white border border-blue-50"}>Xem thêm</button>
                    </div>
                </div>
                <div className={"flex-1 bg-primary rounded-2xl"}>
                    <div className={"pt-4 pl-8 pb-3 text-blue-600 flex items-center"}>
                        <h2 className="font-bold text-2xl text-white mr-1">K-Pop</h2>
                        <BsPlayCircleFill size={"1.75rem"} />
                    </div>
                    <TopWeek />
                    <div className={"mt-5 text-center pb-6"}>
                        <button className={"px-6 py-1.5 rounded-full font-medium text-base text-white border border-blue-50"}>Xem thêm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ZingChart;