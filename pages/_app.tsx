import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'antd/dist/antd.css';
import '../styles/globals.css'

import {RecoilRoot} from 'recoil';
import type {AppProps} from 'next/app'
import Layout from "../Layout";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <RecoilRoot>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    )
}

export default MyApp
