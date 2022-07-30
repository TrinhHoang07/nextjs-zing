import {useEffect, useState} from "react";
import {generalSongModel} from "../Model";
import axios from "axios";


export const useAxios = (url:string) => {
    const [data, setData] = useState<generalSongModel>();

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(new generalSongModel(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }, [url])

    return [data];
}