import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";
import Image from "next/image";
import chidan from "../../public/chi-dan.png";
import erik from '../../public/erik.png';
import onlyc from '../../public/onlyc.png';
import siro from '../../public/mr-siro.png';
import hl from '../../public/huong-ly.png';
import jack from '../../public/jack.png';
import just from '../../public/justatee.png';
import dp from '../../public/duc-phuc.png';
import hmz from '../../public/hoa-minzy.png';
import kr from '../../public/karik.png';
import ttb from '../../public/trinh-thanh-binh.png';

interface Singer {
    id: number,
    url: any
}

const singers:Singer[] = [
    {
        id: 1,
        url: chidan
    },
    {
        id: 2,
        url: erik
    },
    {
        id: 3,
        url: onlyc
    },
    {
        id: 4,
        url: hl
    },
    {
        id: 5,
        url: siro
    },
    {
        id: 6,
        url: jack
    },
    {
        id: 7,
        url: just
    },
    {
        id: 8,
        url: onlyc
    },
    {
        id: 9,
        url: hmz
    },
    {
        id: 10,
        url: dp
    },
    {
        id: 11,
        url: kr
    },
    {
        id: 12,
        url: ttb
    },
]

export default function SW() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            autoplay={{
                delay: 2500,
            }}
            loop={true}
            slidesPerView={6}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 5,
                },
                1024: {
                    slidesPerView: 6,
                },
            }}
        >
            {
                singers.map(singer => (
                    <SwiperSlide key={singer.id} className={"px-4 w-1/6"}>
                        <div className="w-full h-full">
                            <Link className={""} href={""}>
                                <a>
                                    <Image src={singer.url} alt={"Chi Dân"} />
                                </a>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};