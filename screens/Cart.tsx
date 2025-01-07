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

export default function Cart() {
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();
  const [CurrentCache, dispatch] = useContext(RootContext);

  return (
    <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
      <TopNav title='Giỏ hàng' returnPreScreen returnPreScreenFnc={navigation.goBack} />

      <ViewRowCenter style={[styles.flex1]}>
        <Nunito16Bold>Tính năng mua hàng hiện thời chưa khả dụng</Nunito16Bold>
      </ViewRowCenter>
    </SSBarWithSaveArea>
  )
}