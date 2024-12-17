import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert, RefreshControl, TextInput, StyleSheet, Button } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import * as CLASS from '../assets/Class'
import * as CTEXT from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
// import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { careActivityName, iconCodeList, iconRequireList, treeData } from '../data/factoryData'
import { storageAddToList, storageGetItem } from '../data/storageFunc'
import styles from '../assets/stylesheet'
import { CareActivityFormat } from '../data/interfaceFormat'

export default function NewCare({ route }: any) {
  const navigation = useNavigation()
  const { treeID } = route.params

  const [careActName, setCareActName] = useState<string[]>(careActivityName);
  const [careDate, setCareDate] = useState<Date | number>()
  const [careTime, setCareTime] = useState<Date | number>()
  const [careRepeat, setCareRepeat] = useState<string>('')
  const [careNote, setCareNote] = useState<string>('')

  const [selectedName, setSelectedName] = useState<string>('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      storageGetItem('customCareActName').then((res) => {
        if (res) {
          setCareActName((pre) => [...pre, ...res])
        }
      })
    })
    return unsubscribe
  }, [navigation])

  function addToCustomCareActName(name: string) {
    if (!careActName.includes(name)) {
      storageAddToList('customCareActName', name)
    }
  }

  function submitCareAct() {
    const data: CareActivityFormat = {
      title: selectedName,
      time: Date.now(),
      targetId: treeID,
      targetName: route.params.tree.name,
      targetImg: route.params.tree.img
    }
  }

  return (
    <CLASS.SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1}>
      <CLASS.TopNav
        title='Hoạt động chăm sóc mới'
        returnPreScreen
        returnPreScreenFnc={navigation.goBack}
      />
      <ScrollView style={[styles.paddingH8vw,]} contentContainerStyle={[styles.gap4vw]}>

        <CLASS.ViewRow style={[styles.gap1vw, styles.padding4vw, styles.borderRadius2vw, styles.bgcolorWhite, styles.alignItemsBaseline]}>
          <CTEXT.Nunito14Bold>Tiêu đề: </CTEXT.Nunito14Bold>
          <CLASS.DatalistInput
            options={careActName}
            onSelect={setSelectedName}
            enableScroll={false}
            multiLine
            placeholder='Tên hoạt động chăm sóc'
            CustomStyle={{
              classStyle: [styles.flex1],
              dropdownStyle: [styles.marginVertical4vw, styles.border1, styles.padding2vw, styles.borderRadius2vw, { borderColor: clrStyle.grey2 }],
              dropdownItemStyle: [styles.padding2vw, { borderBottomWidth: 1, borderColor: clrStyle.grey2 }],
            }}
          />
        </CLASS.ViewRow>
        <CLASS.ViewRow style={[styles.gap1vw, styles.padding4vw, styles.borderRadius2vw, styles.bgcolorWhite, styles.alignItemsBaseline]}>
          <CTEXT.Nunito14Bold>Ngày bắt đầu: </CTEXT.Nunito14Bold>
          <View style={[styles.flex1]}> <CLASS.DatePicker mode='date' onChange={setCareDate} style={{ class: [styles.alignSelfEnd,], text: [{ color: 'blue' }] }} /></View>
        </CLASS.ViewRow>
        <CLASS.ViewRow style={[styles.gap1vw, styles.padding4vw, styles.borderRadius2vw, styles.bgcolorWhite, styles.alignItemsBaseline]}>
          <CTEXT.Nunito14Bold>Giờ: </CTEXT.Nunito14Bold>
          <View style={[styles.flex1]}> <CLASS.DatePicker mode='time' onChange={setCareTime} style={{ class: [styles.alignSelfEnd,], text: [{ color: 'blue' }] }} /> </View>
        </CLASS.ViewRow>
        <CLASS.ViewRow style={[styles.gap1vw, styles.padding4vw, styles.borderRadius2vw, styles.bgcolorWhite, styles.alignItemsBaseline]}>
          <CTEXT.Nunito14Bold>Lặp lại: </CTEXT.Nunito14Bold>

        </CLASS.ViewRow>
        <CLASS.ViewCol style={[styles.gap1vw, styles.padding4vw, styles.borderRadius2vw, styles.bgcolorWhite, styles.alignItemsBaseline]}>
          <CTEXT.Nunito14Bold>Ghi chú: </CTEXT.Nunito14Bold>
          <TextInput
            value={careNote}
            onChangeText={setCareNote}
            placeholder='Ghi chú'
            style={[styles.flex1, styles.border1, styles.borderRadius2vw, styles.padding2vw, styles.w100, { borderColor: clrStyle.grey1 }]}
            multiline
          />
        </CLASS.ViewCol>
      </ScrollView>
    </CLASS.SSBarWithSaveArea>
  )
}
