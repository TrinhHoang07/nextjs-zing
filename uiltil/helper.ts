import {useSetRecoilState} from "recoil";
import {audioSong} from "../store";


interface Song {
    id: number,
    name: string,
    des: string,
    src: string
}

export class Helper {

    static secondToMinus(second: number):any {
        if(second < 60) {
            return "00:" + second;
        }
        else {
            const minutes = Math.floor(second / 60)
            const seconds = Math.floor(second) - (minutes*60);
            return "0" + minutes + ":" + seconds;
        }
    }
}

export function dispatchSong(set:Function, value: Song) {
    set(value);
}
