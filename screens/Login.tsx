
import { View, Text, TouchableOpacity, Image, ImageStyle, StatusBar, SafeAreaView, TextInput, Animated, Alert } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles, { vw } from '../assets/stylesheet'
import { BoardingInput, BoardingNavigation, LowBtn, ProcessBarSelfMade } from '../assets/Class'
import { Nunito18Bold, Nunito24Bold, Nunito24Reg, } from '../assets/CustomText'
import { LoginWithFirebaseHandle, statusBarTransparency } from '../assets/component'
import clrStyle from '../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'
import { shareIcon, sharpLeftArrow, sharpRightArrow } from '../assets/svgXml'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { currentSetUser, RootContext } from '../data/store'
import { getUser, saveUser } from '../data/storageFunc'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '..'
import { UserFormat } from '../data/interfaceFormat'

export default function Login() {
    const navigation = useNavigation();
    const [CurrentCache, dispatch] = React.useContext(RootContext);

    const [currentStep, setCurrentStep] = React.useState(0)
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [showGoBack, setShowGoBack] = React.useState(false)

    const [userLocal, setUserLocal] = React.useState<UserFormat>();

    // tf this state is for the hidden password
    const [hidePassword, setHidePassword] = React.useState(true)

    const list = [email, password,]

    async function getData() {
        let userDoc = email.toString().split('@')[0];
        try {
            const docRef = doc(db, 'agriUserData', `${userDoc}`);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                getUser().then((res) => {
                    console.log(res, 42);

                    if (res) {
                        let newData: UserFormat = {
                            ...res,
                            synced: true,
                            dataCollect: docSnap.data().age ? true : false,
                            ...docSnap.data()
                        }
                        saveUser(newData).then((res) => {
                            if (res) {
                                dispatch(currentSetUser(newData))
                                navigation.navigate('BottomTab' as never);
                            }
                        })
                    } else {
                        let newData: UserFormat = {
                            name: docSnap.data().displayName,
                            email: email,
                            synced: true,
                            age: docSnap.data().age,
                            dataCollect: docSnap.data().age ? true : false,
                            data: docSnap.data().data,
                            loginMethod: docSnap.data().loginMethod
                        }
                        saveUser(newData).then((res) => {
                            if (res) {
                                console.log(res, 67);

                                dispatch(currentSetUser(newData))
                                navigation.navigate('BottomTab' as never);
                            }
                        })
                    }
                })
            } else {
                console.log("91 No such document! Navigate to DataCollect");
                navigation.navigate('DataCollect' as never);
            }
        } catch (error) {
            console.error("94 Error getting document:", error);
        }
    }

    function currentStepAdjust(act: boolean) {
        if (act && list[currentStep] === '') {
            Alert.alert('Please fill in all fields');
            return;
        }

        if (act && currentStep < list.length - 1) {
            setShowGoBack(false);
            setCurrentStep(currentStep + 1);
        } else if (!act && currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else if (act && currentStep === list.length - 1) {
            let auth = getAuth();
            LoginWithFirebaseHandle(email, password, null, signInWithEmailAndPassword, auth, dispatch, currentSetUser, saveUser).then((res) => {
                console.log(res, 97);
                if (res === true) {
                    getData();
                }
            })
        } else if (!act && currentStep === 0) {
            setShowGoBack(true);
            if (!act && showGoBack) {
                navigation.goBack();
            }
        }
    }

    // TODO: firebase auth

    function inputBox() {
        switch (currentStep) {
            case 0:
                return (
                    <BoardingInput
                        title='Email'
                        value={email}
                        contentType='emailAddress'
                        onChgText={setEmail as React.Dispatch<React.SetStateAction<string | number>>}
                    />)
                break;
            case 1:
                return (
                    <BoardingInput
                        title='Password'
                        value={password}
                        contentType='password'
                        onChgText={setPassword as React.Dispatch<React.SetStateAction<string | number>>}
                        hideContent={hidePassword}
                        hideContentFnc={setHidePassword as React.Dispatch<React.SetStateAction<boolean>>}
                    />)
                break;
        }
    }

    return (
        <SafeAreaView style={[styles.flex1]}>
            {statusBarTransparency(false, true)}
            <View style={[styles.flexCol, styles.flex1, styles.justifyContentSpaceBetween, styles.paddingH5vw]}>
                <Nunito24Reg style={[styles.w60vw, { color: clrStyle.main2 }]}>Let's sign you in</Nunito24Reg>

                {/* input box */}
                {inputBox()}

                <View style={[styles.flexCol, styles.gap2vw]}>
                    <ProcessBarSelfMade
                        barLength={vw(90)}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        totalStep={list.length}
                        round={vw(100)}
                        barHeight={vw(2)}
                        onStartedProcess={true}
                        bgBarColor={clrStyle.grey1}
                        bgProcessColor={clrStyle.main2} />

                    <BoardingNavigation
                        fnc={currentStepAdjust}
                        currentStep={currentStep}
                        dataLength={list.length}
                        showGoBack={showGoBack}
                        leftTitle='Go back?'
                        rightTitle='Login?'
                    />
                </View>
            </View>
        </SafeAreaView >
    )
}