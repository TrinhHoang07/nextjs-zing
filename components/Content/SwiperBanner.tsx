import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";
import Image from "next/image";
import img from '../../public/mycoco.jpg'

interface Singer {
    id: number,
    url: any
}

const singers:Singer[] = [
    {
        id: 1,
        url: img
    },
    {
        id: 2,
        url: img
    },
    {
        id: 3,
        url: img
    },
    {
        id: 4,
        url: img
    },
    {
        id: 5,
        url: img
    },
    {
        id: 6,
        url: img
    },
    {
        id: 7,
        url: img
    },
    {
        id: 8,
        url: img
    }
]

export default function SWBanner() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={3}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            {
                singers.map(singer => (
                    <SwiperSlide key={singer.id} className={"px-4 w-1/3"}>
                        <div className="w-full h-full select-none">
                            <Link className={""} href={""}>
                                <a>
                                    <Image className={"rounded-xl"} src={singer.url} alt={"Chi Dân"} />
                                </a>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};