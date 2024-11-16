import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking, Platform } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { getStorageItem, getUser, saveStorageItem } from '../data/storageFunc'
import { BannerSliderWithCenter, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav, ViewCol, ViewColBetweenCenter, ViewRowBetweenCenter, ViewRowCenter } from '../assets/Class'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import * as SVG from '../assets/svgXml'

import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { marginBottomForScrollView } from '../assets/component'
import { currentSetCurrentWeather, currentSetLocation, RootContext } from '../data/store'
import { iconCodeList, iconRequireList } from '../data/factoryData'

import Geolocation from '@react-native-community/geolocation';
import Config from "react-native-config";

export default function Home() {
  const navigation = useNavigation();

  const [CurrentCache, dispatch] = React.useContext(RootContext);
  const [weatherIconSrc, setWeatherIconSrc] = useState();
  const [dayOrNight, setDayOrNight] = useState('d');

  async function requestLocation() {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(success, error, options);
  }

  const success = (position: any) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    saveStorageItem('location', { lat: latitude, lng: longitude });
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
      saveStorageItem('location', { lat: 21.0286, lng: 105.8431 });
      dispatch(currentSetLocation({ lat: 21.0286, lng: 105.8431 }));
    }
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
    distanceFilter: 1,
    forceRequestLocation: true,
    accuracy: {
      android: 'balanced',
      ios: 'bestForNavigation',
    },
  };

  const fetchWeather = async () => {
    console.log(CurrentCache.location);

    try {
      const weatherResponse = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${Config.WEATHER_API}&q=${CurrentCache.location.lat},${CurrentCache.location.lng}&lang=vi&aqi=no`
      );
      const weatherData = await weatherResponse.json();
      dispatch(currentSetCurrentWeather(weatherData));
      setWeatherIconSrc(iconRequireList[`${dayOrNight}${weatherData.current.condition.code}`]);

      if (weatherData.error) {
        console.error(Platform.OS, 'Error fetching weather data, try to get city location:', weatherData.error);
        const storedLocation = await getStorageItem('location');
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
          saveStorageItem('location', { lat: cityWeatherData.location.lat, lng: cityWeatherData.location.lon });
          setWeatherIconSrc(iconRequireList[`${dayOrNight}${cityWeatherData.current.condition.code}`]);
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
        console.log(Platform.OS, 'Max retries reached. Unable to fetch weather.');
      }
    }
  };

  useEffect(() => {
    setDayOrNight(new Date().getHours() < 18 ? 'd' : 'n');
    getStorageItem('location').then((res) => {
      if (res) {
        dispatch(currentSetLocation(res));
      } else {
        requestLocation();
      }
    })
  }, [])

  useEffect(() => {
    if (CurrentCache.location.lat && CurrentCache.location.lng) {
      fetchWeather();
    }
  }, [CurrentCache.location])

  return (
    <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1} >
      <TopNav title='Trang chủ' rightIcon={SVG.bellIcon(vw(6), vw(6))} />
      <ScrollView style={[styles.flex1, styles.paddingH6vw, {}]}>
        <ViewCol style={[styles.gap2vw, styles.bgcolorWhite, styles.paddingH5vw, styles.paddingV4vw, styles.borderRadius20, styles.overflowHidden]}>
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
                <Nunito14Reg color={clrStyle.grey1} >{CurrentCache.currentWeather?.location?.name || ''}, {new Date(CurrentCache.currentWeather?.current?.last_updated_epoch * 1000).toLocaleString().slice(0, 5)}</Nunito14Reg>
                <TouchableOpacity onPress={() => { }}>{SVG.editIcon(vw(4), vw(4))}</TouchableOpacity>
              </ViewRowCenter>
            </ViewColBetweenCenter>
          </ViewRowBetweenCenter>
        </ViewCol>

      </ScrollView>
    </SSBarWithSaveArea>
  )
}