import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProviderTotal } from './data/store';
import clrStyle from './assets/componentStyleSheet';
import { ColorValue } from 'react-native';

// screen import
import LoginOpt from './screens/LoginOpt';
import Login from './screens/Login';
import Register from './screens/Register';
import DataCollect from './screens/DataCollect';
import BottomTab from './assets/BottomTab';
import Home from './screens/Home';
import User from './screens/User';
import Shop from './screens/Shop';
import Community from './screens/Community';
// >>>>>>>>>>
import ListView from './screens/ListView';
import TreeDetail from './screens/TreeDetail';
import ProductDetail from './screens/ProductDetail';
import Noti from './screens/Noti';
import Cart from './screens/Cart';
import CareDetail from './screens/CareDetail';
import MyTreeList from './screens/MyTreeList';
import NewCare from './screens/NewCare';
import Chat from './screens/Chat';

// ____________________END OF IMPORT_______________________

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <ProviderTotal>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: clrStyle.white as ColorValue } }}>
          <Stack.Screen name="LoginOpt" component={LoginOpt} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name="DataCollect" component={DataCollect} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="Community" component={Community} />

          {/* >>>> */}
          <Stack.Screen name="ListView" component={ListView} />
          <Stack.Screen name="TreeDetail" component={TreeDetail} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="Noti" component={Noti} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="CareDetail" component={CareDetail} />
          <Stack.Screen name="MyTreeList" component={MyTreeList} />
          <Stack.Screen name="NewCare" component={NewCare} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderTotal>
  )
}

export default App;