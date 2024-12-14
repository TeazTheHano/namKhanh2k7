import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BannerSliderWithCenter, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav, ViewCol, ViewColBetweenCenter, ViewRow, ViewRowBetweenCenter, ViewRowCenter } from '../assets/Class'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { iconCodeList, iconRequireList, treeData } from '../data/factoryData'

export default function ListView() {
  const navigation = useNavigation();

  const [CurrentCache, dispatch] = React.useContext(RootContext);


  return (
    <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
      <TopNav title='Thư viện cây trồng' returnPreScreen returnPreScreenFnc={navigation.goBack} rightIcon={SVG.searchIcon(vw(6), vw(6), clrStyle.grey1)} />
      {treeData.length > 0 ?
        <FlatList
          data={treeData}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity key={index} onPress={() => { navigation.navigate('TreeDetail', { tree: item }) }}
                style={[styles.borderRadius10, styles.bgcolorWhite, styles.w100, styles.flexRow, styles.padding4vw, styles.gap4vw]}>

                <Image source={item.img} resizeMode='cover' resizeMethod='resize' style={[styles.w30vw, styles.h30vw, styles.borderRadius10] as ImageStyle} />
                <ViewCol style={[styles.gap1vw, styles.flex1]}>
                  <Nunito18Bold lineNumber={2} color={clrStyle.main2}>{item.name}</Nunito18Bold>
                  <ViewCol style={[styles.flex1, { borderTopWidth: 1, borderColor: clrStyle.grey2 }]}>
                    <ViewRow style={[styles.justifyContentSpaceBetween]}>
                      <Nunito12Reg>Mức độ chăm sóc:</Nunito12Reg>
                      <Nunito12Bold style={[styles.flex1, styles.textRight]} color={item.careRate.trim().toLowerCase() == 'dễ' ? clrStyle.main2 : item.careRate.trim().toLowerCase() == 'trung bình' ? clrStyle.main3 : clrStyle.main6}>{item.careRate.trim() || '--'}</Nunito12Bold>
                    </ViewRow>
                    <ViewRow style={[styles.justifyContentSpaceBetween]}>
                      <Nunito12Reg>Th.gian trưởng thành:</Nunito12Reg>
                      <Nunito12Bold style={[styles.flex1, styles.textRight]} color={clrStyle.black}>{item.grownTime.trim() || '--'}</Nunito12Bold>
                    </ViewRow>
                    <ViewRow style={[styles.justifyContentSpaceBetween]}>
                      <Nunito12Reg>Tần suất chăm sóc:</Nunito12Reg>
                      <Nunito12Bold style={[styles.flex1, styles.textRight]} color={clrStyle.black}>{item.careFreq.trim() || '--'}</Nunito12Bold>
                    </ViewRow>
                  </ViewCol>
                </ViewCol>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.gap4vw]}
          style={[styles.alignSelfCenter, styles.paddingH6vw, styles.w100]}
        /> :
        <Nunito14Bold style={[styles.padding2vw]}>Chưa có cây trồng</Nunito14Bold>}
    </SSBarWithSaveArea>
  )
}