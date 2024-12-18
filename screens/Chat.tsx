import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert, TextInput } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BannerSliderWithCenter, RoundBtn, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav, ViewCol, ViewColBetweenCenter, ViewColCenter, ViewRow, ViewRowBetweenCenter, ViewRowCenter, ViewRowEvenlyCenter, ViewRowStartCenter } from '../assets/Class'
import { Nunito10Reg, Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { iconCodeList, iconRequireList, ProUserList, treeData } from '../data/factoryData'
import { marginBottomForScrollView } from '../assets/component'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Chat({ route }: any) {
    const navigation = useNavigation();
    const inset = useSafeAreaInsets();
    const item = route.params.user

    const [message, setMessage] = useState<string>('')

    return (
        <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
            <TopNav title='Hỏi đáp' returnPreScreen returnPreScreenFnc={() => { navigation.goBack() }} rightIcon={SVG.bellStroke(vw(6), vw(6))} rightFnc={() => { }} />

            <ViewRowBetweenCenter style={[styles.paddingH4vw, styles.gap2vw, styles.bgcolorWhite, styles.borderRadius3vw, styles.padding3vw]}>
                {
                    item.sex == 'male' ?
                        <Image source={require('../assets/photos/male.png')} style={[styles.borderRadius100, { width: vw(18), height: vw(18) }] as ImageStyle} />
                        : <Image source={require('../assets/photos/female.png')} style={[styles.borderRadius100, { width: vw(18), height: vw(18) }] as ImageStyle} />
                }
                <ViewCol style={[styles.flex1, styles.gap1vw]}>
                    <Nunito16Bold>{item.name}</Nunito16Bold>
                    <Nunito14Reg>{item.role}</Nunito14Reg>
                    <ViewRowStartCenter>
                        <View style={[styles.marginRight2vw, styles.borderRadius100, { width: vw(2), height: vw(2), backgroundColor: clrStyle.grey1 }]} />
                        <Nunito12Reg>Ngoại tuyến</Nunito12Reg>
                    </ViewRowStartCenter>
                </ViewCol>

                <ViewColCenter style={[]}>
                    {
                        item.pro == 'tree1' ?
                            <>
                                <Image source={require('../assets/photos/tree1.png')} style={[styles.borderRadius3vw, { width: vw(14), height: vw(14) }] as ImageStyle} />
                                <Nunito12Reg color={clrStyle.grey1}>Cây cảnh</Nunito12Reg>
                            </>
                            : item.pro == 'tree2' ?
                                <>
                                    <Image source={require('../assets/photos/tree2.png')} style={[styles.borderRadius3vw, { width: vw(14), height: vw(14) }] as ImageStyle} />
                                    <Nunito12Reg color={clrStyle.grey1}>Lương thực</Nunito12Reg>
                                </>
                                :
                                <>
                                    <Image source={require('../assets/photos/tree3.png')} style={[styles.borderRadius3vw, { width: vw(14), height: vw(14) }] as ImageStyle} />
                                    <Nunito12Reg color={clrStyle.grey1}>Cây hoa</Nunito12Reg>
                                </>
                    }
                </ViewColCenter>
            </ViewRowBetweenCenter>

            <ViewRowCenter style={[styles.flex1]}>
                <Nunito16Bold style={[styles.textCenter, styles.paddingH6vw]}>Chuyên gia này hiện đang ngoại tuyến. Tính năng nhắn tin tạm thời bị vô hiệu</Nunito16Bold>
            </ViewRowCenter>

            <ViewRowBetweenCenter style={[styles.w100, styles.padding6vw, styles.bgcolorWhite, styles.gap2vw]}>
                <TouchableOpacity style={[styles.padding2vw, styles.border1, styles.borderRadius2vw, { borderColor: clrStyle.grey2 }]}>
                    {SVG.micro(vw(6), vw(6))}
                </TouchableOpacity>
                <TouchableOpacity style={[styles.padding2vw, styles.border1, styles.borderRadius2vw, { borderColor: clrStyle.grey2 }]}>
                    {SVG.imgInsert(vw(6), vw(6))}
                </TouchableOpacity>
                <TextInput
                    value={message}
                    onChangeText={setMessage}
                    placeholder='Nhập ở đây'
                    enablesReturnKeyAutomatically
                    style={[styles.flex1, styles.h100, styles.paddingH3vw, styles.border1, styles.borderRadius2vw, { borderColor: clrStyle.grey2 }]}
                />
                <TouchableOpacity style={[styles.padding2vw, styles.border1, styles.borderRadius2vw, { borderColor: clrStyle.grey2 }]}>
                    {SVG.location(vw(6), vw(6))}
                </TouchableOpacity>
            </ViewRowBetweenCenter>
        </SSBarWithSaveArea>
    )
}