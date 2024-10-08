
import { View, Text, TouchableOpacity, Image, ImageStyle, StatusBar, SafeAreaView, TextInput, Animated, Linking, Alert } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles, { vw } from '../../assets/stylesheet'
import { BoardingInput, BoardingNavigation, BoardingPicking, LowBtn, Nunito14Reg, Nunito18Bold, Nunito20Bold, Nunito24Bold, Nunito24Reg, ProcessBarSelfMade } from '../../assets/Class'
import { statusBarTransparency } from '../../assets/component'
import clrStyle from '../../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'
import { shareIcon, sharpLeftArrow, sharpRightArrow } from '../../assets/svgXml'
import { UserInfo } from '../../data/data'
import storage, { getUserInfo, saveUserInfo } from '../../data/storageFunc'

export default function DataCollect({ route }: any) {
    const navigation = useNavigation();

    const [currentStep, setCurrentStep] = React.useState(0)
    const [showGoBack, setShowGoBack] = React.useState(false)
    const [age, setAge] = React.useState<number>(0)
    const [persona, setPersona] = React.useState<string>('')
    const [favorite, setFavorite] = React.useState<string[]>([])
    const [goal, setGoal] = React.useState<string>('')
    const [subTitleColor, setSubTitleColor] = React.useState(clrStyle.grey2)

    const [userInfo, setUserInfo] = React.useState<UserInfo | undefined>(undefined)

    const list = [age, persona, favorite, goal]
    const required = [age, persona, favorite]

    useEffect(() => {
        getUserInfo().then((res) => {
            setUserInfo(res);
        })
    }, [currentStep])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (route.params) {
                let step = route.params.step;
                if (step === 0) {
                    setCurrentStep(step);
                }
            }
        });
        return unsubscribe;
    }, [navigation]);


    function currentStepAdjust(act: boolean) {
        if (act && required[currentStep]?.toString().trim().length === 0) {
            Alert.alert('Please fill in all fields');
            return;
        }
        if (act && currentStep < list.length - 1) {
            setShowGoBack(false);
            setCurrentStep(currentStep + 1);
        } else if (!act && currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else if (act && currentStep === list.length - 1) {
            if (userInfo?.userID) {
                saveUserInfo({
                    userID: userInfo.userID,
                    synced: userInfo.synced,
                    name: userInfo.name,
                    age: age,
                    loginMethod: userInfo.loginMethod,
                    email: userInfo.email,
                    password: userInfo.password,
                    dataCollect: true,
                    createTime: userInfo.createTime,
                }).then((res) => {
                    if (res) {
                        console.log('Data saved');
                        navigation.navigate('BottomTab');
                    }
                })
            }
            // TODO: firebase save

        } else if (!act && currentStep === 0) {
            setShowGoBack(true);
            if (!act && showGoBack) {
                navigation.goBack();
            }
        }
    }

    // list of interest and favorite subject
    const favoriteList = ['Ca hát', 'Du lịch', 'Nấu ăn', 'Thể thao', 'Đọc sách', 'Xem phim', 'Chơi game', 'Học hỏi', 'Khác'];

    function inputBox() {
        switch (currentStep) {
            case 0:
                return (
                    <BoardingInput
                        title='Tuổi của bạn'
                        value={age}
                        isNumber={true}
                        onChgText={setAge as React.Dispatch<React.SetStateAction<string | number>>}
                    />)
                break;
            case 1:
                if (currentStep === 1 && persona.length < 4) {
                    setTimeout(() => {
                        setSubTitleColor(clrStyle.main7)
                    }, 3000);
                }

                return (
                    <BoardingInput
                        title='Công việc hiện tại'
                        autoCap='characters'
                        maxLength={4}
                        value={persona}
                        onChgText={setPersona as React.Dispatch<React.SetStateAction<string | number>>}
                    />)
                break;
            case 2:
                return (
                    <View style={[styles.flexCol, styles.gap4vw, styles.justifyContentCenter, styles.alignContentStart]}>
                        <Nunito24Bold style={[{ color: clrStyle.main5 }]}>Hãy nói về</Nunito24Bold>
                        <Nunito20Bold style={[{ color: clrStyle.grey3 }]}>Sở thích của bạn <Nunito14Reg style={{ color: clrStyle.grey2 }}>/tuỳ chọn</Nunito14Reg></Nunito20Bold>
                        <BoardingPicking
                            data={favoriteList}
                            selected={favorite}
                            setSelected={setFavorite as React.Dispatch<React.SetStateAction<string[]>>}
                        />
                    </View>
                )
                break;
            case 3:
                return (
                    <View style={[styles.flexCol, styles.gap4vw, styles.justifyContentCenter, styles.alignContentStart]}>
                        <Nunito24Bold style={[{ color: clrStyle.main5 }]}>Hãy nói về</Nunito24Bold>
                        <Nunito20Bold style={[{ color: clrStyle.grey3 }]}>Mục tiêu của bạn <Nunito14Reg style={{ color: clrStyle.grey2 }}>/tuỳ chọn</Nunito14Reg></Nunito20Bold>
                        <BoardingInput
                            CustomStyleClass={[styles.margin2vw]}
                            title=''
                            value={goal}
                            onChgText={setGoal as React.Dispatch<React.SetStateAction<string | number>>}
                        />
                    </View>
                )
                break;
        }
    }

    return (
        <SafeAreaView style={[styles.flex1]}>
            {statusBarTransparency(false, true)}
            <View style={[styles.flexCol, styles.flex1, styles.justifyContentSpaceBetween, styles.paddingH5vw]}>
                <Nunito24Reg style={[styles.w60vw, { color: clrStyle.main5 }]}>Before jumping in, let's know each orther</Nunito24Reg>

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
                        bgProcessColor={clrStyle.main5} />

                    <BoardingNavigation
                        fnc={currentStepAdjust}
                        currentStep={currentStep}
                        dataLength={list.length}
                        showGoBack={showGoBack}
                        leftTitle='Go back?'
                        rightTitle='Jump to our journey'
                    />
                </View>
            </View>
        </SafeAreaView >
    )
}