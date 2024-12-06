// symtem import
import React from "react";
import { View } from "react-native";

// style import
import Svg, { SvgUri, SvgXml } from 'react-native-svg';
import clrStyle from "./componentStyleSheet";
import styles from "./stylesheet";

// ____________________END OF IMPORT_______________________

export const searchIcon = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_367_83)">
    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_367_83">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const shareIcon = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_62_4141)">
    <path d="M16.4 21.2788L11.1513 18.4162C10.466 19.1488 9.57624 19.6584 8.5976 19.8786C7.61896 20.0989 6.5967 20.0197 5.66366 19.6513C4.73063 19.2829 3.92996 18.6424 3.36572 17.8131C2.80148 16.9837 2.49976 16.0037 2.49976 15.0006C2.49976 13.9975 2.80148 13.0176 3.36572 12.1882C3.92996 11.3588 4.73063 10.7183 5.66366 10.35C6.5967 9.98159 7.61896 9.90239 8.5976 10.1226C9.57624 10.3429 10.466 10.8524 11.1513 11.585L16.4013 8.7225C16.1032 7.54259 16.2457 6.29449 16.8021 5.21213C17.3584 4.12977 18.2904 3.28748 19.4233 2.84313C20.5563 2.39878 21.8124 2.38288 22.9562 2.79842C24.1001 3.21395 25.0531 4.0324 25.6366 5.10033C26.2202 6.16826 26.3942 7.41236 26.1261 8.59943C25.858 9.7865 25.1662 10.835 24.1803 11.5485C23.1944 12.262 21.9822 12.5914 20.7708 12.475C19.5594 12.3586 18.432 11.8044 17.6 10.9162L12.35 13.7787C12.5515 14.5804 12.5515 15.4196 12.35 16.2212L17.5988 19.0837C18.4308 18.1956 19.5581 17.6414 20.7695 17.525C21.9809 17.4086 23.1932 17.738 24.1791 18.4515C25.1649 19.165 25.8568 20.2135 26.1249 21.4006C26.393 22.5876 26.219 23.8317 25.6354 24.8997C25.0518 25.9676 24.0988 26.786 22.955 27.2016C21.8112 27.6171 20.555 27.6012 19.4221 27.1569C18.2891 26.7125 17.3572 25.8702 16.8008 24.7879C16.2445 23.7055 16.102 22.4574 16.4 21.2775V21.2788ZM7.50001 17.5C8.16305 17.5 8.79894 17.2366 9.26778 16.7678C9.73662 16.2989 10 15.663 10 15C10 14.337 9.73662 13.7011 9.26778 13.2322C8.79894 12.7634 8.16305 12.5 7.50001 12.5C6.83697 12.5 6.20109 12.7634 5.73225 13.2322C5.26341 13.7011 5.00001 14.337 5.00001 15C5.00001 15.663 5.26341 16.2989 5.73225 16.7678C6.20109 17.2366 6.83697 17.5 7.50001 17.5ZM21.25 10C21.9131 10 22.5489 9.73661 23.0178 9.26777C23.4866 8.79893 23.75 8.16304 23.75 7.5C23.75 6.83696 23.4866 6.20107 23.0178 5.73223C22.5489 5.26339 21.9131 5 21.25 5C20.587 5 19.9511 5.26339 19.4822 5.73223C19.0134 6.20107 18.75 6.83696 18.75 7.5C18.75 8.16304 19.0134 8.79893 19.4822 9.26777C19.9511 9.73661 20.587 10 21.25 10ZM21.25 25C21.9131 25 22.5489 24.7366 23.0178 24.2678C23.4866 23.7989 23.75 23.163 23.75 22.5C23.75 21.837 23.4866 21.2011 23.0178 20.7322C22.5489 20.2634 21.9131 20 21.25 20C20.587 20 19.9511 20.2634 19.4822 20.7322C19.0134 21.2011 18.75 21.837 18.75 22.5C18.75 23.163 19.0134 23.7989 19.4822 24.2678C19.9511 24.7366 20.587 25 21.25 25Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_62_4141">
    <rect width="30" height="30" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const fbLogo = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" transform="translate(0.5)" fill="none"/>
<path d="M24 12.0698C24 5.71857 18.8513 0.569849 12.5 0.569849C6.14872 0.569849 1 5.71857 1 12.0698C1 17.8098 5.20538 22.5674 10.7031 23.4301V15.3941H7.7832V12.0698H10.7031V9.53626C10.7031 6.65407 12.42 5.06204 15.0468 5.06204C16.305 5.06204 17.6211 5.28665 17.6211 5.28665V8.11672H16.171C14.7424 8.11672 14.2969 9.00319 14.2969 9.91263V12.0698H17.4863L16.9765 15.3941H14.2969V23.4301C19.7946 22.5674 24 17.8098 24 12.0698Z" fill="white"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const googleLogo = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="none"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90909H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7636 23.04 12.2614Z" fill="#4285F4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.4998C15.105 23.4998 17.7081 22.4701 19.6109 20.7137L15.8943 17.8283C14.8645 18.5183 13.5472 18.926 12 18.926C9.00474 18.926 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z" fill="#34A853"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z" fill="#FBBC05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z" fill="#EA4335"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const appleLogo = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="black"/>
<path d="M21.2806 18.424C20.9327 19.2275 20.521 19.9672 20.044 20.6472C19.3938 21.5743 18.8614 22.216 18.4511 22.5724C17.815 23.1573 17.1336 23.4568 16.4039 23.4739C15.88 23.4739 15.2482 23.3248 14.5128 23.0224C13.775 22.7214 13.0969 22.5724 12.4769 22.5724C11.8267 22.5724 11.1293 22.7214 10.3834 23.0224C9.63638 23.3248 9.03456 23.4824 8.57444 23.498C7.87466 23.5278 7.17716 23.2197 6.48093 22.5724C6.03656 22.1848 5.48075 21.5204 4.8149 20.5791C4.10051 19.5739 3.51317 18.4084 3.05304 17.0795C2.56026 15.6442 2.31323 14.2543 2.31323 12.9087C2.31323 11.3673 2.6463 10.0379 3.31342 8.92385C3.83772 8.029 4.53522 7.32312 5.4082 6.80493C6.28118 6.28674 7.22443 6.02267 8.24024 6.00578C8.79605 6.00578 9.52493 6.1777 10.4307 6.51559C11.3339 6.85462 11.9139 7.02655 12.1681 7.02655C12.3582 7.02655 13.0025 6.82552 14.0947 6.42473C15.1275 6.05305 15.9992 5.89916 16.7133 5.95978C18.6484 6.11595 20.1022 6.87876 21.069 8.25303C19.3384 9.30163 18.4823 10.7703 18.4993 12.6544C18.515 14.122 19.0474 15.3432 20.0937 16.3129C20.5679 16.7629 21.0974 17.1107 21.6866 17.3578C21.5588 17.7283 21.4239 18.0832 21.2806 18.424ZM16.8425 0.960131C16.8425 2.11039 16.4223 3.18439 15.5847 4.17847C14.5738 5.36023 13.3512 6.04311 12.0253 5.93536C12.0084 5.79736 11.9986 5.65213 11.9986 5.49951C11.9986 4.39526 12.4793 3.21349 13.333 2.24724C13.7592 1.75801 14.3013 1.35122 14.9586 1.02671C15.6145 0.707053 16.2349 0.530273 16.8184 0.5C16.8354 0.653772 16.8425 0.807554 16.8425 0.960116V0.960131Z" fill="white"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const sharpLeftArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4L7 12L15 20" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const sharpRightArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20L17 12L9 4" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const curveRightArrow = (w: any = '100%', h: any = '100%', color: any = '#272727') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 4L14.5858 10.5858C15.3668 11.3668 15.3668 12.6332 14.5858 13.4142L8 20" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

// search
export const xIcon = (w: any = '100%', h: any = '100%', color: any = "#808797") => {
    const xml = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18C13.9235 18 18 13.9147 18 9C18 4.07647 13.9147 0 8.99118 0C4.07647 0 0 4.07647 0 9C0 13.9147 4.08529 18 9 18ZM5.88529 12.8471C5.48823 12.8471 5.16176 12.5118 5.16176 12.1059C5.16176 11.9118 5.24118 11.7353 5.37353 11.5941L7.95882 9.00882L5.37353 6.42353C5.24118 6.28235 5.16176 6.10588 5.16176 5.91176C5.16176 5.50588 5.48823 5.18824 5.88529 5.18824C6.09706 5.18824 6.26471 5.25882 6.39706 5.4L8.99118 7.98529L11.6118 5.39118C11.7618 5.24118 11.9206 5.17059 12.1147 5.17059C12.5118 5.17059 12.8382 5.49706 12.8382 5.89412C12.8382 6.09706 12.7765 6.25588 12.6265 6.41471L10.0324 9.00882L12.6176 11.5853C12.7588 11.7353 12.8294 11.9029 12.8294 12.1059C12.8294 12.5118 12.5029 12.8471 12.0971 12.8471C11.8941 12.8471 11.7176 12.7588 11.5765 12.6265L8.99118 10.0412L6.42353 12.6265C6.28235 12.7676 6.09706 12.8471 5.88529 12.8471Z" fill=${color}/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const adjustIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5L10 5M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M14 5L20 5M4 12L16 12M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM8 19L20 19M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" stroke="#3E3792" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const uniDetailPageHatIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="118" height="67" viewBox="0 0 118 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M99.5589 38.1422C99.5589 38.1422 99.5589 38.1422 99.5589 37.9158L99.7851 36.2181H99.5589C99.2195 32.0304 95.8253 27.5031 89.1504 23.3154C73.9903 13.8081 47.7431 9.95998 30.5466 14.7136C20.9302 17.43 16.1786 22.1836 16.6311 27.6163L15.1603 38.2554C13.237 43.3485 16.518 49.3472 25.1162 54.6667C40.2763 64.174 66.5236 68.0221 83.7201 63.2685C92.3184 60.8917 97.0698 56.8172 97.6355 52.0635L99.5589 38.029V38.1422Z" fill="#348AB8"/>
<path d="M99.5589 38.1422C99.5589 38.1422 99.5589 38.1422 99.5589 37.9158L99.7851 36.2181H99.5589C99.2195 32.0304 95.8253 27.5031 89.1504 23.3154C73.9903 13.8081 47.7431 9.95998 30.5466 14.7136C20.9302 17.43 16.1786 22.1836 16.6311 27.6163L15.1603 38.2554C13.237 43.3486 16.518 49.3472 25.1162 54.6667C40.2763 64.174 66.5236 68.0221 83.7201 63.2685C92.3184 60.8917 97.0698 56.8172 97.6355 52.0635L99.5589 38.029V38.1422Z" fill="#0B4B85"/>
<path d="M117.66 35.9918L55.436 51.9504L0 18.675L0.339391 15.9586L118 33.2754L117.66 35.9918Z" fill="#348AB8"/>
<path d="M117.66 35.9918L55.436 51.9504L0 18.675L0.339391 15.9586L118 33.2754L117.66 35.9918Z" fill="#1F6A9E"/>
<path d="M118 33.2754L55.8891 49.234L0.339844 15.9586L62.564 0L118 33.2754Z" fill="#348AB8"/>
<path d="M59.1696 24.5604C59.1696 24.5604 55.7757 25.6923 50.5715 27.1636C45.4804 28.7482 38.2397 30.1063 31.9041 32.4831C30.094 33.1622 29.9809 33.5018 29.3021 35.5391C28.6233 37.2368 28.0576 38.8213 27.3788 40.4059C26.1343 43.575 24.8899 46.4045 23.7586 48.8945C21.4959 53.7613 19.9119 57.0436 19.9119 57.0436C19.9119 57.0436 20.817 53.5349 22.2878 48.3286C23.0797 45.7254 23.9848 42.6695 25.1161 39.5004C25.6818 37.9159 26.2474 36.2181 26.8131 34.6336C27.2656 33.615 27.0394 33.2754 28.0576 31.8041C29.0758 30.7854 29.9809 30.4459 30.886 29.9932C38.0134 27.5032 45.0278 26.4845 50.3451 25.6922C55.6625 25.0132 59.2829 24.6736 59.2829 24.6736L59.1696 24.5604Z" fill="#C33E13"/>
<path d="M21.0435 53.9876C20.1384 53.6481 19.2334 55.7985 19.1203 57.1567C19.1203 57.1567 15.2737 62.1367 14.708 62.929C14.708 62.929 14.708 64.6267 17.197 66.3244C19.7991 68.0222 22.5143 65.9849 22.5143 65.9849L21.0435 57.7226C21.0435 57.7226 22.6274 54.7799 21.0435 54.1008V53.9876Z" fill="#C33E13"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const sharpXIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 5L5 19M5.00003 5L19 19" stroke="#3E3792" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const editIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 15.1667H2C1.72667 15.1667 1.5 14.94 1.5 14.6667C1.5 14.3934 1.72667 14.1667 2 14.1667H14C14.2733 14.1667 14.5 14.3934 14.5 14.6667C14.5 14.94 14.2733 15.1667 14 15.1667Z" fill="#808797"/>
<path d="M12.68 2.82C11.3867 1.52667 10.12 1.49334 8.79334 2.82L7.98668 3.62667C7.92001 3.69334 7.89334 3.8 7.92001 3.89334C8.42668 5.66 9.84001 7.07334 11.6067 7.58C11.6333 7.58667 11.66 7.59334 11.6867 7.59334C11.76 7.59334 11.8267 7.56667 11.88 7.51334L12.68 6.70667C13.34 6.05334 13.66 5.42 13.66 4.78C13.6667 4.12 13.3467 3.48 12.68 2.82Z" fill="#808797"/>
<path d="M10.4067 8.18666C10.2133 8.09332 10.0267 7.99999 9.84668 7.89333C9.70001 7.80666 9.56001 7.71333 9.42001 7.61333C9.30668 7.53999 9.17334 7.43333 9.04667 7.32666C9.03334 7.31999 8.98667 7.27999 8.93334 7.22666C8.71334 7.03999 8.46668 6.79999 8.24668 6.53333C8.22668 6.51999 8.19334 6.47333 8.14668 6.41333C8.08001 6.33333 7.96668 6.19999 7.86668 6.04666C7.78668 5.94666 7.69334 5.79999 7.60668 5.65333C7.50001 5.47333 7.40668 5.29333 7.31334 5.10666C7.19097 4.84443 6.8468 4.76653 6.64218 4.97115L2.89334 8.71999C2.80668 8.80666 2.72668 8.97333 2.70668 9.08666L2.34668 11.64C2.28001 12.0933 2.40668 12.52 2.68668 12.8067C2.92668 13.04 3.26001 13.1667 3.62001 13.1667C3.70001 13.1667 3.78001 13.16 3.86001 13.1467L6.42001 12.7867C6.54001 12.7667 6.70668 12.6867 6.78668 12.6L10.5417 8.84497C10.7422 8.64444 10.6669 8.29942 10.4067 8.18666Z" fill="#808797"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const infoIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#CCCED5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const imgPickerIcon = (w: number, h: number, color?: any) => {
    const xml = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1703 43.8297C14.0573 49.2885 19.8219 51.25 30 51.25C44.0637 51.25 49.7009 47.5049 50.9632 35.9633M11.1703 43.8297C9.44809 40.5731 8.75 36.0719 8.75 30C8.75 13.75 13.75 8.75 30 8.75C46.25 8.75 51.25 13.75 51.25 30C51.25 32.1863 51.1595 34.169 50.9632 35.9633M11.1703 43.8297L18.9645 36.0355C20.9171 34.0829 24.0829 34.0829 26.0355 36.0355L26.4645 36.4645C28.4171 38.4171 31.5829 38.4171 33.5355 36.4645L38.9645 31.0355C40.9171 29.0829 44.0829 29.0829 46.0355 31.0355L50.9632 35.9633M26.7275 22.115C26.7275 24.6625 24.66 26.73 22.1125 26.73C19.5675 26.73 17.5 24.6625 17.5 22.115C17.5 19.5675 19.5675 17.5 22.1125 17.5C24.66 17.5 26.7275 19.5675 26.7275 22.115Z" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const cameraIcon = (w: number, h: number, color?: any) => {
    const xml = `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="42" height="42" rx="15" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2"/>
<circle cx="21.5" cy="21.5" r="15.5" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2"/>
<circle cx="21.5" cy="21.5" r="11.5" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const bellIcon = (w: any = '100%', h: any = '100%', color?: string) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="${color ? color : 'none'}" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.02 2.91003C8.70997 2.91003 6.01997 5.60003 6.01997 8.91003V11.8C6.01997 12.41 5.75997 13.34 5.44997 13.86L4.29997 15.77C3.58997 16.95 4.07997 18.26 5.37997 18.7C9.68997 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91003C18.02 5.61003 15.32 2.91003 12.02 2.91003Z" stroke=${color ? color : "#98A2B3"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke=${color ? color : "#98A2B3"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke=${color ? color : "#98A2B3"} stroke-width="1.5" stroke-miterlimit="10"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const calendar = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V5" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 2V5" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.5 9.08997H20.5" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6947 13.7H15.7037" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6947 16.7H15.7037" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9955 13.7H12.0045" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9955 16.7H12.0045" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.29431 13.7H8.30329" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.29431 16.7H8.30329" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const clock = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const eye = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#4E5BA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#4E5BA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const rightLongArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 12.5L18.5 12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 7.5L19.5 12.5L14.5 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const leftLongArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12L6 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17L5 12L10 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const pingIcon = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7466 6.13335C13.0466 3.05335 10.3599 1.66669 7.99994 1.66669C7.99994 1.66669 7.99994 1.66669 7.99327 1.66669C5.63994 1.66669 2.94661 3.04669 2.24661 6.12669C1.46661 9.56669 3.57328 12.48 5.47994 14.3134C6.18661 14.9934 7.09328 15.3334 7.99994 15.3334C8.90661 15.3334 9.81328 14.9934 10.5133 14.3134C12.4199 12.48 14.5266 9.57335 13.7466 6.13335ZM7.99994 9.47335C6.83994 9.47335 5.89994 8.53335 5.89994 7.37335C5.89994 6.21335 6.83994 5.27335 7.99994 5.27335C9.15994 5.27335 10.0999 6.21335 10.0999 7.37335C10.0999 8.53335 9.15994 9.47335 7.99994 9.47335Z" fill="#FF3358"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

// WEATHER ICON

export const sunIcon = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_1336_5862)">
<circle cx="101.796" cy="32.2106" r="23.6842" fill="url(#paint0_linear_1336_5862)"/>
</g>
<path d="M62.8956 126.86C62.8956 130.287 60.0088 133.066 56.4478 133.066C52.8868 133.066 50 130.287 50 126.86C50 123.432 52.7725 119.744 56.4478 115C59.5427 119.614 62.8956 123.432 62.8956 126.86Z" fill="url(#paint1_linear_1336_5862)"/>
<path d="M94.8956 126.86C94.8956 130.287 92.0088 133.066 88.4478 133.066C84.8868 133.066 82 130.287 82 126.86C82 123.432 84.7725 119.744 88.4478 115C91.5427 119.614 94.8956 123.432 94.8956 126.86Z" fill="url(#paint2_linear_1336_5862)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.75 94.875C44.75 94.3918 44.3582 94 43.875 94C43.3918 94 43 94.3918 43 94.875V97.4292L40.9937 95.4229C40.652 95.0812 40.098 95.0812 39.7563 95.4229C39.4146 95.7647 39.4146 96.3187 39.7563 96.6604L43 99.9041V101H41.9041L38.6604 97.7563C38.3187 97.4146 37.7647 97.4146 37.4229 97.7563C37.0812 98.098 37.0812 98.652 37.4229 98.9937L39.4292 101H36.875C36.3918 101 36 101.392 36 101.875C36 102.358 36.3918 102.75 36.875 102.75H39.4292L37.4229 104.756C37.0812 105.098 37.0812 105.652 37.4229 105.994C37.7647 106.335 38.3187 106.335 38.6604 105.994L41.9041 102.75H43V103.846L39.7563 107.09C39.4146 107.431 39.4146 107.985 39.7563 108.327C40.098 108.669 40.652 108.669 40.9937 108.327L43 106.321V108.875C43 109.358 43.3918 109.75 43.875 109.75C44.3582 109.75 44.75 109.358 44.75 108.875V106.321L46.7563 108.327C47.098 108.669 47.652 108.669 47.9937 108.327C48.3354 107.985 48.3354 107.431 47.9937 107.09L44.75 103.846V102.75H45.8459L49.0896 105.994C49.4313 106.335 49.9853 106.335 50.3271 105.994C50.6688 105.652 50.6688 105.098 50.3271 104.756L48.3208 102.75H50.875C51.3582 102.75 51.75 102.358 51.75 101.875C51.75 101.392 51.3582 101 50.875 101H48.3208L50.3271 98.9937C50.6688 98.652 50.6688 98.098 50.3271 97.7563C49.9853 97.4146 49.4313 97.4146 49.0896 97.7563L45.8459 101H44.75V99.9041L47.9937 96.6604C48.3354 96.3187 48.3354 95.7647 47.9937 95.4229C47.652 95.0812 47.098 95.0812 46.7563 95.4229L44.75 97.4292V94.875Z" fill="#0052CE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M74.75 97.875C74.75 97.3918 74.3582 97 73.875 97C73.3918 97 73 97.3918 73 97.875V100.429L70.9937 98.4229C70.652 98.0812 70.098 98.0812 69.7563 98.4229C69.4146 98.7647 69.4146 99.3187 69.7563 99.6604L73 102.904V104H71.9041L68.6604 100.756C68.3187 100.415 67.7647 100.415 67.4229 100.756C67.0812 101.098 67.0812 101.652 67.4229 101.994L69.4292 104H66.875C66.3918 104 66 104.392 66 104.875C66 105.358 66.3918 105.75 66.875 105.75H69.4292L67.4229 107.756C67.0812 108.098 67.0812 108.652 67.4229 108.994C67.7647 109.335 68.3187 109.335 68.6604 108.994L71.9041 105.75H73V106.846L69.7563 110.09C69.4146 110.431 69.4146 110.985 69.7563 111.327C70.098 111.669 70.652 111.669 70.9937 111.327L73 109.321V111.875C73 112.358 73.3918 112.75 73.875 112.75C74.3582 112.75 74.75 112.358 74.75 111.875V109.321L76.7563 111.327C77.098 111.669 77.652 111.669 77.9937 111.327C78.3354 110.985 78.3354 110.431 77.9937 110.09L74.75 106.846V105.75H75.8459L79.0896 108.994C79.4313 109.335 79.9853 109.335 80.3271 108.994C80.6688 108.652 80.6688 108.098 80.3271 107.756L78.3208 105.75H80.875C81.3582 105.75 81.75 105.358 81.75 104.875C81.75 104.392 81.3582 104 80.875 104H78.3208L80.3271 101.994C80.6688 101.652 80.6688 101.098 80.3271 100.756C79.9853 100.415 79.4313 100.415 79.0896 100.756L75.8459 104H74.75V102.904L77.9937 99.6604C78.3354 99.3187 78.3354 98.7647 77.9937 98.4229C77.652 98.0812 77.098 98.0812 76.7563 98.4229L74.75 100.429V97.875Z" fill="#0052CE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M103.75 94.875C103.75 94.3918 103.358 94 102.875 94C102.392 94 102 94.3918 102 94.875V97.4292L99.9937 95.4229C99.652 95.0812 99.098 95.0812 98.7563 95.4229C98.4146 95.7647 98.4146 96.3187 98.7563 96.6604L102 99.9041V101H100.904L97.6604 97.7563C97.3187 97.4146 96.7647 97.4146 96.4229 97.7563C96.0812 98.098 96.0812 98.652 96.4229 98.9937L98.4292 101H95.875C95.3918 101 95 101.392 95 101.875C95 102.358 95.3918 102.75 95.875 102.75H98.4292L96.4229 104.756C96.0812 105.098 96.0812 105.652 96.4229 105.994C96.7647 106.335 97.3187 106.335 97.6604 105.994L100.904 102.75H102V103.846L98.7563 107.09C98.4146 107.431 98.4146 107.985 98.7563 108.327C99.098 108.669 99.652 108.669 99.9937 108.327L102 106.321V108.875C102 109.358 102.392 109.75 102.875 109.75C103.358 109.75 103.75 109.358 103.75 108.875V106.321L105.756 108.327C106.098 108.669 106.652 108.669 106.994 108.327C107.335 107.985 107.335 107.431 106.994 107.09L103.75 103.846V102.75H104.846L108.09 105.994C108.431 106.335 108.985 106.335 109.327 105.994C109.669 105.652 109.669 105.098 109.327 104.756L107.321 102.75H109.875C110.358 102.75 110.75 102.358 110.75 101.875C110.75 101.392 110.358 101 109.875 101H107.321L109.327 98.9937C109.669 98.652 109.669 98.098 109.327 97.7563C108.985 97.4146 108.431 97.4146 108.09 97.7563L104.846 101H103.75V99.9041L106.994 96.6604C107.335 96.3187 107.335 95.7647 106.994 95.4229C106.652 95.0812 106.098 95.0812 105.756 95.4229L103.75 97.4292V94.875Z" fill="#0052CE"/>
<mask id="path-7-inside-1_1336_5862" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M94.5612 37.3552C89.2516 21.0918 73.9295 9.33838 55.8556 9.33838C33.3785 9.33838 15.1572 27.5163 15.1572 49.9399C15.1572 72.3633 33.3783 90.5412 55.8552 90.5414H101.709V90.5413C101.709 90.5413 101.709 90.5413 101.709 90.5413C116.694 90.5413 128.841 78.4227 128.841 63.4737C128.841 48.5246 116.694 36.406 101.709 36.406C99.2352 36.406 96.8386 36.7363 94.5612 37.3552Z"/>
</mask>
<g filter="url(#filter1_i_1336_5862)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M94.5612 37.3552C89.2516 21.0918 73.9295 9.33838 55.8556 9.33838C33.3785 9.33838 15.1572 27.5163 15.1572 49.9399C15.1572 72.3633 33.3783 90.5412 55.8552 90.5414H101.709V90.5413C101.709 90.5413 101.709 90.5413 101.709 90.5413C116.694 90.5413 128.841 78.4227 128.841 63.4737C128.841 48.5246 116.694 36.406 101.709 36.406C99.2352 36.406 96.8386 36.7363 94.5612 37.3552Z" fill="url(#paint3_linear_1336_5862)"/>
</g>
<path d="M94.5612 37.3552L93.6606 37.6492L93.9402 38.5056L94.8096 38.2694L94.5612 37.3552ZM55.8552 90.5414L55.8552 91.4888H55.8552V90.5414ZM101.709 90.5414V91.4888H102.656V90.5414H101.709ZM101.709 90.5413V89.594H100.761V90.5413H101.709ZM95.4618 37.0611C90.0284 20.4185 74.3502 8.39101 55.8556 8.39101V10.2857C73.5088 10.2857 88.4749 21.7652 93.6606 37.6492L95.4618 37.0611ZM55.8556 8.39101C32.8574 8.39101 14.2099 26.9909 14.2099 49.9399H16.1046C16.1046 28.0416 33.8996 10.2857 55.8556 10.2857V8.39101ZM14.2099 49.9399C14.2099 72.8886 32.8572 91.4885 55.8552 91.4888L55.8552 89.594C33.8994 89.5938 16.1046 71.838 16.1046 49.9399H14.2099ZM55.8552 91.4888H101.709V89.594H55.8552V91.4888ZM102.656 90.5414V90.5413H100.761V90.5414H102.656ZM101.709 89.594H101.709C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594H101.709H101.709C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594H101.709H101.709C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594H101.709H101.709C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594H101.709H101.709C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594H101.709H101.709C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594H101.709H101.709C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594H101.709H101.709C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594C101.709 89.594 101.709 89.594 101.709 89.594H101.709V91.4887H101.709C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887H101.709H101.709C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887H101.709H101.709C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887H101.709H101.709C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887H101.709H101.709C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887H101.709H101.709C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887H101.709H101.709C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887H101.709H101.709C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887C101.709 91.4887 101.709 91.4887 101.709 91.4887H101.709V89.594ZM127.894 63.4737C127.894 77.8974 116.173 89.594 101.709 89.594V91.4887C117.215 91.4887 129.789 78.9481 129.789 63.4737H127.894ZM101.709 37.3534C116.173 37.3534 127.894 49.05 127.894 63.4737H129.789C129.789 47.9993 117.215 35.4586 101.709 35.4586V37.3534ZM94.8096 38.2694C97.0068 37.6723 99.3198 37.3534 101.709 37.3534V35.4586C99.1505 35.4586 96.6704 35.8003 94.3128 36.4409L94.8096 38.2694Z" fill="black" fill-opacity="0.05" mask="url(#path-7-inside-1_1336_5862)"/>
<defs>
<filter id="filter0_i_1336_5862" x="78.1118" y="8.52637" width="47.3687" height="66.3158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="18.9474"/>
<feGaussianBlur stdDeviation="33.1579"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="overlay" in2="shape" result="effect1_innerShadow_1336_5862"/>
</filter>
<filter id="filter1_i_1336_5862" x="15.1572" y="9.33838" width="113.684" height="127.29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="46.0864"/>
<feGaussianBlur stdDeviation="28.4211"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1336_5862"/>
</filter>
<linearGradient id="paint0_linear_1336_5862" x1="101.796" y1="8.52637" x2="101.796" y2="55.8948" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD358"/>
<stop offset="1" stop-color="#FA6C21"/>
</linearGradient>
<linearGradient id="paint1_linear_1336_5862" x1="64.7432" y1="136" x2="50.3804" y2="117.891" gradientUnits="userSpaceOnUse">
<stop stop-color="#14B9EF"/>
<stop offset="0.0001" stop-color="#8CE2FF"/>
<stop offset="1" stop-color="#0638AD"/>
</linearGradient>
<linearGradient id="paint2_linear_1336_5862" x1="96.7432" y1="136" x2="82.3804" y2="117.891" gradientUnits="userSpaceOnUse">
<stop stop-color="#14B9EF"/>
<stop offset="0.0001" stop-color="#8CE2FF"/>
<stop offset="1" stop-color="#0638AD"/>
</linearGradient>
<linearGradient id="paint3_linear_1336_5862" x1="23.1214" y1="9.33838" x2="128.695" y2="90.7743" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#C1C1C1"/>
</linearGradient>
</defs>
</svg>

`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const addTo = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12H20M12 4V20" stroke="#808797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const heartFilled = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" fill="${color ? color : "#FF6B6B"}"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}


// export const NAME = (w: any = '100%', h: any = '100%', color?:any) => {
//     const xml = ``
//     return (
//         <SvgXml xml={xml} width={w} height={h} />
//     )
// }
