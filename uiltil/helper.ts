interface Song {
    id: number,
    name: string,
    des: string,
    src: string
}

export class Helper {

    static secondToMinus(second: number):any {
        if(second < 10) {
            return "00:0" + second;
        }
        if(second < 60) {
            return "00:" + second;
        }
        else {
            const minutes = Math.floor(second / 60)
            const seconds = Math.floor(second) - (minutes*60);
            if(seconds < 10) {
                return "0" + minutes + ":0" + seconds;
            }
            else {
                return "0" + minutes + ":" + seconds;
            }
        }
    }
}

export function dispatchSong(setAudio:Function, valueAudio: Song, setArrAudio: Function, valueArr: Song[], setCurrentIndexSong: Function, valueIndex: number) {
    setAudio(valueAudio);
    setArrAudio(valueArr);
    setCurrentIndexSong(valueIndex);
}
