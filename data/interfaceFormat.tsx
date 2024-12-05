export interface StorageItem {
    user: UserFormat,
    location: {
        lat: number,
        lng: number
    }
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
    name: string;
    grownTime: string;
    careRate: string;
    careFreq: string;
    description: string | any[];
    careDetail: string | any[];
    schedule: string | any[];
}