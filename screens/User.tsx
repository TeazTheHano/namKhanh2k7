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
import { storageClearList, storageGetAllIDfromKey, storageRemove } from '../data/storageFunc'

export default function User() {
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();
  const [CurrentCache, dispatch] = useContext(RootContext);

  const [user, setUser] = useState(CurrentCache.user);

  const [numberOfTrees, setNumberOfTrees] = useState(0);
  useEffect(() => {
    storageGetAllIDfromKey('myTreeItem').then((res) => {
      if (res) {
        setNumberOfTrees(res.length);
      }
    });
  }, []);

  const btnList = [
    [SVG.cart(vw(6), vw(6), clrStyle.main2), 'Đơn hàng của bạn', () => { navigation.navigate('Cart' as never) }],
    [SVG.bookmark(vw(6), vw(6)), 'Đã lưu', () => { Alert.alert('Tính năng đang phát triển') }],
    [SVG.feedback(vw(6), vw(6)), 'Hỗ trợ', () => { Alert.alert('Tính năng đang phát triển') }],
    [SVG.logout(vw(6), vw(6)), 'Đăng xuất', async () => {
      await storageRemove('user');
      await storageClearList('myTreeItem');
      await storageClearList('favTreeItem');
      await storageClearList('nextCareItem');
      await storageClearList('careHistoryItem');
      await storageRemove('location');
      await storageRemove('customCareActName');
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginOpt' as never }]
      })
    }],
    [SVG.deleteAcc(vw(6), vw(6)), 'Xóa tài khoản', () => {
      Alert.alert('Tính năng đang phát triển. Vui lòng liên hệ với nhà phát hành')
    }],
  ]

  return (
    <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
      <TopNav title='Tài khoản' />

      <ViewRowBetweenCenter style={[styles.paddingH4vw, styles.gap2vw, styles.bgcolorWhite, styles.borderRadius3vw, styles.padding3vw]}>
        <Image source={require('../assets/photos/User.png')} style={[styles.borderRadius100, { width: vw(18), height: vw(18) }] as ImageStyle} />
        <ViewCol style={[styles.flex1, styles.gap1vw]}>
          <Nunito16Bold>{user.name}</Nunito16Bold>
          <Nunito14Reg>Số cây trong vườn của bạn: {numberOfTrees}</Nunito14Reg>
        </ViewCol>
      </ViewRowBetweenCenter>
      <ViewCol style={[styles.marginTop4vw]}>
        {
          btnList.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={item[2] as () => void}>
                <ViewRowBetweenCenter style={[styles.marginHorizontal6vw, styles.padding4vw, { borderBottomWidth: 1, borderColor: clrStyle.grey2 }]}>
                  <ViewRowStartCenter style={[styles.flex1]}>
                    {item[0] as any}
                    <Nunito14Bold style={[styles.marginLeft2vw]}>{item[1] as string}</Nunito14Bold>
                  </ViewRowStartCenter>
                  {SVG.sharpRightArrow(vw(6), vw(6), clrStyle.main2)}
                </ViewRowBetweenCenter>
              </TouchableOpacity>
            )
          })
        }
      </ViewCol>
    </SSBarWithSaveArea>
  )
}