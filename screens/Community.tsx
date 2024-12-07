import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { getStorageItem, getStorageList, getUser, saveStorageItem } from '../data/storageFunc'
import { BannerSliderWithCenter, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav, ViewCol, ViewColBetweenCenter, ViewRow, ViewRowBetweenCenter, ViewRowCenter, ViewRowEvenlyCenter } from '../assets/Class'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { iconCodeList, iconRequireList, treeData } from '../data/factoryData'

export default function Community() {
  const navigation = useNavigation();

  const [CurrentCache, dispatch] = React.useContext(RootContext);
  const [showingCate, setShowingCate] = useState(0);


  return (
    <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
      <TopNav title='Cộng đồng' rightIcon={SVG.bellStroke(vw(6), vw(6))} rightFnc={() => navigation.navigate('Noti' as never)} />
      <ViewRowEvenlyCenter style={[styles.w90, styles.alignSelfCenter, { borderBottomWidth: 1, borderColor: clrStyle.grey2 }]}>
        <TouchableOpacity
          onPress={() => { setShowingCate(0) }}
          style={[styles.padding2vw, styles.flex1, { borderBottomColor: clrStyle.main2, borderBottomWidth: showingCate == 0 ? 2 : 0 }]}>
          <Nunito16Bold style={[styles.textCenter]} color={showingCate == 0 ? clrStyle.main2 : clrStyle.grey1}>Chuyên gia/ Hỗ trợ</Nunito16Bold>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { setShowingCate(1) }}
          style={[styles.padding2vw, styles.flex1, { borderBottomColor: clrStyle.main2, borderBottomWidth: showingCate == 1 ? 2 : 0 }]}>
          <Nunito16Bold style={[styles.textCenter]} color={showingCate == 1 ? clrStyle.main2 : clrStyle.grey1}>Bài viết</Nunito16Bold>
        </TouchableOpacity>
      </ViewRowEvenlyCenter>
    </SSBarWithSaveArea>
  )
}