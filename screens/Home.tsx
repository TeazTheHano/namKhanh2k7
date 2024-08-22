import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ProviderTotal, RootContext } from '../data/store';
import { data, TreeItem } from '../data/data';
import { addAdded } from '../data/store/action';

export default function Home() {
  const value = useContext(RootContext);
  console.log(value);

  const [state, dispatch] = value;
  const y = data[0];
  console.log(value);
  return (
    <SafeAreaView>
      <Text>Homee</Text>
      <TouchableOpacity
        onPress={
          () => {
            dispatch(addAdded(y))
          }
        }>
        <Text>{y.name}</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(value)}</Text>
    </SafeAreaView>
  )
}