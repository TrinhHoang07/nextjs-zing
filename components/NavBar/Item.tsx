import {useRef} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
export interface Info {
    icon: JSX.Element,
    name: string,
    active?: boolean,
    link: string,
}

function Item({item}: {item: Info}) {

    const router = useRouter();
    const {pathname} = router;

    const eRef = useRef<HTMLAnchorElement>(null);
    const handleActive = () => {
        const current = document.querySelector('.js-active.bg-secondary');
        if(current) {
            current.classList.remove('bg-secondary');
        }
        eRef.current && eRef.current.classList.add('bg-secondary')
    }

    return (
        <Link href={item.link}>
            <a ref={eRef} onClick={handleActive} className={`${pathname === item.link && 'bg-secondary'}  select-none text-three js-active flex items-center py-nav cursor-pointer md:pl-0 lg:pl-7`}>
                {item.icon}
                <p className="ml-2 flex-shrink-0 text-sm font-medium">{item.name}</p>
            </a>
        </Link>
    )
}
export default Item;