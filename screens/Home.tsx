import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { getUser } from '../data/storageFunc'
import { BannerSliderWithCenter, SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import { curveRightArrow, searchIcon } from '../assets/svgXml'

import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { avatarComponet, marginBottomForScrollView } from '../assets/component'

export default function Home() {
  const navigation = useNavigation();

  const [currentBanner, setCurrentBanner] = useState<number>(0)
  const [userInfo, setUserInfo] = useState<any>(null)

  useEffect(() => {
    getUser().then((res) => {
      setUserInfo(res);
    })
  }, [userInfo])



  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}
    >
      <TopNav
        title='College Search'
        rightIcon={searchIcon(vw(6), vw(6), 'white')}
        rightFnc={() => navigation.navigate('Search' as never)}
      />
    </SaveViewWithColorStatusBar >
  )
}