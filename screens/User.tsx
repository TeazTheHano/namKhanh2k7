import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { RootContext } from '../data/store';
import { removeAdded } from '../data/store/action';
import { data } from '../data/data';

export default function User() {
    const value = useContext(RootContext);

    const [state, dispatch] = value;
    const y = data[0];

    return (
        <SafeAreaView>
            <Text>User</Text>
            <TouchableOpacity
                onPress={
                    () => {
                        dispatch(removeAdded(y))
                    }
                }
            >
                <Text>del tree</Text>
            </TouchableOpacity>
            <Text>{JSON.stringify(value)}</Text>
        </SafeAreaView>
    )
}