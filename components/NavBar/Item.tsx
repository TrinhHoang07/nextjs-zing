import {CgCircleci} from "react-icons/cg";
export interface Info {
    icon: JSX.Element,
    name: string,
    active?: boolean
}
function Item({item}: {item: Info}) {
    return (
        <div className={`text-three flex items-center py-nav cursor-pointer pl-7 ${item.active ? 'bg-secondary text-white' : ''}`}>
            {item.icon}
            <p className="ml-2 text-sm font-medium">{item.name}</p>
        </div>
    )
}
export default Item;