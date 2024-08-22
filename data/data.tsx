import React, { ReactElement } from 'react'
import { vw, vh } from '../assets/stylesheet'

export interface UserInfo {
    userID: string;
    name: string;
    email: string;
    password: string;
    age: number;
    carrer?: string;
    fav?: string[];
    synced: boolean;
    dataCollect: boolean;
    loginMethod: 'email' | 'google' | 'facebook' | 'apple';
    createTime: any;
}

export interface CareRoutine {
    title: string;
    repeat: 'days' | 'weeks' | 'months' | 'years' | 'hours' | 'other';
    interval: number;
    otherInterval?: any;
    unit?: string;
    quantity?: number;
    note?: string[];
    atTime?: string;
};

export interface TreeItem {
    id: number;
    name: string;
    img: string;
    quickInfo: {
        careLevel: 'easy' | 'medium' | 'hard';
        grownTime: {
            min: number;
            max: number;
            unit: 'days' | 'weeks' | 'months'
        };
        careRate: {
            min: number;
            max: number;
            unit: 'days' | 'weeks' | 'months'
        };
    };
    info: {
        title: string;
        content: string[];
        group: 1 | 2 | 3;
    }[];
    careRoutine: CareRoutine[];
    isFav: boolean;
    isAdded: boolean;
}

export const data: TreeItem[] = [
    {
        id: 1,
        name: `Xương rồng`,
        img: 'https://cdn.shopify.com/s/files/1/0150/6262/products/2_1024x1024.jpg?v=1571439398',
        quickInfo: {
            careLevel: 'medium',
            grownTime: {
                min: 3,
                max: 4,
                unit: 'months'
            },
            careRate: {
                min: 5,
                max: 10,
                unit: 'days'
            }
        },
        info: [
            {
                title: 'Mô tả về cây',
                content: [
                    `Cấu Trúc: Cây có thân dạng xương rồng với các cành phát triển theo hình dáng một đám mây xanh. Thân và các cành thường chứa gai hoặc lông.`,
                    `Đặc Điểm Sinh Học: Xương rồng thích ứng với môi trường khô hanh và có khả năng tích tụ nước trong thân.`
                ],
                group: 1
            },
            {
                title: `Thời gian ra hoa và ra quả`,
                content: [
                    `Mùa Hoa: Ra hoa thường vào mùa xuân hoặc mùa hè.`,
                    `Mùa Quả: Xương rồng có thể ra quả sau khi hoa rụng vào mùa hè.`
                ],
                group: 1
            },
            {
                title: `Đặc điểm sinh học`,
                content: [
                    `Vùng Sinh Sống: Phổ biến ở các khu vực khô cằn như vùng sa mạc hoặc khu vực có đất khô ráo.`
                ],
                group: 1
            },
            {
                title: `Sức khoẻ và bệnh gây hại`,
                content: [
                    `Bệnh Hại Thường Gặp: Có thể bị nhiễm một số loại nấm hoặc sâu bệnh khi thân xương rồng ẩm ướt hoặc trong điều kiện ẩm.`,
                    `Cách Xử Lý Các Vấn Đề Sức Khỏe: Cắt bỏ các phần bị nhiễm bệnh và diệt sâu bệnh nếu cần.`
                ],
                group: 1
            },
            {
                title: `Yêu cầu về đất đai và độ ẩm`,
                content: [
                    `Cây xương rồng thích đất thoát nước tốt, không cần nhiều nước và có thể sống trong đất cạn.`
                ],
                group: 2
            },
            {
                title: `Cách chăm sóc`,
                content: [
                    `Tưới Nước: Cần tưới nước một cách thận trọng, tránh tưới quá nhiều vì có thể gây thối rễ.`,
                    `Ánh Sáng và Nhiệt Độ: Cần ánh sáng mặt trời nhiều và chịu được nhiệt độ cao.`
                ],
                group: 2
            },
            {
                title: `Phương pháp tưới nước`,
                content: [
                    `Sử dụng phương pháp tưới nhỏ giọt hoặc tưới nước từ phía dưới để tránh làm ẩm quá nhiều phần trên của cây và đặc biệt là không làm ẩm lá.`,
                    `Đảm bảo đất thoát nước tốt để tránh việc nước ướt đọng quá lâu gây thối rễ cho cây.`
                ],
                group: 2
            },
            {
                title: `Lịch tưới nước`,
                content: [
                    `Tưới nước cây xương rồng cần tuân thủ nguyên tắc "ít nhưng đều" để tránh làm ẩm quá mức đất và gây hại cho cây.`,
                    `Trong mùa xuân và mùa hè (khi cây đang ở trạng thái sinh trưởng hoặc ra hoa), có thể tưới nước một lần mỗi 10-14 ngày.`,
                    `Trong mùa đông hoặc khi nhiệt độ thấp hơn, giảm tần suất tưới nước, chỉ tưới nước một lần mỗi 4-6 tuần.`
                ],
                group: 2
            }
        ],
        careRoutine: [
            {
                title: 'Tưới nước',
                repeat: 'days',
                interval: 7,
                unit: 'days',
                quantity: 1,
                note: ['Tưới nước vào buổi sáng'],
                atTime: 'morning'
            },
            {
                title: 'Chăm sóc',
                repeat: 'days',
                interval: 14,
                unit: 'days',
                quantity: 1,
                note: ['Làm sạch lá cây'],
                atTime: 'morning'
            }
        ],
        isFav: false,
        isAdded: false
    }
]