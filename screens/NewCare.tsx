import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert, RefreshControl, TextInput, StyleSheet, Button } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import * as CLASS from '../assets/Class'
import * as CTEXT from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
// import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { careActivityName, careRepeatMode, iconCodeList, iconRequireList, treeData } from '../data/factoryData'
import { storageAddToList, storageGetItem, storageSaveAndOverwrite } from '../data/storageFunc'
import styles from '../assets/stylesheet'
import { CareActivityFormat } from '../data/interfaceFormat'
import { saveCareActFnc } from '../assets/component'

export default function NewCare({ route }: any) {
  const navigation = useNavigation()
  const { tree, treeID } = route.params

  const [careActName, setCareActName] = useState<string[]>(careActivityName);
  const [careDate, setCareDate] = useState<Date | number>()
  const [careTime, setCareTime] = useState<Date | number>()
  const [careRepeat, setCareRepeat] = useState<number[]>([])
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

  function saveCareAct() {
    const currentTime = new Date().getTime();
    const careDate1 = careDate ?? currentTime;
    const careTime1 = careTime ?? currentTime;
    const scheduledTime = new Date(
      `${new Date(careDate1).toDateString()} ${new Date(careTime1).toTimeString().split(' ')[0]}`
    ).getTime() || currentTime;
    const alertMessage = 'Đã ghi nhật ký chăm sóc';

    const careData: CareActivityFormat = {
      title: selectedName.trim(),
      time: scheduledTime,
      treeID: treeID,
      treeName: route.params.tree.name,
      treeImg: route.params.tree.img,
      repeat: careRepeat,
    };

    addToCustomCareActName(selectedName);

    const saveToSchedule = async () => {
      await saveCareActFnc('nextCareItem', careData, treeID).then((res) => {
        if (res) {
          Alert.alert(alertMessage, '', [{ text: 'OK', onPress: () => navigation.goBack() }]);
        }
      });
    }

    if (careData.time <= new Date().getTime()) {
      console.log('now');
      saveCareActFnc('careHistoryItem', careData, treeID).then((res) => {
        if (res) {
          if (careRepeat.length > 0) {
            saveToSchedule();
          } else {
            Alert.alert(alertMessage, '', [{ text: 'OK', onPress: () => navigation.goBack() }]);
          }
        }
      })
    } else {
      console.log('schedule');
      saveToSchedule();
    }
  }

  function selectRepeat(item: number) {
    if (careRepeat.includes(item)) {
      setCareRepeat(careRepeat.filter((i) => i !== item))
    } else {
      if (item === 1 || item === 2 || item === 3) {
        setCareRepeat([item])
      } else if (careRepeat.includes(1) || careRepeat.includes(2) || careRepeat.includes(3)) {
        setCareRepeat([...careRepeat.filter((i) => i !== 1 && i !== 2 && i !== 3), item])
      } else {
        setCareRepeat([...careRepeat, item])
      }
    }
  }


  useEffect(() => {

  }, [selectedName,])

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
          <CTEXT.Nunito14Bold>Ngày bắt đầu / Ngày thực hiện: </CTEXT.Nunito14Bold>
          <View style={[styles.flex1]}> <CLASS.DatePicker mode='date' onChange={setCareDate} style={{ class: [styles.alignSelfEnd,], text: [{ color: 'blue' }] }} /></View>
        </CLASS.ViewRow>
        <CLASS.ViewRow style={[styles.gap1vw, styles.padding4vw, styles.borderRadius2vw, styles.bgcolorWhite, styles.alignItemsBaseline]}>
          <CTEXT.Nunito14Bold>Giờ thực hiện: </CTEXT.Nunito14Bold>
          <View style={[styles.flex1]}> <CLASS.DatePicker mode='time' onChange={setCareTime} style={{ class: [styles.alignSelfEnd,], text: [{ color: 'blue' }] }} /></View>
        </CLASS.ViewRow>
        <CLASS.ViewCol style={[styles.gap1vw, styles.padding4vw, styles.borderRadius2vw, styles.bgcolorWhite, styles.alignItemsBaseline]}>
          <CTEXT.Nunito14Bold>Lặp lại: </CTEXT.Nunito14Bold>
          <CLASS.ViewRowEvenlyCenter style={[styles.flexWrap, styles.wfit, styles.rowGap2vw, styles.marginVertical3vw, styles.alignSelfCenter]}>
            {
              careRepeatMode.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      selectRepeat(item[0] as number)
                    }}
                    style={[styles.padding2vw, styles.borderRadius100, { backgroundColor: careRepeat.includes(item[0] as number) ? clrStyle.main3 : clrStyle.white, borderWidth: 1, borderColor: clrStyle.main3 }]}>
                    <CTEXT.Nunito14Bold color={careRepeat.includes(item[0] as number) ? clrStyle.white : 'black'} style={[styles.textCenter]}>{item[1]}</CTEXT.Nunito14Bold>
                  </TouchableOpacity>
                )
              })
            }
          </CLASS.ViewRowEvenlyCenter>
        </CLASS.ViewCol>
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
      <CLASS.ViewRowBetweenCenter style={[styles.paddingH8vw, styles.gap4vw, styles.marginVertical4vw]}>
        <CLASS.RoundBtn textClass={CTEXT.Nunito16Bold} textColor='black' bgColor={clrStyle.main6} title='Huỷ' customStyle={[styles.paddingH6vw, styles.justifyContentCenter, styles.borderRadius100]} onPress={() => { navigation.goBack() }} />
        <CLASS.RoundBtn textClass={CTEXT.Nunito16Bold} textColor='white' bgColor={clrStyle.main2} title='Lưu vào lịch chăm sóc' customStyle={[styles.paddingH6vw, styles.justifyContentCenter, styles.borderRadius100]} onPress={() => { saveCareAct() }} />
      </CLASS.ViewRowBetweenCenter>
    </CLASS.SSBarWithSaveArea>
  )
}
