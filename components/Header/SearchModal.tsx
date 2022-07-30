import {AiOutlineSearch} from "react-icons/ai";

interface Prop {
    data: string,
    set: Function
}

function SearchModal({data, set}: Prop) {
    return (
        <div className={"absolute top-full left-0 right-0 bg-input pb-3 rounded-bl-20 rounded-br-20"}>
            <h3 className={"pl-5 pt-3 font-medium text-base text-white"}>{data}</h3>
            <div className="mt-3">
                <div className={"cursor-pointer px-3 py-2 flex items-center rounded hover:bg-follow mx-3"}>
                    <AiOutlineSearch size={"1.2rem"}/>
                    <p className={"ml-2"}>Ngôi sao</p>
                </div>
                <div className={"cursor-pointer px-3 py-2 flex items-center rounded hover:bg-follow mx-3"}>
                    <AiOutlineSearch size={"1.2rem"}/>
                    <p className={"ml-2"}>Vì mẹ anh</p>
                </div>
                <div className={"cursor-pointer px-3 py-2 flex items-center rounded hover:bg-follow mx-3"}>
                    <AiOutlineSearch size={"1.2rem"}/>
                    <p className={"ml-2"}>Em nên dừng</p>
                </div>
                <div className={"cursor-pointer px-3 py-2 flex items-center rounded hover:bg-follow mx-3"}>
                    <AiOutlineSearch size={"1.2rem"}/>
                    <p className={"ml-2"}>Podcast</p>
                </div>
                <div className={"cursor-pointer px-3 py-2 flex items-center rounded hover:bg-follow mx-3"}>
                    <AiOutlineSearch size={"1.2rem"}/>
                    <p className={"ml-2"}>Karaoke</p>
                </div>
            </div>
        </div>
    )
}

export default SearchModal;