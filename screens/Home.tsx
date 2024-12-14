import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform, Alert, RefreshControl } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { BannerSliderWithCenter, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav, ViewCol, ViewColBetweenCenter, ViewRowBetweenCenter, ViewRowCenter } from '../assets/Class'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import { useNavigation, useRoute } from '@react-navigation/native'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { iconCodeList, iconRequireList, treeData } from '../data/factoryData'

import Geolocation from '@react-native-community/geolocation';
import Config from "react-native-config";
import { TreeData } from '../data/interfaceFormat'
import { onRefresh } from '../assets/component'
import { storageGetItem, storageGetList, storageSaveAndOverwrite } from '../data/storageFunc'

export default function Home() {
  const navigation = useNavigation();

  const [CurrentCache, dispatch] = React.useContext(RootContext);
  const [weatherIconSrc, setWeatherIconSrc] = useState();
  const [dayOrNight, setDayOrNight] = useState('d');
  const [errMessage, setErrMessage] = useState('');
  const [isShowMore, setIsShowMore] = useState(false);

  const [myTree, setMyTree] = useState<TreeData[]>([]);
  const [limitmyTree, setLimitMyTree] = useState(true);
  const [limitTree, setLimitTree] = useState(true);
  const [isRefresh, setIsRefresh] = useState(false);

  const [newsData, setNewsData] = useState();

  async function requestLocation() {
    Geolocation.requestAuthorization(() => { Geolocation.getCurrentPosition(success, error, options) });
  }

  const success = (position: any) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    storageSaveAndOverwrite('location', { lat: latitude, lng: longitude });
    dispatch(currentSetLocation({ lat: latitude, lng: longitude }));
  }

  let retryCountLocation = 0;
  let retryCountWeather = 0;
  const maxRetries = 5;

  const error = (error: any) => {
    console.log(Platform.OS, 'Home.tsx - Getting Location Error', error);
    if (retryCountLocation < maxRetries) {
      retryCountLocation++;
      console.log(Platform.OS, 'Re-Request Location, attempt:', retryCountLocation);
      requestLocation();
    } else {
      console.log(Platform.OS, 'Max retries reached. Unable to get location. Setting default to Hanois coordinates.');
      storageSaveAndOverwrite('location', { lat: 21.0286, lng: 105.8431 });
      dispatch(currentSetLocation({ lat: 21.0286, lng: 105.8431 }));
    }
  }

  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
    distanceFilter: 1,
    forceRequestLocation: true,
    accuracy: {
      android: 'balanced',
      ios: 'bestForNavigation',
    },
  };

  // Function to fetch weather data
  const fetchWeather = async () => {
    try {
      const weatherResponse = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${Config.WEATHER_API}&q=${CurrentCache.location.lat},${CurrentCache.location.lng}&lang=vi&aqi=no`
      );
      const weatherData = await weatherResponse.json();

      dispatch(currentSetCurrentWeather(weatherData));
      setWeatherIconSrc(iconRequireList[`${dayOrNight}${weatherData.current.condition.code}` as keyof typeof iconRequireList]);

      if (weatherData.error) {
        console.error(Platform.OS, 'Error fetching weather data, try to get city location:', weatherData.error);
        const storedLocation = await storageGetItem('location');
        if (storedLocation) {
          const { lat, lng } = storedLocation;
          const geoCodingUrl = `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=${Config.BIG_DATA_API}`;
          const geoCodingResponse = await fetch(geoCodingUrl);
          const geoCodingData = await geoCodingResponse.json();
          const cityName = geoCodingData?.city;

          const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${Config.WEATHER_API}&q=${cityName}&lang=vi&aqi=no`;
          const cityWeatherResponse = await fetch(weatherUrl);
          const cityWeatherData = await cityWeatherResponse.json();

          dispatch(currentSetLocation({ lat: cityWeatherData.location.lat, lng: cityWeatherData.location.lon }));
          storageSaveAndOverwrite('location', { lat: cityWeatherData.location.lat, lng: cityWeatherData.location.lon });
          setWeatherIconSrc(iconRequireList[`${dayOrNight}${cityWeatherData.current.condition.code}` as keyof typeof iconRequireList]);
          dispatch(currentSetCurrentWeather(cityWeatherData));
        }
      }
    } catch (error) {
      console.error(Platform.OS, 'Error fetching weather data, retrying:', error);
      if (retryCountWeather < maxRetries) {
        retryCountWeather++;
        console.log(Platform.OS, 'Re-Request Weather, attempt:', retryCountWeather);
        setTimeout(fetchWeather, 5000);
      } else {
        console.log(Platform.OS, 'Max retries reached. Unable to fetch weather. GETTING DEFAULT DATA');
        setErrMessage('Không thể lấy dữ liệu thời tiết. Đang sử dụng dữ liệu mô phỏng');
        let defaultWeatherData = { "location": { "name": "Hanoi", "region": "", "country": "Vietnam", "lat": 21.0333, "lon": 105.85, "tz_id": "Asia/Bangkok", "localtime_epoch": 1731745975, "localtime": "2024-11-16 15:32" }, "current": { "last_updated_epoch": 1731745800, "last_updated": "2024-11-16 15:30", "temp_c": 31.0, "temp_f": 87.8, "is_day": 1, "condition": { "text": "Nhiều nắng", "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png", "code": 1000 }, "wind_mph": 2.9, "wind_kph": 4.7, "wind_degree": 234, "wind_dir": "SW", "pressure_mb": 1009.0, "pressure_in": 29.8, "precip_mm": 0.01, "precip_in": 0.0, "humidity": 55, "cloud": 0, "feelslike_c": 34.4, "feelslike_f": 93.8, "windchill_c": 30.7, "windchill_f": 87.3, "heatindex_c": 33.8, "heatindex_f": 92.8, "dewpoint_c": 21.1, "dewpoint_f": 69.9, "vis_km": 10.0, "vis_miles": 6.0, "uv": 1.4, "gust_mph": 3.4, "gust_kph": 5.5 } }
        setWeatherIconSrc(iconRequireList[`${dayOrNight}${defaultWeatherData.current.condition.code}` as keyof typeof iconRequireList]);
        dispatch(currentSetCurrentWeather(defaultWeatherData));
        setTimeout(() => {
          setErrMessage('');
        }, 2000);
      }
    }
  };

  // Request Location
  useEffect(() => {
    setDayOrNight(new Date().getHours() < 18 ? 'd' : 'n');
    requestLocation().then(() => {
      storageGetItem('location').then((res) => {
        if (res) {
          dispatch(currentSetLocation(res));
        } else {
          requestLocation();
        }
      })
    });
  }, [])

  // Request Weather
  useEffect(() => {
    if (CurrentCache.location.lat && CurrentCache.location.lng) {
      fetchWeather();
    }
  }, [CurrentCache.location])

  // Request My Tree
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      storageGetList('myTreeItem').then((res) => {
        if (res) {
          setMyTree(res)
        }
      })
    })
    return unsubscribe
  }, [navigation])

  useEffect(() => {
    if (isRefresh) {
      setIsShowMore(false)
      setIsRefresh(false)
      fetchWeather();
    }
  }, [isRefresh])

  const WEATHERCLASS = useMemo(() => {
    return (
      <>
        <ViewRowBetweenCenter style={[styles.flex1]}>
          {/*  */}
          <ViewCol style={[styles.gap1vw]}>
            <Nunito12Bold color={clrStyle.main2} style={{ fontSize: vw(11) }}>{CurrentCache.currentWeather?.current?.temp_c || 0}°</Nunito12Bold>
            <Nunito18Bold>{CurrentCache.currentWeather?.current?.condition?.text || ''}</Nunito18Bold>
            <Nunito14Bold color={clrStyle.grey1}>Độ ẩm: {CurrentCache.currentWeather?.current?.humidity || 0}%</Nunito14Bold>
            <Nunito14Bold color={clrStyle.grey1}>Cảm nhận: {CurrentCache.currentWeather?.current?.feelslike_c || 0}°</Nunito14Bold>
          </ViewCol>
          {/*  */}
          <ViewColBetweenCenter style={[styles.h100]}>
            {/* TODO: change icon */}
            <Image source={weatherIconSrc} resizeMode='contain' resizeMethod='resize' style={[{ width: vw(28), height: vw(28) } as ImageStyle]} />
            <ViewRowCenter style={[styles.gap1vw]}>
              {SVG.pingIcon(vw(4), vw(4))}
              <Nunito14Reg color={clrStyle.grey1} >{CurrentCache.currentWeather?.location?.name || ''}, {new Date(CurrentCache.currentWeather?.current?.last_updated_epoch * 1000).toLocaleString('vi-VN').slice(0, 5)}</Nunito14Reg>
              <TouchableOpacity onPress={() => { }}>{SVG.editIcon(vw(4), vw(4))}</TouchableOpacity>
            </ViewRowCenter>
          </ViewColBetweenCenter>
        </ViewRowBetweenCenter>

        {isShowMore ?
          <ViewCol style={[styles.gap1vw]}>
            <Nunito14Bold color={clrStyle.grey1}>Tốc độ gió: {CurrentCache.currentWeather?.current?.wind_kph || 0}km/h</Nunito14Bold>
            <Nunito14Bold color={clrStyle.grey1}>Hướng gió: {CurrentCache.currentWeather?.current?.wind_dir || ''}</Nunito14Bold>
            <Nunito14Bold color={clrStyle.grey1}>Gió giật: {CurrentCache.currentWeather?.current?.gust_kph || 0}</Nunito14Bold>
            <Nunito14Bold color={clrStyle.grey1}>Tia cực tím: {CurrentCache.currentWeather?.current?.uv || 0}</Nunito14Bold>
            <Nunito14Bold color={clrStyle.grey1}>Áp suất khí quyển: {CurrentCache.currentWeather?.current?.pressure_mb || 0}mb</Nunito14Bold>
          </ViewCol>
          : null
        }
      </>
    )
  }, [CurrentCache.currentWeather, isShowMore])

  return (
    <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1} >
      <TopNav title='Trang chủ' rightIcon={SVG.bellStroke(vw(6), vw(6))} rightFnc={() => navigation.navigate('Noti' as never)} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefresh}
            onRefresh={() => {
              setIsRefresh(true)
            }}
          />
        }
        style={[styles.flex1, styles.paddingH6vw, {}]} contentContainerStyle={[styles.gap6vw]}>
        <ViewCol style={[styles.gap2vw, styles.bgcolorWhite, styles.paddingH5vw, styles.paddingV4vw, styles.borderRadius20, styles.overflowHidden]}>
          {errMessage ? <Nunito14Reg color='#FF0000' style={[styles.textCenter]}>{errMessage}</Nunito14Reg> : null}

          {WEATHERCLASS}

          <TouchableOpacity style={[styles.paddingH3vw, styles.paddingV1vw, styles.alignSelfCenter]}
            onPress={() => { setIsShowMore(!isShowMore) }}>
            <Nunito12Reg color={clrStyle.grey1}>{!isShowMore ? 'Hiển thị thêm' : 'Ẩn bớt'}</Nunito12Reg>
          </TouchableOpacity>
        </ViewCol>

        <ViewRowBetweenCenter style={[styles.borderRadius3vw, styles.padding4vw, styles.paddingV2vw, styles.shadowW0H075Black, { backgroundColor: clrStyle.main1, }]}>
          <Nunito16Bold>Cây trồng của bạn</Nunito16Bold>
          <TouchableOpacity onPress={() => { navigation.navigate('MyTreeList' as never) }}
            style={[styles.padding2vw, styles.paddingH3vw, styles.borderRadius2vw, styles.bgcolorWhite]}>
            <Nunito12Bold color={clrStyle.main3}>Xem thêm</Nunito12Bold>
          </TouchableOpacity>
        </ViewRowBetweenCenter>
        {/* list */}
        {myTree.length > 0 ?
          <FlatList
            data={myTree}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity key={index} onPress={() => { navigation.navigate('TreeDetail', { tree: item }) }}
                  style={[styles.borderRadius10, styles.bgcolorWhite, styles.w30vw]}>
                  <ViewCol >
                    <Image source={item.img} resizeMode='cover' resizeMethod='resize' style={[styles.w100, styles.h25vw, styles.borderRadius10] as ImageStyle} />
                    <Nunito14Bold style={[styles.padding2vw]}>{item.name}</Nunito14Bold>
                  </ViewCol>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.gap4vw]}
          /> :
          <Nunito14Bold style={[styles.padding2vw]}>Chưa có cây trồng</Nunito14Bold>}

        <ViewRowBetweenCenter style={[styles.borderRadius3vw, styles.padding4vw, styles.paddingV2vw, styles.shadowW0H075Black, { backgroundColor: clrStyle.main1, }]}>
          <Nunito16Bold>Thư viện cây trồng</Nunito16Bold>
          <TouchableOpacity onPress={() => { navigation.navigate('ListView', { cate: 'treeLib' }) }}
            style={[styles.padding2vw, styles.paddingH3vw, styles.borderRadius2vw, styles.bgcolorWhite]}>
            <Nunito12Bold color={clrStyle.main3}>Xem thêm</Nunito12Bold>
          </TouchableOpacity>
        </ViewRowBetweenCenter>
        {/* list */}
        {treeData.length > 0 ?
          <FlatList
            data={treeData}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity key={index} onPress={() => { navigation.navigate('TreeDetail', { tree: item }) }}
                  style={[styles.borderRadius10, styles.bgcolorWhite, styles.w30vw]}>
                  <ViewCol >
                    <Image source={item.img} resizeMode='cover' resizeMethod='resize' style={[styles.w100, styles.h25vw, styles.borderRadius10] as ImageStyle} />
                    <Nunito14Bold style={[styles.padding2vw]}>{item.name}</Nunito14Bold>
                  </ViewCol>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.gap4vw]}
          /> :
          <Nunito14Bold style={[styles.padding2vw]}>Chưa có cây trồng</Nunito14Bold>}

        <Nunito20Bold color={clrStyle.main2} style={[styles.textCenter]}>Tin tức Nông nghiệp</Nunito20Bold>
      </ScrollView>
    </SSBarWithSaveArea >
  )
}
