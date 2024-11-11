import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { getUser } from '../data/storageFunc'
import { BannerSliderWithCenter, SaveViewWithColorStatusBar, SSBar, TopNav } from '../assets/Class'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import { curveRightArrow, searchIcon } from '../assets/svgXml'

import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { avatarComponet, marginBottomForScrollView } from '../assets/component'
import { RootContext } from '../data/store'

export default function Home() {
  const navigation = useNavigation();

  const [CurrentCache, dispatch] = React.useContext(RootContext);

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      console.log(CurrentCache.user);

    })
    return unsub
  }, [navigation])



  return (
    <SSBar barContentStyle='dark-content' notMargin barColor={clrStyle.main1} bgColor={clrStyle.main1} >
      <TopNav title='Home' />
      <ScrollView style={[styles.flex1, {}]}>

      </ScrollView>
    </SSBar>
  )
}