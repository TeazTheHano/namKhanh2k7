import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { storageGetList, } from '../data/storageFunc'
import { BannerSliderWithCenter, NotiBanner, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav, ViewCol, ViewColBetweenCenter, ViewRow, ViewRowBetweenCenter, ViewRowCenter, ViewRowStartCenter } from '../assets/Class'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { iconCodeList, iconRequireList, treeData } from '../data/factoryData'
import { marginBottomForScrollView } from '../assets/component'
import { CareActivityFormat, TreeDataFormat } from '../data/interfaceFormat'
import { SvgXml } from 'react-native-svg'

export default function MyTreeList() {
  const navigation = useNavigation();

  const [CurrentCache, dispatch] = React.useContext(RootContext);

  const [showAllTree, setShowAllTree] = useState(false);
  const [showAllCare, setShowAllCare] = useState(false);

  const [myTree, setMyTree] = useState<TreeDataFormat[]>([]);

  const [nextCare, setNextCare] = useState<CareActivityFormat[]>([]);
  const [careHistory, setCareHistory] = useState<CareActivityFormat[]>([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      storageGetList('myTreeItem').then((res) => {
        if (res) {
          setMyTree(res)
        }
      })
      storageGetList('careHistoryItem').then((res) => {
        if (res) {
          setCareHistory(res)
          console.log(res);

        }
      })
    })
    return unsubscribe
  }, [navigation])

  const checkedIcon = () => <SvgXml xml={`<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7.5L9.00004 18.5L3.99994 13.5" stroke="#4A9300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`} />
  const MemorizedCheckedIcon = useMemo(() => checkedIcon(), [])

  const MYTREELIST = useMemo(() => {
    return (
      <ScrollView
        horizontal={!showAllTree}
        scrollEnabled={!showAllTree}
        style={[styles.w100, styles.paddingBottom4vw]}
        contentContainerStyle={[styles.gap4vw, styles.flexRow, styles.justifyContentSpaceBetween, { flexWrap: showAllTree ? 'wrap' : 'nowrap' }]}
      >
        {myTree.length > 0 ? myTree.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => { navigation.navigate('CareDetail', { tree: item }) }}
              style={[styles.borderRadius10, styles.bgcolorWhite, { width: showAllTree ? vw(42) : vw(35) }]}>
              <ViewCol >
                <Image source={item.img} resizeMode='cover' resizeMethod='resize' style={[styles.w100, styles.h25vw, styles.borderRadius10] as ImageStyle} />
                <Nunito14Bold style={[styles.padding2vw]}>{item.name}</Nunito14Bold>
                {/* <ViewRowBetweenCenter style={[styles.padding2vw, styles.wfit, styles.margin2vw, styles.borderRadius1vw, { backgroundColor: clrStyle.main5 }]}>
                {SVG.watering(vw(4), vw(4))}
                <Nunito12Reg>Cần tưới lúc </Nunito12Reg>
              </ViewRowBetweenCenter> */}
              </ViewCol>
            </TouchableOpacity>
          )
        }) : null}
      </ScrollView>
    )
  }, [navigation, myTree, showAllTree]);

  return (
    <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
      <TopNav
        title='Cây trồng của bạn'
        returnPreScreen
        returnPreScreenFnc={navigation.goBack}
        rightIcon={SVG.addTo(vw(6), vw(6), clrStyle.grey1)}
        rightFnc={() => { navigation.navigate('ListView' as never) }} />
      <Nunito14Bold style={[styles.textCenter, styles.marginBottom4vw, { color: clrStyle.grey1 }]}>Bạn có {myTree.length} cây trồng</Nunito14Bold>
      <ScrollView style={[styles.paddingH6vw, styles.flex1]} contentContainerStyle={[styles.gap4vw]}>
        <ViewRowBetweenCenter style={[styles.borderRadius3vw, styles.padding4vw, styles.paddingV2vw, styles.shadowW0H075Black, { backgroundColor: clrStyle.main1, }]}>
          <Nunito16Bold>Danh sách cây trồng</Nunito16Bold>
          <TouchableOpacity onPress={() => { setShowAllTree(!showAllTree) }}
            style={[styles.padding2vw, styles.paddingH3vw, styles.borderRadius2vw, styles.bgcolorWhite]}>
            <Nunito12Bold color={clrStyle.main3}>{showAllTree ? 'Ẩn bớt' : 'Xem thêm'}</Nunito12Bold>
          </TouchableOpacity>
        </ViewRowBetweenCenter>


        {MYTREELIST}

        <ViewRowBetweenCenter style={[styles.borderRadius3vw, styles.padding4vw, styles.paddingV2vw, styles.shadowW0H075Black, { backgroundColor: clrStyle.main1, }]}>
          <Nunito16Bold>Hoạt động chăm sóc</Nunito16Bold>
          <TouchableOpacity onPress={() => { setShowAllCare(!showAllCare) }}
            style={[styles.padding2vw, styles.paddingH3vw, styles.borderRadius2vw, styles.bgcolorWhite]}>
            <Nunito12Bold color={clrStyle.main3}>Xem lịch</Nunito12Bold>
          </TouchableOpacity>
        </ViewRowBetweenCenter>

        <Nunito14Bold style={[styles.margin2vw]}>Hôm nay</Nunito14Bold>
        {
          nextCare.length > 0 ?
            < FlatList
              data={nextCare.sort((a, b) => b.time - a.time)}
              renderItem={({ item, index }) => <NotiBanner title={item.title} time={item.time} treeName={item.treeName} />}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[styles.gap4vw]}
            />
            :
            <Nunito14Reg style={[styles.textCenter, { color: clrStyle.grey1 }]}>Không có nội dung</Nunito14Reg>
        }

        <Nunito14Bold style={[styles.margin2vw]}>Đã hoàn thành</Nunito14Bold>
        {
          careHistory.length > 0 ?
            <FlatList
              scrollEnabled={false}
              data={careHistory.sort((a, b) => b.time - a.time)}
              renderItem={({ item, index }) => {
                return (
                  <ViewRowStartCenter style={[styles.gap2vw]}>
                    {MemorizedCheckedIcon}
                    <NotiBanner title={item.title} time={item.time} treeName={item.treeName} />
                  </ViewRowStartCenter>
                )
              }}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[styles.gap4vw]}
            />
            :
            <Nunito14Reg style={[styles.textCenter, { color: clrStyle.grey1 }]}>Không có nội dung</Nunito14Reg>
        }

        {marginBottomForScrollView()}
      </ScrollView>
    </SSBarWithSaveArea >
  )
}