import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { BannerSliderWithCenter, NotiBanner, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav, ViewCol, ViewColBetweenCenter, ViewRow, ViewRowBetweenCenter, ViewRowCenter } from '../assets/Class'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { iconCodeList, iconRequireList, treeData } from '../data/factoryData'
import { marginBottomForScrollView } from '../assets/component'
import { CareActivity, TreeData } from '../data/interfaceFormat'
import { storageGetList } from '../data/storageFunc'
export default function CareDetail({ route }: any) {
    const navigation = useNavigation()

    const [careHistory, setCareHistory] = useState<CareActivity[]>([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            storageGetList('careHistory').then((res) => {
                if (res && res.length > 0) {
                    let result = res.filter((item: CareActivity) => item.targetId === `my-${route.params?.tree?.name.replace(/\s/g, '-').toLowerCase()}`)
                }
            })
        })
    }, [navigation])

    return (
        <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
            <TopNav title='Cây trồng của bạn' returnPreScreen returnPreScreenFnc={navigation.goBack} rightIcon={SVG.addTo(vw(6), vw(6), clrStyle.grey1)} />
            <Nunito14Bold style={[styles.textCenter, styles.marginBottom4vw, { color: clrStyle.grey1 }]}>{route.params.tree.name}</Nunito14Bold>
            <ScrollView style={[styles.paddingH6vw, styles.flex1]} contentContainerStyle={[styles.gap4vw]}>
                <Image source={route.params.tree.img} resizeMode='cover' resizeMethod='resize' style={[styles.w100, styles.h50vw, styles.borderRadius10] as ImageStyle} />
                <ViewRowBetweenCenter>
                    <TouchableOpacity style={[styles.justifyContentCenter, styles.padding4vw, styles.borderRadius4vw, styles.bgcolorWhite, styles.flexColCenter, styles.gap2vw]}>
                        {SVG.wateringYellow(vw(16), vw(16))}
                        <Nunito12Bold style={[styles.textCenter]}>Tưới cây</Nunito12Bold>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.justifyContentCenter, styles.padding4vw, styles.borderRadius4vw, styles.bgcolorWhite, styles.flexColCenter, styles.gap2vw]}>
                        {SVG.manure(vw(16), vw(16))}
                        <Nunito12Bold style={[styles.textCenter]}>Bón phân</Nunito12Bold>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.justifyContentCenter, styles.padding4vw, styles.borderRadius4vw, styles.bgcolorWhite, styles.flexColCenter, styles.gap2vw]}>
                        {SVG.changeMug(vw(16), vw(16))}
                        <Nunito12Bold style={[styles.textCenter]}>Chăm sóc khác</Nunito12Bold>
                    </TouchableOpacity>
                </ViewRowBetweenCenter>
            </ScrollView>
        </SSBarWithSaveArea>
    )
}