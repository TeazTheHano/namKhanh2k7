import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BannerSliderWithCenter, RoundBtn, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav, ViewCol, ViewColBetweenCenter, ViewRow, ViewRowBetweenCenter, ViewRowCenter, ViewRowEvenlyCenter } from '../assets/Class'
import { Nunito12Bold, Nunito14Reg, Nunito14Bold, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { iconCodeList, iconRequireList, treeData } from '../data/factoryData'
import { ListGen, marginBottomForScrollView } from '../assets/component'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { storageAddToList, storageGetItem, storageGetList, storageRemove, storageSaveAndOverwrite } from '../data/storageFunc'

export default function TreeDetail({ route }: any) {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    const [CurrentCache, dispatch] = React.useContext(RootContext);
    const [isFav, setIsFav] = useState(false);

    const [showingCate, setShowingCate] = useState(0);

    let treeID = route.params?.tree?.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '')

    useEffect(() => {
        const checkFavTree = async () => {
            const res = await storageGetItem('favTreeItem', treeID);

            if (res) {
                setIsFav(true);
            }
        };
        const unsubscribe = navigation.addListener('focus', checkFavTree);

        return unsubscribe;
    }, [navigation, route.params?.tree?.name]);

    const addToFav = async () => {
        if (isFav) {
            setIsFav(false);
            await storageRemove('favTreeItem', treeID);
        } else {
            setIsFav(true);
            await storageSaveAndOverwrite('favTreeItem', route.params?.tree, treeID);
        }
    }

    const addToMyTree = async () => {
        const res = await storageGetItem('myTreeItem', treeID);
        if (res) {
            Alert.alert('Cây đã trong vườn của bạn rồi')
        } else {
            storageSaveAndOverwrite('myTreeItem', route.params?.tree, treeID).then((res) => {
                res ? Alert.alert('Thêm thành công') : Alert.alert('Vui lòng thử lại')
            })
        }
    }

    return (
        <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
            <TopNav title={route.params.tree.name || ''} returnPreScreen returnPreScreenFnc={navigation.goBack} rightIcon={SVG.addTo(vw(6), vw(6))} />
            <ScrollView style={[styles.flex1, styles.paddingH6vw, { marginBottom: -insets.bottom }]} contentContainerStyle={[styles.justifyContentCenter, styles.gap4vw]}>
                <Image source={route.params.tree.img} resizeMode='cover' resizeMethod='resize' style={[styles.w100, styles.h50vw, styles.borderRadius10] as ImageStyle} />
                <ViewRow style={[styles.border1, styles.borderRadius3vw, styles.padding4vw, styles.marginHorizontal10vw, { borderColor: clrStyle.grey2 }]}>
                    <ViewCol style={[styles.flex1]}>
                        <Nunito14Reg color={clrStyle.grey1}>Mức độ chăm sóc:</Nunito14Reg>
                        <Nunito14Reg color={clrStyle.grey1}>Th.gian trưởng thành:</Nunito14Reg>
                        <Nunito14Reg color={clrStyle.grey1}>Tần suất chăm sóc:</Nunito14Reg>
                    </ViewCol>
                    <ViewCol>
                        <Nunito14Bold style={[]} color={route.params.tree.careRate.trim().toLowerCase() == 'dễ' ? clrStyle.main2 : route.params.tree.careRate.trim().toLowerCase() == 'trung bình' ? clrStyle.main3 : clrStyle.main6}>{route.params.tree.careRate.trim() || '--'}</Nunito14Bold>
                        <Nunito14Bold style={[]} color={clrStyle.black}>{route.params.tree.grownTime.trim() || '--'}</Nunito14Bold>
                        <Nunito14Bold style={[]} color={clrStyle.black}>{route.params.tree.careFreq.trim() || '--'}</Nunito14Bold>
                    </ViewCol>
                </ViewRow>

                <ViewRowEvenlyCenter style={[{ borderBottomWidth: 1, borderColor: clrStyle.grey2 }]}>
                    <TouchableOpacity
                        onPress={() => { setShowingCate(0) }}
                        style={[styles.padding2vw, { borderBottomColor: clrStyle.main2, borderBottomWidth: showingCate == 0 ? 2 : 0 }]}>
                        <Nunito16Bold color={showingCate == 0 ? clrStyle.main2 : clrStyle.grey1}>Thông tin chung</Nunito16Bold>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setShowingCate(1) }}
                        style={[styles.padding2vw, { borderBottomColor: clrStyle.main2, borderBottomWidth: showingCate == 1 ? 2 : 0 }]}>
                        <Nunito16Bold color={showingCate == 1 ? clrStyle.main2 : clrStyle.grey1}>Chăm sóc</Nunito16Bold>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setShowingCate(2) }}
                        style={[styles.padding2vw, { borderBottomColor: clrStyle.main2, borderBottomWidth: showingCate == 2 ? 2 : 0 }]}>
                        <Nunito16Bold color={showingCate == 2 ? clrStyle.main2 : clrStyle.grey1}>Lịch trình</Nunito16Bold>
                    </TouchableOpacity>
                </ViewRowEvenlyCenter>

                {ListGen([styles.paddingBottom2vw], showingCate == 0 ? route.params.tree.description : showingCate == 1 ? route.params.tree.careDetail : route.params.tree.schedule, Nunito16Bold, clrStyle.black, '•', Nunito14Reg, clrStyle.grey1, '+', vw(4))}
                {marginBottomForScrollView()}
            </ScrollView>


            <ViewRowBetweenCenter key={'bottomBtn'} style={[styles.w100vw, styles.borderRadius10, styles.bgcolorWhite, styles.paddingH5vw, styles.gap4vw, { paddingTop: vw(6), paddingBottom: vw(6) + insets.bottom, zIndex: 1, transform: [{ translateY: insets.bottom }] }]}>
                <RoundBtn onPress={addToMyTree} title='Thêm cây vào vườn' bgColor={clrStyle.main2} customStyle={[styles.justifyContentCenter, styles.padding3vw, styles.flex1]} textClass={Nunito16Bold} textColor='white' />
                <TouchableOpacity onPress={addToFav}
                    style={[styles.justifyContentCenter, styles.padding3vw, styles.border1, styles.borderRadius10, { borderColor: clrStyle.grey2 }]}>
                    {SVG.heartFilled(vw(6), vw(6), isFav ? clrStyle.main6 : clrStyle.grey2)}
                </TouchableOpacity>
            </ViewRowBetweenCenter>
        </SSBarWithSaveArea>
    )
}