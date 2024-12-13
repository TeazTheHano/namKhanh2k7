import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { getStorageItem, getStorageList, getUser, saveStorageItem } from '../data/storageFunc'
import { BannerSliderWithCenter, NotiBanner, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav, ViewCol, ViewColBetweenCenter, ViewRow, ViewRowBetweenCenter, ViewRowCenter, ViewRowEvenlyCenter } from '../assets/Class'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { iconCodeList, iconRequireList, treeData } from '../data/factoryData'
import { CareActivity } from '../data/interfaceFormat'

export default function Noti() {
    const navigation = useNavigation();

    const [CurrentCache, dispatch] = React.useContext(RootContext);
    const [showingCate, setShowingCate] = useState(0);

    const noti: CareActivity[] = [
        {
            title: 'Tin tức 1',
            time: new Date(),
            targetId: ``
        },
        {
            title: 'Tin tức 2',
            time: new Date(),
            targetId: ``
        }
    ]
    return (
        <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
            <TopNav title='Thông báo' returnPreScreen returnPreScreenFnc={() => navigation.goBack()} />
            <ViewRowEvenlyCenter style={[styles.w90, styles.alignSelfCenter, { borderBottomWidth: 1, borderColor: clrStyle.grey2 }]}>
                <TouchableOpacity
                    onPress={() => { setShowingCate(0) }}
                    style={[styles.padding2vw, styles.flex1, { borderBottomColor: clrStyle.main2, borderBottomWidth: showingCate == 0 ? 2 : 0 }]}>
                    <Nunito16Bold style={[styles.textCenter]} color={showingCate == 0 ? clrStyle.main2 : clrStyle.grey1}>Lời nhắc</Nunito16Bold>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setShowingCate(1) }}
                    style={[styles.padding2vw, styles.flex1, { borderBottomColor: clrStyle.main2, borderBottomWidth: showingCate == 1 ? 2 : 0 }]}>
                    <Nunito16Bold style={[styles.textCenter]} color={showingCate == 1 ? clrStyle.main2 : clrStyle.grey1}>Tin tức</Nunito16Bold>
                </TouchableOpacity>
            </ViewRowEvenlyCenter>

            <View style={[styles.flex1, styles.bgcolorWhite, styles.marginHorizontal6vw, styles.marginVertical4vw, styles.borderRadius40, styles.padding4vw]}>
                {showingCate == 0 ?
                    <>
                        <Nunito14Bold style={[styles.margin2vw]}>Hôm nay</Nunito14Bold>
                        {
                            noti.length > 0 ?
                                < FlatList
                                    data={noti}
                                    renderItem={({ item, index }) => <NotiBanner title={item.title} time={item.time} />}
                                    keyExtractor={(item, index) => index.toString()}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={[styles.gap4vw]}
                                />
                                :
                                <Nunito14Reg style={[styles.textCenter, { color: clrStyle.grey1 }]}>Không có nội dung</Nunito14Reg>
                        }
                    </>
                    :
                    <Nunito14Reg style={[styles.textCenter, { color: clrStyle.grey1 }]}>Không có nội dung</Nunito14Reg>
                }
            </View>
        </SSBarWithSaveArea>
    )
}