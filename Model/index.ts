export class obj {
    id: number;
    name: string;
    des: string;
    ph: string;
    count: number;
    src: string;
    date: string;
    color: string;
    percent: string;
    time: string;
    type: string;

    constructor(data: Record<string, any>) {
        this.id = data.hasOwnProperty('id') ? data.id : undefined;
        this.name = data.hasOwnProperty('name') ? data.name : undefined;
        this.des = data.hasOwnProperty('des') ? data.des : undefined;
        this.ph = data.hasOwnProperty('ph') ? data.ph : undefined;
        this.count = data.hasOwnProperty('count') ? data.count : undefined;
        this.src = data.hasOwnProperty('src') ? data.src : undefined;
        this.date = data.hasOwnProperty('date') ? data.date : undefined;
        this.color = data.hasOwnProperty('color') ? data.color : undefined;
        this.percent = data.hasOwnProperty('percent') ? data.percent : undefined;
        this.time = data.hasOwnProperty('time') ? data.time : undefined;
        this.type = data.hasOwnProperty('type') ? data.type : undefined;
    }
}

export class generalSongModel {
    general: obj[];

    constructor(value: Record<string, any>) {
        this.general = value.hasOwnProperty('general') ? value.general : undefined;
    }
}