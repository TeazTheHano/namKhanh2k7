import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { BannerSliderWithCenter, NotiBanner, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav, ViewCol, ViewColBetweenCenter, ViewRow, ViewRowBetweenCenter, ViewRowCenter, ViewRowStartCenter } from '../assets/Class'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { iconCodeList, iconRequireList, treeData } from '../data/factoryData'
import { marginBottomForScrollView, saveCareActFnc } from '../assets/component'
import { CareActivityFormat, TreeDataFormat } from '../data/interfaceFormat'
import { storageGetAllIDfromKey, storageGetItem, storageGetList, storageSaveAndOverwrite } from '../data/storageFunc'
export default function CareDetail({ route }: any) {
    const navigation = useNavigation()

    const [careHistory, setCareHistory] = useState<CareActivityFormat[]>()

    let treeID = route.params?.tree?.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '')

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            storageGetList('careHistoryItem').then((res) => {
                if (res) {
                    const filtered = res.filter((item) => item.treeID === treeID)
                    setCareHistory(filtered)
                }
            })
        })
        return unsubscribe
    }, [navigation])

    async function careFnc(kind: string) {
        const data: CareActivityFormat = {
            title: kind,
            time: new Date().getTime(),
            treeID: treeID,
            treeName: route.params.tree.name,
            treeImg: route.params.tree.img
        }
        await saveCareActFnc('careHistoryItem', data, treeID, setCareHistory)
    }

    return (
        <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
            <TopNav
                title='Cây trồng của bạn'
                returnPreScreen
                returnPreScreenFnc={navigation.goBack}
                rightIcon={SVG.addTo(vw(6), vw(6), clrStyle.grey1)}
                rightFnc={() => { navigation.navigate('NewCare', { tree: route.params.tree, treeID: treeID }) }}
            />
            <Nunito14Bold style={[styles.textCenter, styles.marginBottom4vw, { color: clrStyle.grey1 }]}>{route.params.tree.name}</Nunito14Bold>
            <ScrollView style={[styles.paddingH6vw, styles.flex1]} contentContainerStyle={[styles.gap4vw]}>
                <Image source={route.params.tree.img} resizeMode='cover' resizeMethod='resize' style={[styles.w100, styles.h50vw, styles.borderRadius10] as ImageStyle} />
                <ViewRowBetweenCenter>
                    <TouchableOpacity
                        onPress={() => { careFnc('Tưới nước') }}
                        style={[styles.justifyContentCenter, styles.padding4vw, styles.borderRadius4vw, styles.bgcolorWhite, styles.flexColCenter, styles.gap2vw]}>
                        {SVG.wateringYellow(vw(16), vw(16))}
                        <Nunito12Bold style={[styles.textCenter]}>Tưới cây</Nunito12Bold>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { careFnc('Bón phân') }}
                        style={[styles.justifyContentCenter, styles.padding4vw, styles.borderRadius4vw, styles.bgcolorWhite, styles.flexColCenter, styles.gap2vw]}>
                        {SVG.manure(vw(16), vw(16))}
                        <Nunito12Bold style={[styles.textCenter]}>Bón phân</Nunito12Bold>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { careFnc('Chăm sóc khác') }}
                        style={[styles.justifyContentCenter, styles.padding4vw, styles.borderRadius4vw, styles.bgcolorWhite, styles.flexColCenter, styles.gap2vw]}>
                        {SVG.changeMug(vw(16), vw(16))}
                        <Nunito12Bold style={[styles.textCenter]}>Chăm sóc khác</Nunito12Bold>
                    </TouchableOpacity>
                </ViewRowBetweenCenter>

                <ViewRowBetweenCenter>
                    <Nunito16Bold>Hoạt động chăm sóc</Nunito16Bold>
                    <TouchableOpacity onPress={() => { }}
                        style={[styles.padding2vw, styles.paddingH3vw, styles.borderRadius2vw, styles.bgcolorWhite]}>
                        <Nunito12Bold color={clrStyle.main3}>Xem lịch</Nunito12Bold>
                    </TouchableOpacity>
                </ViewRowBetweenCenter>
                {
                    careHistory && careHistory.length > 0 ?
                        <FlatList
                            scrollEnabled={false}
                            data={careHistory.sort((a, b) => b.time - a.time)}
                            renderItem={({ item, index }) => {
                                console.log(item);
                                
                                return (
                                    <NotiBanner title={item.title} time={item.time} treeName={item.treeName} />
                                )
                            }}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={[styles.gap4vw]}
                        />
                        :
                        <Nunito14Reg style={[styles.textCenter, { color: clrStyle.grey1 }]}>Không có nội dung</Nunito14Reg>
                }
            </ScrollView>
        </SSBarWithSaveArea>
    )
}