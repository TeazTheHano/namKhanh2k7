import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import storage, { storageAddToList, storageClearList, storageGetItem, storageRemove } from '../data/storageFunc'
import { StorageItem } from '../data/interfaceFormat'

export default function User() {
  const [out, setOut] = React.useState('')

  return (
    <SafeAreaView>
      <Text>User</Text>
      <TouchableOpacity onPress={() => {
        storageRemove('customCareActName').then((res) => {
          
        })
      }}>
        <Text>clear</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        let x = '123123'
        storageAddToList('customCareActName', x).then((res)=>{
          storageGetItem('customCareActName').then((res1)=>{
            console.log(res1);
            setOut(JSON.stringify(res1))
          })
        })

      }}>
        <Text>{out || 1}</Text>
      </TouchableOpacity>
    </SafeAreaView >
  )
}