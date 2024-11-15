import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { getStorageItem, getUser, saveStorageItem } from '../data/storageFunc'
import { BannerSliderWithCenter, SaveViewWithColorStatusBar, SSBar, SSBarWithSaveArea, TopNav } from '../assets/Class'
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, } from '../assets/CustomText'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import { bellIcon, curveRightArrow, searchIcon } from '../assets/svgXml'

import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { marginBottomForScrollView } from '../assets/component'
import { currentSetLocation, RootContext } from '../data/store'
import Geolocation from '@react-native-community/geolocation';
import Config from "react-native-config";

export default function Home() {
  const navigation = useNavigation();

  const [CurrentCache, dispatch] = React.useContext(RootContext);

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

  let retryCount = 0;
  const maxRetries = 2;

  const error = (error: any) => {
    console.log('Home.tsx - Getting Location Error', error);
    if (retryCount < maxRetries) {
      retryCount++;
      console.log('Re-Request Location, attempt:', retryCount);
      requestLocation();
    } else {
      console.log('Max retries reached. Unable to get location. Setting default to Hanois coordinates.');
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
    console.log(Config.WEATHER_API);
    console.log(64, CurrentCache.location);

    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${Config.WEATHER_API}&q=${CurrentCache.location.lat},${CurrentCache.location.lng}&aqi=no`);
      const weather = await response.json();
      console.log(weather);
    } catch (error) {
      console.log('Home.tsx - Getting Weather Error', error);
      if (error instanceof Error && error.message === 'No matching location found') {

        const geoCodingUrl = `https://api-bdc.net/data/reverse-geocode?latitude=${CurrentCache.location.lat}&longitude=${CurrentCache.location.lng}&localityLanguage=en&key=${Config.BIG_DATA_API}`;
        const responseGeoCoding = await fetch(geoCodingUrl);
        console.log(responseGeoCoding);

        // const geoCoding = await responseGeoCoding.json();
        // const city = geoCoding.Response.View[0].Result[0].Location.Address.City;
        // const cityLat = geoCoding.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
        // const cityLng = geoCoding.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
        // console.log(city);

        // saveStorageItem('location', { lat: cityLat, lng: cityLng });
        // dispatch(currentSetLocation({ lat: cityLat, lng: cityLng }));
        // fetchWeather();
      }
    }
  }

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      getStorageItem('location').then((res) => {
        console.log(95, res, new Date().getTime());
        if (res) {
          dispatch(currentSetLocation(res));
        } else {
          requestLocation();
        }
      })
    })
    return unsub
  }, [navigation])

  useEffect(() => {
    fetchWeather();
  }, [CurrentCache.location])


  return (
    <SSBarWithSaveArea barContentStyle='dark-content' barColor={clrStyle.main1} bgColor={clrStyle.main1} >
      <TopNav title='Trang chủ' rightIcon={bellIcon(vw(6), vw(6))} />
      <ScrollView style={[styles.flex1, {}]}>

      </ScrollView>
    </SSBarWithSaveArea>
  )
}