import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import storage, { storageAddToList, storageClearList } from '../data/storageFunc'

export default function User() {
  const [out, setOut] = React.useState('')
  return (
    <SafeAreaView>
      <Text>User</Text>
      <TouchableOpacity onPress={() => {
        storageClearList('nextCare')
        storageClearList('favTree')
        storageClearList('myTree')
        storageClearList('careHistory')
      }}>
        <Text>clear</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={async () => {
        await storage.save({
          key: 'xArr1',
          data: [{ x: 1 }],
        })
      }}>
        <Text>logou21312124t</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={async () => {
        let x = await storage.load({ key: 'xArr1' })
        console.log(x || 'null');
      }}>
        <Text>log</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={async () => {
        let x = await storage.getAllDataForKey('xArr1')
        console.log(x || 'null', typeof x);
        setOut(JSON.stringify(x))
      }}>
        <Text>log2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={async () => {
        let x1 = { x: 2 }
        storageAddToList('xArr1', x1)
      }}>
        <Text>add</Text>
      </TouchableOpacity>
      <Text>{out}</Text>
    </SafeAreaView>
  )
}