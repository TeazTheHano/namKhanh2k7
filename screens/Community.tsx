import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert } from 'react-native'
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

      <ScrollView style={[styles.flex1]}>

        {showingCate == 0 ?
          <ViewCol style={[styles.w84vw, styles.alignSelfCenter, styles.marginTop4vw, styles.gap4vw]}>
            <ViewRowBetweenCenter style={[styles.borderRadius3vw, styles.padding4vw, styles.paddingV2vw, styles.shadowW0H075Black, { backgroundColor: clrStyle.main1, }]}>
              <ViewRowStartCenter>
                <View style={[styles.marginRight2vw, styles.borderRadius100, { width: vw(3), height: vw(3), backgroundColor: '#12E300' }]} />
                <Nunito16Bold>Trực tuyến (0)</Nunito16Bold>
              </ViewRowStartCenter>
              <TouchableOpacity onPress={() => { }}
                style={[styles.padding2vw, styles.paddingH3vw, styles.borderRadius2vw, styles.bgcolorWhite]}>
                <Nunito12Bold color={clrStyle.main3}>Xem thêm</Nunito12Bold>
              </TouchableOpacity>
            </ViewRowBetweenCenter>

            <ViewRowBetweenCenter style={[styles.borderRadius3vw, styles.padding4vw, styles.paddingV2vw, styles.shadowW0H075Black, { backgroundColor: clrStyle.main1, }]}>
              <ViewRowStartCenter>
                <View style={[styles.marginRight2vw, styles.borderRadius100, { width: vw(3), height: vw(3), backgroundColor: clrStyle.grey1 }]} />
                <Nunito16Bold>Ngoại tuyến ({ProUserList.length})</Nunito16Bold>
              </ViewRowStartCenter>
              <TouchableOpacity onPress={() => { }}
                style={[styles.padding2vw, styles.paddingH3vw, styles.borderRadius2vw, styles.bgcolorWhite]}>
                <Nunito12Bold color={clrStyle.main3}>Xem thêm</Nunito12Bold>
              </TouchableOpacity>
            </ViewRowBetweenCenter>

            {ProUserList.map((item, index) => {
              return (
                <ViewCol key={index} style={[styles.flex1, styles.gap2vw, styles.bgcolorWhite, styles.borderRadius3vw, styles.padding3vw]}>
                  <ViewRowBetweenCenter style={[styles.gap4vw]}>
                    {
                      item.sex == 'male' ?
                        <Image source={require('../assets/photos/male.png')} style={[styles.borderRadius100, { width: vw(18), height: vw(18) }] as ImageStyle} />
                        : <Image source={require('../assets/photos/female.png')} style={[styles.borderRadius100, { width: vw(18), height: vw(18) }] as ImageStyle} />
                    }
                    <ViewCol style={[styles.flex1, styles.gap1vw]}>
                      <Nunito16Bold>{item.name}</Nunito16Bold>
                      <Nunito14Reg>{item.role}</Nunito14Reg>
                      <ViewRowStartCenter>
                        <View style={[styles.marginRight2vw, styles.borderRadius100, { width: vw(2), height: vw(2), backgroundColor: clrStyle.grey1 }]} />
                        <Nunito12Reg>Ngoại tuyến</Nunito12Reg>
                      </ViewRowStartCenter>
                    </ViewCol>

                    <ViewColCenter style={[]}>
                      {
                        item.pro == 'tree1' ?
                          <>
                            <Image source={require('../assets/photos/tree1.png')} style={[styles.borderRadius3vw, { width: vw(14), height: vw(14) }] as ImageStyle} />
                            <Nunito12Reg color={clrStyle.grey1}>Cây cảnh</Nunito12Reg>
                          </>
                          : item.pro == 'tree2' ?
                            <>
                              <Image source={require('../assets/photos/tree2.png')} style={[styles.borderRadius3vw, { width: vw(14), height: vw(14) }] as ImageStyle} />
                              <Nunito12Reg color={clrStyle.grey1}>Lương thực</Nunito12Reg>
                            </>
                            :
                            <>
                              <Image source={require('../assets/photos/tree3.png')} style={[styles.borderRadius3vw, { width: vw(14), height: vw(14) }] as ImageStyle} />
                              <Nunito12Reg color={clrStyle.grey1}>Cây hoa</Nunito12Reg>
                            </>
                      }
                    </ViewColCenter>
                  </ViewRowBetweenCenter>
                  <ViewRowCenter style={[styles.gap3vw, { paddingTop: vw(3), borderTopWidth: 1, borderColor: clrStyle.grey2 }]}>
                    <RoundBtn
                      title='Hỏi đáp'
                      bgColor={clrStyle.main4}
                      onPress={() => navigation.navigate('Chat', { user: item })}
                      icon={SVG.chat(vw(6), vw(6))}
                      customStyle={[styles.paddingV2vw]}
                      textColor='white'
                      textClass={Nunito14Bold}
                    />
                    <RoundBtn
                      title='Gọi điện'
                      bgColor={clrStyle.main2}
                      onPress={() => {
                        Alert.alert('Vui lòng thử lại. Chuyên gia này hiện đang ngoại tuyến')
                      }}
                      icon={SVG.phone(vw(6), vw(6))}
                      customStyle={[styles.paddingV2vw]}
                      textColor='white'
                      textClass={Nunito14Bold}
                    />
                  </ViewRowCenter>
                </ViewCol>
              )
            })}
          </ViewCol> :
          <ViewCol style={[styles.w84vw, styles.alignSelfCenter]}>
          </ViewCol>
        }
        {marginBottomForScrollView()}
      </ScrollView>
    </SSBarWithSaveArea>
  )
}