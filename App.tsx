import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProviderTotal } from './data/store'

import LoginOpt from './screens/boarding/LoginOpt'
import Login from './screens/boarding/Login'
import Register from './screens/boarding/Register'
import Onboard from './screens/boarding/Onboard'
import DataCollect from './screens/boarding/DataCollect'

import BottomTab from './screens/BottomTab'
import Home from './screens/Home'
import User from './screens/User'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <ProviderTotal>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          <Stack.Screen name="LoginOpt" component={LoginOpt} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="DataCollect" component={DataCollect} />

          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderTotal>
  )
}