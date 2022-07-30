import {atom} from "recoil";


export const audioSong = atom({
    key: 'song',
    default: {
        name: 'Lemon Tree',
        des: 'Hehe',
        src: 'https://docs.google.com/uc?id=19HsIsYFgG4ykUK3GOmvHILdnYRmXn5wx'
    }
})

export const arrAudioSong = atom({
    key: 'arrAudioSong',
    default: []
})

export const currentIndexSong = atom({
    key: 'currentIndexSong',
    default: 0
})

export const isOpenModalSearch = atom({
    key: 'isOpenModalSearch',
    default: false
})