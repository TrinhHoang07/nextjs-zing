export interface generalSong {
    id: number,
    name: string,
    des: string,
    date?: string
}

export interface songEvents {
    id: number,
    name: string,
    des: string,
    ph: string,
    count: number
}

export interface favoriteSinger {
    id: number,
    name: any,
    des: string,
    mt: any
}

export interface soundSong {
    id: number,
    name: string,
    des: string,
    src: string,
    date?: string
}

export interface listSong {
    id: number,
    name: string,
    des: string,
    time: string,
    date?: string,
    type?: string,
    src: string
}

export interface songChart {
    id: number,
    name: string,
    des: string,
    color: string,
    percent: string,
    src: string
}