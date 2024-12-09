export interface StorageItem {
    user: UserFormat,
    location: {
        lat: number,
        lng: number
    }
    myTree: TreeData[],
    favTree: TreeData[],
    nextCare: CareActivity[]
    careHistory: CareActivity[]
}

export interface UserFormat {
    synced?: boolean;
    name: string;
    age?: number;
    loginMethod?: string;
    email: string;
    dataCollect?: boolean;
    data?: {
        interest: string[];
        favorite: string[];
        job?: string;
    }
}

export interface TreeData {
    img: any;
    name: string;
    grownTime: string;
    careRate: string;
    careFreq: string;
    description: string | any[];
    careDetail: string | any[];
    schedule: string | any[];
}

export interface ProductInfo {
    name: string,
    img: any[],
    buyCount: number,
    price: number,
    rate: number,
    info: any[],
}

export interface CareActivity {
    title: string,
    time: Date,
    targetId: string
}