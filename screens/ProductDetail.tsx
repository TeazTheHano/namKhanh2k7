import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { BannerSliderWithCenter, RoundBtn, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav, ViewCol, ViewColBetweenCenter, ViewRow, ViewRowBetweenCenter, ViewRowCenter, ViewRowEvenlyCenter, ViewRowStartCenter } from '../assets/Class'
import { Nunito12Bold, Nunito14Reg, Nunito14Bold, Nunito16Bold, Nunito18Bold, Nunito20Bold, Nunito12Reg, Roboto20Med, Signika24SemiBold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { iconCodeList, iconRequireList, treeData } from '../data/factoryData'
import { ListGen, marginBottomForScrollView } from '../assets/component'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SvgXml } from 'react-native-svg'


export default function ProductDetail({ route }: any) {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    const [CurrentCache, dispatch] = React.useContext(RootContext);

    const [numberItems, setNumberItems] = useState(1);

    const addToCartIcon = () => {
        return (
            <SvgXml xml={`<svg width="168" height="40" viewBox="0 0 168 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="168" height="40" rx="12" fill="url(#paint0_linear_1439_5622)"/><path d="M23.476 25.128C23.1453 25.128 22.8893 25.0373 22.708 24.856C22.5373 24.664 22.452 24.4027 22.452 24.072V15.432H19.332C19.0547 15.432 18.836 15.3573 18.676 15.208C18.5267 15.048 18.452 14.8347 18.452 14.568C18.452 14.2907 18.5267 14.0827 18.676 13.944C18.836 13.7947 19.0547 13.72 19.332 13.72H27.62C27.8973 13.72 28.1107 13.7947 28.26 13.944C28.42 14.0827 28.5 14.2907 28.5 14.568C28.5 14.8347 28.42 15.048 28.26 15.208C28.1107 15.3573 27.8973 15.432 27.62 15.432H24.5V24.072C24.5 24.4027 24.4147 24.664 24.244 24.856C24.0733 25.0373 23.8173 25.128 23.476 25.128ZM31.3445 25.128C31.0245 25.128 30.7792 25.0427 30.6085 24.872C30.4378 24.6907 30.3525 24.4347 30.3525 24.104V14.6C30.3525 14.2693 30.4378 14.0187 30.6085 13.848C30.7792 13.6773 31.0245 13.592 31.3445 13.592C31.6645 13.592 31.9098 13.6773 32.0805 13.848C32.2618 14.0187 32.3525 14.2693 32.3525 14.6V18.744H32.1285C32.3632 18.1787 32.7258 17.752 33.2165 17.464C33.7178 17.1653 34.2832 17.016 34.9125 17.016C35.5418 17.016 36.0592 17.1333 36.4645 17.368C36.8698 17.6027 37.1738 17.96 37.3765 18.44C37.5792 18.9093 37.6805 19.5067 37.6805 20.232V24.104C37.6805 24.4347 37.5952 24.6907 37.4245 24.872C37.2538 25.0427 37.0085 25.128 36.6885 25.128C36.3685 25.128 36.1178 25.0427 35.9365 24.872C35.7658 24.6907 35.6805 24.4347 35.6805 24.104V20.328C35.6805 19.72 35.5632 19.2773 35.3285 19C35.1045 18.7227 34.7525 18.584 34.2725 18.584C33.6858 18.584 33.2165 18.7707 32.8645 19.144C32.5232 19.5067 32.3525 19.992 32.3525 20.6V24.104C32.3525 24.7867 32.0165 25.128 31.3445 25.128ZM43.5679 25.16C42.6825 25.16 41.9199 24.9947 41.2799 24.664C40.6399 24.3333 40.1439 23.864 39.7919 23.256C39.4505 22.648 39.2799 21.928 39.2799 21.096C39.2799 20.2853 39.4452 19.576 39.7759 18.968C40.1172 18.36 40.5812 17.8853 41.1679 17.544C41.7652 17.192 42.4425 17.016 43.1999 17.016C43.7545 17.016 44.2505 17.1067 44.6879 17.288C45.1359 17.4693 45.5145 17.7307 45.8239 18.072C46.1439 18.4133 46.3839 18.8293 46.5439 19.32C46.7145 19.8 46.7999 20.344 46.7999 20.952C46.7999 21.144 46.7305 21.2933 46.5919 21.4C46.4639 21.496 46.2772 21.544 46.0319 21.544H40.8959V20.392H45.3919L45.1359 20.632C45.1359 20.1413 45.0612 19.7307 44.9119 19.4C44.7732 19.0693 44.5652 18.8187 44.2879 18.648C44.0212 18.4667 43.6852 18.376 43.2799 18.376C42.8319 18.376 42.4479 18.4827 42.1279 18.696C41.8185 18.8987 41.5785 19.192 41.4079 19.576C41.2479 19.9493 41.1679 20.3973 41.1679 20.92V21.032C41.1679 21.9067 41.3705 22.5627 41.7759 23C42.1919 23.4267 42.7999 23.64 43.5999 23.64C43.8772 23.64 44.1865 23.608 44.5279 23.544C44.8799 23.4693 45.2105 23.3467 45.5199 23.176C45.7439 23.048 45.9412 22.9947 46.1119 23.016C46.2825 23.0267 46.4159 23.0853 46.5119 23.192C46.6185 23.2987 46.6825 23.432 46.7039 23.592C46.7252 23.7413 46.6932 23.896 46.6079 24.056C46.5332 24.216 46.3999 24.3547 46.2079 24.472C45.8345 24.7067 45.4025 24.8827 44.9119 25C44.4319 25.1067 43.9839 25.16 43.5679 25.16ZM45.4879 15.448C45.5839 15.6187 45.6052 15.7733 45.5519 15.912C45.4985 16.0507 45.4079 16.1573 45.2799 16.232C45.1519 16.296 45.0132 16.3173 44.8639 16.296C44.7252 16.2747 44.6079 16.1893 44.5119 16.04L43.2159 14.024L41.9199 16.04C41.8239 16.1893 41.7012 16.2747 41.5519 16.296C41.4132 16.3173 41.2799 16.296 41.1519 16.232C41.0239 16.1573 40.9332 16.0507 40.8799 15.912C40.8265 15.7733 40.8479 15.6187 40.9439 15.448L42.0959 13.336C42.2239 13.0907 42.3785 12.9093 42.5599 12.792C42.7519 12.6747 42.9705 12.616 43.2159 12.616C43.4612 12.616 43.6799 12.6747 43.8719 12.792C44.0639 12.9093 44.2239 13.0907 44.3519 13.336L45.4879 15.448ZM49.4078 25.128C49.0878 25.128 48.8424 25.0427 48.6718 24.872C48.5011 24.6907 48.4158 24.4347 48.4158 24.104V18.056C48.4158 17.7253 48.5011 17.4747 48.6718 17.304C48.8424 17.1333 49.0824 17.048 49.3918 17.048C49.7011 17.048 49.9411 17.1333 50.1118 17.304C50.2824 17.4747 50.3678 17.7253 50.3678 18.056V19.224L50.1918 18.744C50.4051 18.2107 50.7358 17.7893 51.1838 17.48C51.6318 17.1707 52.1651 17.016 52.7838 17.016C53.4131 17.016 53.9304 17.1653 54.3358 17.464C54.7411 17.7627 55.0238 18.2213 55.1838 18.84H54.9598C55.1731 18.2747 55.5251 17.832 56.0158 17.512C56.5064 17.1813 57.0718 17.016 57.7118 17.016C58.3091 17.016 58.7998 17.1333 59.1838 17.368C59.5784 17.6027 59.8718 17.96 60.0638 18.44C60.2558 18.9093 60.3518 19.5067 60.3518 20.232V24.104C60.3518 24.4347 60.2611 24.6907 60.0798 24.872C59.9091 25.0427 59.6638 25.128 59.3438 25.128C59.0238 25.128 58.7784 25.0427 58.6078 24.872C58.4371 24.6907 58.3518 24.4347 58.3518 24.104V20.312C58.3518 19.7147 58.2504 19.2773 58.0478 19C57.8558 18.7227 57.5251 18.584 57.0558 18.584C56.5331 18.584 56.1224 18.7707 55.8238 19.144C55.5251 19.5067 55.3758 20.0133 55.3758 20.664V24.104C55.3758 24.4347 55.2904 24.6907 55.1198 24.872C54.9491 25.0427 54.7038 25.128 54.3838 25.128C54.0638 25.128 53.8131 25.0427 53.6318 24.872C53.4611 24.6907 53.3758 24.4347 53.3758 24.104V20.312C53.3758 19.7147 53.2744 19.2773 53.0718 19C52.8798 18.7227 52.5544 18.584 52.0958 18.584C51.5731 18.584 51.1624 18.7707 50.8638 19.144C50.5651 19.5067 50.4158 20.0133 50.4158 20.664V24.104C50.4158 24.7867 50.0798 25.128 49.4078 25.128ZM69.9268 25.128C69.6601 25.128 69.4254 25.0587 69.2228 24.92C69.0308 24.7813 68.8708 24.568 68.7428 24.28L66.1988 18.376C66.1028 18.1413 66.0654 17.9227 66.0868 17.72C66.1188 17.5173 66.2148 17.3573 66.3748 17.24C66.5454 17.112 66.7748 17.048 67.0628 17.048C67.3081 17.048 67.5054 17.1067 67.6548 17.224C67.8041 17.3307 67.9374 17.5387 68.0548 17.848L70.2148 23.24H69.7348L71.9588 17.832C72.0761 17.5333 72.2094 17.3307 72.3588 17.224C72.5188 17.1067 72.7321 17.048 72.9988 17.048C73.2334 17.048 73.4201 17.112 73.5588 17.24C73.6974 17.3573 73.7828 17.5173 73.8148 17.72C73.8468 17.912 73.8094 18.1253 73.7028 18.36L71.1108 24.28C70.9934 24.568 70.8334 24.7813 70.6308 24.92C70.4388 25.0587 70.2041 25.128 69.9268 25.128ZM77.7723 25.16C77.2069 25.16 76.7003 25.0533 76.2523 24.84C75.8149 24.616 75.4683 24.3173 75.2122 23.944C74.9669 23.5707 74.8443 23.1493 74.8443 22.68C74.8443 22.104 74.9936 21.6507 75.2923 21.32C75.5909 20.9787 76.0763 20.7333 76.7483 20.584C77.4203 20.4347 78.3216 20.36 79.4523 20.36H80.2523V21.512H79.4683C78.8069 21.512 78.2789 21.544 77.8843 21.608C77.4896 21.672 77.2069 21.784 77.0363 21.944C76.8763 22.0933 76.7963 22.3067 76.7963 22.584C76.7963 22.936 76.9189 23.224 77.1643 23.448C77.4096 23.672 77.7509 23.784 78.1883 23.784C78.5403 23.784 78.8496 23.704 79.1163 23.544C79.3936 23.3733 79.6123 23.144 79.7723 22.856C79.9323 22.568 80.0123 22.2373 80.0123 21.864V20.024C80.0123 19.4907 79.8949 19.1067 79.6603 18.872C79.4256 18.6373 79.0309 18.52 78.4763 18.52C78.1669 18.52 77.8309 18.5573 77.4683 18.632C77.1163 18.7067 76.7429 18.8347 76.3483 19.016C76.1456 19.112 75.9643 19.1387 75.8043 19.096C75.6549 19.0533 75.5376 18.968 75.4523 18.84C75.3669 18.7013 75.3243 18.552 75.3243 18.392C75.3243 18.232 75.3669 18.0773 75.4523 17.928C75.5376 17.768 75.6816 17.6507 75.8843 17.576C76.3749 17.3733 76.8443 17.2293 77.2923 17.144C77.7509 17.0587 78.1669 17.016 78.5403 17.016C79.3083 17.016 79.9376 17.1333 80.4283 17.368C80.9296 17.6027 81.3029 17.96 81.5483 18.44C81.7936 18.9093 81.9163 19.5173 81.9163 20.264V24.104C81.9163 24.4347 81.8363 24.6907 81.6763 24.872C81.5163 25.0427 81.2869 25.128 80.9883 25.128C80.6896 25.128 80.4549 25.0427 80.2843 24.872C80.1243 24.6907 80.0443 24.4347 80.0443 24.104V23.336H80.1723C80.0976 23.7093 79.9483 24.0347 79.7243 24.312C79.5109 24.5787 79.2389 24.7867 78.9083 24.936C78.5776 25.0853 78.1989 25.16 77.7723 25.16ZM77.8843 16.04L76.3323 13.8C76.2149 13.6187 76.1669 13.448 76.1883 13.288C76.2203 13.128 76.2949 12.9893 76.4123 12.872C76.5403 12.7547 76.6843 12.6747 76.8443 12.632C77.0149 12.5893 77.1803 12.6 77.3403 12.664C77.5109 12.7173 77.6443 12.8453 77.7403 13.048L78.9403 15.432C79.0256 15.6027 79.0416 15.7573 78.9883 15.896C78.9349 16.0347 78.8389 16.1413 78.7003 16.216C78.5616 16.2907 78.4176 16.3173 78.2682 16.296C78.1189 16.2747 77.9909 16.1893 77.8843 16.04ZM87.5143 25.16C86.7036 25.16 85.9996 24.9947 85.4023 24.664C84.8049 24.3333 84.3409 23.864 84.0103 23.256C83.6796 22.6373 83.5143 21.912 83.5143 21.08C83.5143 20.4507 83.6049 19.8907 83.7863 19.4C83.9783 18.8987 84.2503 18.472 84.6023 18.12C84.9543 17.7573 85.3756 17.4853 85.8663 17.304C86.3569 17.112 86.9063 17.016 87.5143 17.016C88.3249 17.016 89.0289 17.1813 89.6263 17.512C90.2236 17.8427 90.6876 18.312 91.0183 18.92C91.3489 19.528 91.5143 20.248 91.5143 21.08C91.5143 21.7093 91.4183 22.2747 91.2263 22.776C91.0449 23.2773 90.7783 23.7093 90.4263 24.072C90.0743 24.424 89.6529 24.696 89.1623 24.888C88.6716 25.0693 88.1223 25.16 87.5143 25.16ZM87.5143 23.64C87.9089 23.64 88.2556 23.544 88.5543 23.352C88.8529 23.16 89.0823 22.8773 89.2423 22.504C89.4129 22.12 89.4983 21.6453 89.4983 21.08C89.4983 20.2267 89.3169 19.592 88.9543 19.176C88.5916 18.7493 88.1116 18.536 87.5143 18.536C87.1196 18.536 86.7729 18.632 86.4743 18.824C86.1756 19.0053 85.9409 19.288 85.7703 19.672C85.6103 20.0453 85.5303 20.5147 85.5303 21.08C85.5303 21.9227 85.7116 22.5627 86.0743 23C86.4369 23.4267 86.9169 23.64 87.5143 23.64ZM101.157 28.04C100.581 28.04 100.021 27.9867 99.4768 27.88C98.9434 27.7733 98.4581 27.608 98.0208 27.384C97.8181 27.2773 97.6794 27.1493 97.6048 27C97.5408 26.8507 97.5194 26.696 97.5408 26.536C97.5728 26.3867 97.6368 26.2533 97.7328 26.136C97.8394 26.0187 97.9674 25.9387 98.1168 25.896C98.2661 25.8533 98.4208 25.8747 98.5807 25.96C99.0501 26.1947 99.4928 26.344 99.9088 26.408C100.335 26.4827 100.698 26.52 100.997 26.52C101.711 26.52 102.245 26.344 102.597 25.992C102.959 25.6507 103.141 25.1387 103.141 24.456V23.016H103.285C103.125 23.56 102.789 23.9973 102.277 24.328C101.775 24.648 101.205 24.808 100.565 24.808C99.8608 24.808 99.2474 24.648 98.7248 24.328C98.2021 23.9973 97.7968 23.5387 97.5088 22.952C97.2208 22.3653 97.0768 21.6827 97.0768 20.904C97.0768 20.3173 97.1568 19.7893 97.3168 19.32C97.4874 18.84 97.7221 18.4293 98.0208 18.088C98.3301 17.7467 98.6981 17.4853 99.1248 17.304C99.5621 17.112 100.042 17.016 100.565 17.016C101.226 17.016 101.802 17.1813 102.293 17.512C102.794 17.832 103.119 18.2587 103.269 18.792L103.109 19.192V18.056C103.109 17.7253 103.194 17.4747 103.365 17.304C103.546 17.1333 103.791 17.048 104.101 17.048C104.421 17.048 104.666 17.1333 104.837 17.304C105.007 17.4747 105.093 17.7253 105.093 18.056V24.216C105.093 25.4853 104.757 26.44 104.085 27.08C103.413 27.72 102.437 28.04 101.157 28.04ZM101.109 23.288C101.525 23.288 101.882 23.192 102.181 23C102.479 22.808 102.709 22.536 102.869 22.184C103.039 21.8213 103.125 21.3947 103.125 20.904C103.125 20.168 102.943 19.592 102.581 19.176C102.218 18.7493 101.727 18.536 101.109 18.536C100.693 18.536 100.335 18.632 100.037 18.824C99.7381 19.016 99.5034 19.288 99.3328 19.64C99.1728 19.992 99.0928 20.4133 99.0928 20.904C99.0928 21.64 99.2741 22.2213 99.6368 22.648C99.9994 23.0747 100.49 23.288 101.109 23.288ZM108.157 25.112C107.837 25.112 107.592 25.016 107.421 24.824C107.25 24.632 107.165 24.3653 107.165 24.024V18.152C107.165 17.8 107.25 17.5333 107.421 17.352C107.592 17.16 107.837 17.064 108.157 17.064C108.477 17.064 108.722 17.16 108.893 17.352C109.074 17.5333 109.165 17.8 109.165 18.152V24.024C109.165 24.3653 109.08 24.632 108.909 24.824C108.738 25.016 108.488 25.112 108.157 25.112ZM108.157 15.576C107.784 15.576 107.49 15.4853 107.277 15.304C107.074 15.112 106.973 14.8507 106.973 14.52C106.973 14.1787 107.074 13.9173 107.277 13.736C107.49 13.5547 107.784 13.464 108.157 13.464C108.541 13.464 108.834 13.5547 109.037 13.736C109.24 13.9173 109.341 14.1787 109.341 14.52C109.341 14.8507 109.24 15.112 109.037 15.304C108.834 15.4853 108.541 15.576 108.157 15.576ZM114.811 25.16C114 25.16 113.296 24.9947 112.699 24.664C112.102 24.3333 111.638 23.864 111.307 23.256C110.976 22.6373 110.811 21.912 110.811 21.08C110.811 20.4507 110.902 19.8907 111.083 19.4C111.275 18.8987 111.547 18.472 111.899 18.12C112.251 17.7573 112.672 17.4853 113.163 17.304C113.654 17.112 114.203 17.016 114.811 17.016C115.622 17.016 116.326 17.1813 116.923 17.512C117.52 17.8427 117.984 18.312 118.315 18.92C118.646 19.528 118.811 20.248 118.811 21.08C118.811 21.7093 118.715 22.2747 118.523 22.776C118.342 23.2773 118.075 23.7093 117.723 24.072C117.371 24.424 116.95 24.696 116.459 24.888C115.968 25.0693 115.419 25.16 114.811 25.16ZM114.811 23.64C115.206 23.64 115.552 23.544 115.851 23.352C116.15 23.16 116.379 22.8773 116.539 22.504C116.71 22.12 116.795 21.6453 116.795 21.08C116.795 20.2267 116.614 19.592 116.251 19.176C115.888 18.7493 115.408 18.536 114.811 18.536C114.416 18.536 114.07 18.632 113.771 18.824C113.472 19.0053 113.238 19.288 113.067 19.672C112.907 20.0453 112.827 20.5147 112.827 21.08C112.827 21.9227 113.008 22.5627 113.371 23C113.734 23.4267 114.214 23.64 114.811 23.64ZM114.811 16.264C114.619 16.264 114.47 16.2267 114.363 16.152C114.256 16.0773 114.203 15.9707 114.203 15.832C114.203 15.5973 114.246 15.4053 114.331 15.256C114.427 15.096 114.534 14.9627 114.651 14.856C114.768 14.7387 114.87 14.632 114.955 14.536C115.051 14.4293 115.099 14.3067 115.099 14.168C115.099 14.0293 115.046 13.928 114.939 13.864C114.832 13.8 114.672 13.768 114.459 13.768C114.374 13.768 114.283 13.7733 114.187 13.784C114.091 13.7947 113.99 13.816 113.883 13.848C113.702 13.9013 113.558 13.9173 113.451 13.896C113.355 13.864 113.28 13.7787 113.227 13.64C113.174 13.4907 113.168 13.3627 113.211 13.256C113.264 13.1387 113.382 13.0427 113.563 12.968C113.755 12.8933 113.963 12.84 114.187 12.808C114.422 12.776 114.662 12.76 114.907 12.76C115.44 12.76 115.856 12.8613 116.155 13.064C116.464 13.256 116.619 13.5387 116.619 13.912C116.619 14.1787 116.555 14.3973 116.427 14.568C116.31 14.728 116.171 14.8667 116.011 14.984C115.862 15.1013 115.723 15.2293 115.595 15.368C115.478 15.496 115.419 15.6613 115.419 15.864C115.419 15.992 115.366 16.0933 115.259 16.168C115.163 16.232 115.014 16.264 114.811 16.264Z" fill="#FCFCFC"/><path d="M130.286 13H143.725C145.09 13 146.054 14.3374 145.623 15.6325L143.956 20.6325C143.684 21.4491 142.919 22 142.058 22H131.571M130.286 13L130.245 12.7172C130.105 11.7319 129.261 11 128.265 11H127.5M130.286 13L131.571 22M131.571 22L131.755 23.2828C131.895 24.2681 132.739 25 133.735 25H142.5M142.5 25C141.395 25 140.5 25.8954 140.5 27C140.5 28.1046 141.395 29 142.5 29C143.605 29 144.5 28.1046 144.5 27C144.5 25.8954 143.605 25 142.5 25ZM136.5 27C136.5 28.1046 135.605 29 134.5 29C133.395 29 132.5 28.1046 132.5 27C132.5 25.8954 133.395 25 134.5 25C135.605 25 136.5 25.8954 136.5 27Z" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_1439_5622" x1="7.30435" y1="-6.36364" x2="73.797" y2="102.471" gradientUnits="userSpaceOnUse"><stop stop-color="#6AC9FF"/><stop offset="0.5" stop-color="#4E6AFF"/><stop offset="1" stop-color="#6AC9FF"/></linearGradient></defs></svg>`} />
        )
    }

    const buyNowIcon = () => {
        return (
            <SvgXml xml={`<svg width="168" height="40" viewBox="0 0 168 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="168" height="40" rx="12" fill="url(#paint0_linear_1439_5620)"/><path d="M34.692 25.128C34.3933 25.128 34.164 25.0427 34.004 24.872C33.844 24.7013 33.764 24.4667 33.764 24.168V14.552C33.764 14.2427 33.8493 14.008 34.02 13.848C34.1907 13.6773 34.4253 13.592 34.724 13.592C34.9907 13.592 35.1987 13.6453 35.348 13.752C35.508 13.848 35.652 14.0187 35.78 14.264L39.732 21.576H39.22L43.172 14.264C43.3 14.0187 43.4387 13.848 43.588 13.752C43.7373 13.6453 43.9453 13.592 44.212 13.592C44.5107 13.592 44.74 13.6773 44.9 13.848C45.06 14.008 45.14 14.2427 45.14 14.552V24.168C45.14 24.4667 45.06 24.7013 44.9 24.872C44.7507 25.0427 44.5213 25.128 44.212 25.128C43.9133 25.128 43.684 25.0427 43.524 24.872C43.364 24.7013 43.284 24.4667 43.284 24.168V16.76H43.636L40.276 22.888C40.1693 23.0693 40.0573 23.2027 39.94 23.288C39.8227 23.3733 39.6627 23.416 39.46 23.416C39.2573 23.416 39.092 23.3733 38.964 23.288C38.836 23.192 38.724 23.0587 38.628 22.888L35.236 16.744H35.62V24.168C35.62 24.4667 35.54 24.7013 35.38 24.872C35.2307 25.0427 35.0013 25.128 34.692 25.128ZM50.2626 25.16C49.612 25.16 49.0733 25.0427 48.6466 24.808C48.22 24.5627 47.9 24.2 47.6866 23.72C47.484 23.24 47.3826 22.6427 47.3826 21.928V18.056C47.3826 17.7147 47.468 17.464 47.6386 17.304C47.8093 17.1333 48.0546 17.048 48.3746 17.048C48.6946 17.048 48.94 17.1333 49.1106 17.304C49.292 17.464 49.3826 17.7147 49.3826 18.056V21.96C49.3826 22.5147 49.4946 22.9253 49.7186 23.192C49.9426 23.4587 50.3 23.592 50.7906 23.592C51.324 23.592 51.7613 23.4107 52.1026 23.048C52.444 22.6747 52.6146 22.184 52.6146 21.576V18.056C52.6146 17.7147 52.7 17.464 52.8706 17.304C53.0413 17.1333 53.2866 17.048 53.6066 17.048C53.9266 17.048 54.172 17.1333 54.3426 17.304C54.524 17.464 54.6146 17.7147 54.6146 18.056V24.104C54.6146 24.7867 54.2893 25.128 53.6386 25.128C53.3293 25.128 53.0893 25.0427 52.9186 24.872C52.748 24.6907 52.6626 24.4347 52.6626 24.104V22.888L52.8866 23.368C52.6626 23.944 52.3213 24.3867 51.8626 24.696C51.4146 25.0053 50.8813 25.16 50.2626 25.16ZM59.2723 25.16C58.7069 25.16 58.2003 25.0533 57.7523 24.84C57.3149 24.616 56.9683 24.3173 56.7122 23.944C56.4669 23.5707 56.3443 23.1493 56.3443 22.68C56.3443 22.104 56.4936 21.6507 56.7923 21.32C57.0909 20.9787 57.5763 20.7333 58.2483 20.584C58.9203 20.4347 59.8216 20.36 60.9523 20.36H61.7523V21.512H60.9683C60.3069 21.512 59.7789 21.544 59.3843 21.608C58.9896 21.672 58.7069 21.784 58.5363 21.944C58.3763 22.0933 58.2963 22.3067 58.2963 22.584C58.2963 22.936 58.4189 23.224 58.6643 23.448C58.9096 23.672 59.2509 23.784 59.6883 23.784C60.0403 23.784 60.3496 23.704 60.6163 23.544C60.8936 23.3733 61.1123 23.144 61.2723 22.856C61.4323 22.568 61.5123 22.2373 61.5123 21.864V20.024C61.5123 19.4907 61.3949 19.1067 61.1603 18.872C60.9256 18.6373 60.5309 18.52 59.9763 18.52C59.6669 18.52 59.3309 18.5573 58.9683 18.632C58.6163 18.7067 58.2429 18.8347 57.8483 19.016C57.6456 19.112 57.4643 19.1387 57.3043 19.096C57.1549 19.0533 57.0376 18.968 56.9523 18.84C56.8669 18.7013 56.8243 18.552 56.8243 18.392C56.8243 18.232 56.8669 18.0773 56.9523 17.928C57.0376 17.768 57.1816 17.6507 57.3843 17.576C57.8749 17.3733 58.3443 17.2293 58.7923 17.144C59.2509 17.0587 59.6669 17.016 60.0403 17.016C60.8083 17.016 61.4376 17.1333 61.9283 17.368C62.4296 17.6027 62.8029 17.96 63.0483 18.44C63.2936 18.9093 63.4163 19.5173 63.4163 20.264V24.104C63.4163 24.4347 63.3363 24.6907 63.1763 24.872C63.0163 25.0427 62.7869 25.128 62.4883 25.128C62.1896 25.128 61.9549 25.0427 61.7843 24.872C61.6243 24.6907 61.5443 24.4347 61.5443 24.104V23.336H61.6723C61.5976 23.7093 61.4483 24.0347 61.2243 24.312C61.0109 24.5787 60.7389 24.7867 60.4083 24.936C60.0776 25.0853 59.6989 25.16 59.2723 25.16ZM70.782 25.128C70.462 25.128 70.2167 25.0427 70.046 24.872C69.8753 24.6907 69.79 24.4347 69.79 24.104V18.056C69.79 17.7253 69.8753 17.4747 70.046 17.304C70.2167 17.1333 70.4567 17.048 70.766 17.048C71.0753 17.048 71.3153 17.1333 71.486 17.304C71.6567 17.4747 71.742 17.7253 71.742 18.056V19.144L71.566 18.744C71.8007 18.1787 72.1633 17.752 72.654 17.464C73.1553 17.1653 73.7207 17.016 74.35 17.016C74.9793 17.016 75.4967 17.1333 75.902 17.368C76.3073 17.6027 76.6113 17.96 76.814 18.44C77.0167 18.9093 77.118 19.5067 77.118 20.232V24.104C77.118 24.4347 77.0327 24.6907 76.862 24.872C76.6913 25.0427 76.446 25.128 76.126 25.128C75.806 25.128 75.5553 25.0427 75.374 24.872C75.2033 24.6907 75.118 24.4347 75.118 24.104V20.328C75.118 19.72 75.0007 19.2773 74.766 19C74.542 18.7227 74.19 18.584 73.71 18.584C73.1233 18.584 72.654 18.7707 72.302 19.144C71.9607 19.5067 71.79 19.992 71.79 20.6V24.104C71.79 24.7867 71.454 25.128 70.782 25.128ZM82.7974 28.04C82.2214 28.04 81.6614 27.9867 81.1174 27.88C80.584 27.7733 80.0987 27.608 79.6614 27.384C79.4587 27.2773 79.32 27.1493 79.2454 27C79.1814 26.8507 79.16 26.696 79.1814 26.536C79.2134 26.3867 79.2774 26.2533 79.3734 26.136C79.48 26.0187 79.608 25.9387 79.7574 25.896C79.9067 25.8533 80.0614 25.8747 80.2214 25.96C80.6907 26.1947 81.1334 26.344 81.5494 26.408C81.976 26.4827 82.3387 26.52 82.6374 26.52C83.352 26.52 83.8854 26.344 84.2374 25.992C84.6 25.6507 84.7814 25.1387 84.7814 24.456V23.016H84.9254C84.7654 23.56 84.4294 23.9973 83.9174 24.328C83.416 24.648 82.8454 24.808 82.2054 24.808C81.5014 24.808 80.888 24.648 80.3654 24.328C79.8427 23.9973 79.4374 23.5387 79.1494 22.952C78.8614 22.3653 78.7174 21.6827 78.7174 20.904C78.7174 20.3173 78.7974 19.7893 78.9574 19.32C79.128 18.84 79.3627 18.4293 79.6614 18.088C79.9707 17.7467 80.3387 17.4853 80.7654 17.304C81.2027 17.112 81.6827 17.016 82.2054 17.016C82.8667 17.016 83.4427 17.1813 83.9334 17.512C84.4347 17.832 84.76 18.2587 84.9094 18.792L84.7494 19.192V18.056C84.7494 17.7253 84.8347 17.4747 85.0054 17.304C85.1867 17.1333 85.432 17.048 85.7414 17.048C86.0614 17.048 86.3067 17.1333 86.4774 17.304C86.648 17.4747 86.7334 17.7253 86.7334 18.056V24.216C86.7334 25.4853 86.3974 26.44 85.7254 27.08C85.0534 27.72 84.0774 28.04 82.7974 28.04ZM82.7494 23.288C83.1654 23.288 83.5227 23.192 83.8214 23C84.12 22.808 84.3494 22.536 84.5094 22.184C84.68 21.8213 84.7654 21.3947 84.7654 20.904C84.7654 20.168 84.584 19.592 84.2214 19.176C83.8587 18.7493 83.368 18.536 82.7494 18.536C82.3334 18.536 81.976 18.632 81.6774 18.824C81.3787 19.016 81.144 19.288 80.9734 19.64C80.8134 19.992 80.7334 20.4133 80.7334 20.904C80.7334 21.64 80.9147 22.2213 81.2774 22.648C81.64 23.0747 82.1307 23.288 82.7494 23.288ZM91.3816 25.16C90.8163 25.16 90.3096 25.0533 89.8616 24.84C89.4243 24.616 89.0776 24.3173 88.8216 23.944C88.5763 23.5707 88.4536 23.1493 88.4536 22.68C88.4536 22.104 88.603 21.6507 88.9016 21.32C89.2003 20.9787 89.6856 20.7333 90.3576 20.584C91.0296 20.4347 91.931 20.36 93.0616 20.36H93.8616V21.512H93.0776C92.4163 21.512 91.8883 21.544 91.4936 21.608C91.099 21.672 90.8163 21.784 90.6456 21.944C90.4856 22.0933 90.4056 22.3067 90.4056 22.584C90.4056 22.936 90.5283 23.224 90.7736 23.448C91.019 23.672 91.3603 23.784 91.7976 23.784C92.1496 23.784 92.459 23.704 92.7256 23.544C93.003 23.3733 93.2216 23.144 93.3816 22.856C93.5416 22.568 93.6216 22.2373 93.6216 21.864V20.024C93.6216 19.4907 93.5043 19.1067 93.2696 18.872C93.035 18.6373 92.6403 18.52 92.0856 18.52C91.7763 18.52 91.4403 18.5573 91.0776 18.632C90.7256 18.7067 90.3523 18.8347 89.9576 19.016C89.755 19.112 89.5736 19.1387 89.4136 19.096C89.2643 19.0533 89.147 18.968 89.0616 18.84C88.9763 18.7013 88.9336 18.552 88.9336 18.392C88.9336 18.232 88.9763 18.0773 89.0616 17.928C89.147 17.768 89.291 17.6507 89.4936 17.576C89.9843 17.3733 90.4536 17.2293 90.9016 17.144C91.3603 17.0587 91.7763 17.016 92.1496 17.016C92.9176 17.016 93.547 17.1333 94.0376 17.368C94.539 17.6027 94.9123 17.96 95.1576 18.44C95.403 18.9093 95.5256 19.5173 95.5256 20.264V24.104C95.5256 24.4347 95.4456 24.6907 95.2856 24.872C95.1256 25.0427 94.8963 25.128 94.5976 25.128C94.299 25.128 94.0643 25.0427 93.8936 24.872C93.7336 24.6907 93.6536 24.4347 93.6536 24.104V23.336H93.7816C93.707 23.7093 93.5576 24.0347 93.3336 24.312C93.1203 24.5787 92.8483 24.7867 92.5176 24.936C92.187 25.0853 91.8083 25.16 91.3816 25.16ZM99.4615 28.008C99.2268 28.008 99.0348 27.944 98.8855 27.816C98.7362 27.6987 98.6455 27.5387 98.6135 27.336C98.5922 27.1333 98.6295 26.92 98.7255 26.696L99.8135 24.28V25.112L96.9015 18.376C96.8055 18.1413 96.7735 17.9227 96.8055 17.72C96.8375 17.5173 96.9335 17.3573 97.0935 17.24C97.2642 17.112 97.4935 17.048 97.7815 17.048C98.0268 17.048 98.2242 17.1067 98.3735 17.224C98.5228 17.3307 98.6562 17.5387 98.7735 17.848L100.934 23.24H100.454L102.662 17.832C102.779 17.5333 102.918 17.3307 103.078 17.224C103.238 17.1067 103.451 17.048 103.718 17.048C103.952 17.048 104.139 17.112 104.278 17.24C104.416 17.3573 104.502 17.5173 104.534 17.72C104.566 17.912 104.528 18.1253 104.422 18.36L100.534 27.24C100.395 27.5387 100.246 27.7413 100.086 27.848C99.9255 27.9547 99.7175 28.008 99.4615 28.008Z" fill="#FCFCFC"/><path d="M119.5 19V15C119.5 12.7909 121.291 11 123.5 11C125.709 11 127.5 12.7909 127.5 15V19M119.5 16H127.5C130.5 16 131.5 19.8899 131.5 21.5C131.5 27.5259 129.897 28.5 123.5 28.5C117.103 28.5 115.5 27.5259 115.5 21.5C115.5 19.8899 116.5 16 119.5 16Z" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_1439_5620" x1="7.30435" y1="-6.36364" x2="73.797" y2="102.471" gradientUnits="userSpaceOnUse"><stop stop-color="#FFD231"/><stop offset="0.5" stop-color="#FF834E"/><stop offset="1" stop-color="#F3C10C"/></linearGradient></defs></svg>`} />
        )
    }

    const MemorizedAddToCardIcon = useMemo(() => addToCartIcon(), [])
    const MemorizedBuyNowIcon = useMemo(() => buyNowIcon(), [])

    function addToCardFnc() {

    }

    return (
        <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
            <TopNav title={'Gian hàng'} returnPreScreen returnPreScreenFnc={() => { navigation.goBack() }} rightIcon={SVG.cart(vw(6), vw(6))} rightFnc={() => navigation.navigate('Cart' as never)} />
            <ScrollView style={[styles.flex1, styles.paddingH6vw, { marginBottom: -insets.bottom }]} contentContainerStyle={[styles.justifyContentCenter, styles.gap4vw]}>
                <Nunito18Bold>{route.params.product.name}</Nunito18Bold>
                <ViewRow style={[styles.gap6vw]}>
                    <Image source={route.params.product.img[0]} resizeMode='contain' resizeMethod='resize' style={[styles.w40vw, styles.h100, styles.borderRadius4vw, styles.bgcolorWhite] as ImageStyle} />
                    <ViewCol style={[styles.gap2vw,]}>
                        <ViewRow style={[styles.w100]}>
                            <ViewCol style={[styles.gap1vw,]}>
                                <Nunito12Reg style={[styles.flex1]} color={clrStyle.grey1}>Lượt mua: </Nunito12Reg>
                                <Nunito12Reg style={[styles.flex1]} color={clrStyle.grey1}>Đánh giá: </Nunito12Reg>
                                <Nunito12Reg style={[styles.flex1]} color={clrStyle.grey1}>Giao hàng: </Nunito12Reg>
                                <Nunito12Reg style={[styles.flex1]} color={clrStyle.grey1}>H.thức t.toán: </Nunito12Reg>
                            </ViewCol>
                            <ViewCol style={[styles.gap1vw,]}>
                                <Nunito12Bold style={[styles.textLeft]} color={clrStyle.black}>{route.params.product.buyCount > 1000 ? `${(route.params.product.buyCount / 1000).toFixed(1)}k+` : route.params.product.buyCount || '--'}</Nunito12Bold>
                                <ViewRowStartCenter style={[styles.w100]}>
                                    <Nunito12Bold style={[styles.textLeft]} color={clrStyle.black}>{route.params.product.rate.toFixed(1) || '--'} /5 </Nunito12Bold>
                                    <SvgXml xml={`<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.54894 0.927052C4.8483 0.00574136 6.1517 0.0057404 6.45106 0.927051L6.95934 2.49139C7.09321 2.90341 7.47717 3.18237 7.9104 3.18237H9.55524C10.524 3.18237 10.9267 4.42199 10.143 4.99139L8.81232 5.9582C8.46183 6.21285 8.31518 6.66422 8.44905 7.07624L8.95733 8.64058C9.25669 9.56189 8.20221 10.328 7.41849 9.75861L6.08779 8.7918C5.7373 8.53715 5.2627 8.53715 4.91221 8.7918L3.58151 9.75861C2.7978 10.328 1.74331 9.56189 2.04267 8.64058L2.55095 7.07624C2.68483 6.66422 2.53817 6.21285 2.18768 5.9582L0.856976 4.99139C0.0732617 4.42199 0.476037 3.18237 1.44476 3.18237H3.0896C3.52283 3.18237 3.90678 2.90341 4.04066 2.49139L4.54894 0.927052Z" fill="url(#paint0_linear_2130_3067)"/><defs><linearGradient id="paint0_linear_2130_3067" x1="5.5" y1="-2" x2="5.5" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="#EEBA00"/><stop offset="1" stop-color="#FFEC40"/></linearGradient></defs></svg>`} />
                                </ViewRowStartCenter>
                                <Nunito12Bold style={[styles.textLeft]} color={clrStyle.black}>Tiêu chuẩn</Nunito12Bold>
                                <Nunito12Bold style={[styles.textLeft]} color={clrStyle.black}>COD</Nunito12Bold>
                            </ViewCol>
                        </ViewRow>

                        <ViewRowStartCenter style={[styles.flexWrap, styles.marginVertical2vw]}>
                            <Nunito12Reg style={[]} color={clrStyle.grey1}>S.lượng: </Nunito12Reg>
                            <ViewRow>
                                <TouchableOpacity onPress={() => { setNumberItems(numberItems > 1 ? numberItems - 1 : 1) }}>
                                    <SvgXml xml={`<svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_2130_751)"><rect x="6" y="5.5" width="28" height="28" rx="14" fill="#FCFCFC" shape-rendering="crispEdges"/><path d="M12 19.5H28" stroke="#808797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_d_2130_751" x="0" y="0.5" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="2"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.276839 0 0 0 0 0.276839 0 0 0 0 0.276839 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2130_751"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2130_751" result="shape"/></filter></defs></svg>`} />
                                </TouchableOpacity>
                                <Nunito20Bold color={clrStyle.grey1} style={[styles.marginHorizontal1vw, { fontSize: vw(6.5) }]}>{numberItems}</Nunito20Bold>
                                <TouchableOpacity onPress={() => { setNumberItems(numberItems + 1) }}>
                                    <SvgXml xml={`<svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_2130_755)"><rect x="6" y="5.5" width="28" height="28" rx="14" fill="#FCFCFC" shape-rendering="crispEdges"/><path d="M12 19.5H28M20 11.5V27.5" stroke="#808797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_d_2130_755" x="0" y="0.5" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="2"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.276839 0 0 0 0 0.276839 0 0 0 0 0.276839 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2130_755"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2130_755" result="shape"/></filter></defs></svg>`} />
                                </TouchableOpacity>
                            </ViewRow>
                        </ViewRowStartCenter>

                        <TouchableOpacity onPress={addToCardFnc}>
                            {MemorizedAddToCardIcon}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Alert.alert('Tính năng đang phát triển') }}>
                            {MemorizedBuyNowIcon}
                        </TouchableOpacity>
                    </ViewCol>
                </ViewRow>

                <Nunito18Bold>Mô tả sản phẩm</Nunito18Bold>
                {ListGen([styles.paddingBottom2vw, styles.textJustify], route.params.product.info, Nunito16Bold, clrStyle.grey1, '', Nunito14Reg, clrStyle.grey1, '+', vw(4))}
            </ScrollView>
        </SSBarWithSaveArea>
    )
}