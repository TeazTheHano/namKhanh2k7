export interface StorageItem {
    user: UserFormat,
    location: {
        lat: number,
        lng: number
    }
    myTreeList: TreeDataFormat[],
    myTreeItem: TreeDataFormat,
    favTreeList: TreeDataFormat[],
    favTreeItem: TreeDataFormat,
    nextCareList: CareActivityFormat[]
    nextCareItem: CareActivityFormat
    careHistoryList: CareActivityFormat[]
    careHistoryItem: CareActivityFormat
    customCareActName: string[]
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

export interface TreeDataFormat {
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

export interface CareActivityFormat {
    title: string,
    time: number,
    treeID: string
    treeName: string
    treeImg: any
    repeat?: number[]
    note?: string
}