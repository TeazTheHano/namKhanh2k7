
import { View, Text, TouchableOpacity, Image, ImageStyle, StatusBar, SafeAreaView, TextInput, Animated, Linking, Alert } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import styles, { vw } from '../assets/stylesheet'
import { BoardingInput, BoardingNavigation, BoardingPicking, ProcessBarSelfMade, ViewRowBetweenCenter, ViewRowStartCenter } from '../assets/Class'
import { statusBarTransparency } from '../assets/component'
import clrStyle from '../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'
import { shareIcon, sharpLeftArrow, sharpRightArrow } from '../assets/svgXml'

import storage, { getUser, saveUser } from '../data/storageFunc'
import { UserFormat } from '../data/interfaceFormat'
import { Nunito14Reg, Nunito18Reg, Nunito20Bold, Nunito24Bold, Nunito24Reg } from '../assets/CustomText'
import { currentSetUser, RootContext } from '../data/store'
import { getAuth, updateProfile } from 'firebase/auth'
import { db } from '../index'
import { collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'

export default function DataCollect({ route }: any) {
    const navigation = useNavigation();
    const [CurrentCache, dispatch] = useContext(RootContext)

    const [currentStep, setCurrentStep] = React.useState(0)
    const [showGoBack, setShowGoBack] = React.useState(false)
    const [age, setAge] = React.useState<number>(0)
    const [interest, setInterest] = React.useState<string[]>([])
    const [favorite, setFavorite] = React.useState<string[]>([])
    const [Job, setJob] = React.useState<string>('')
    const [subTitleColor, setSubTitleColor] = React.useState(clrStyle.grey1)

    const [userInfo, setUserInfo] = React.useState<UserFormat | undefined>(undefined)

    const [firebaseDataCollectFormat, setFirebaseDataCollectFormat] = React.useState({
        age: 0,
        loginMethod: '',
        synced: false,
        data: {
            interest: [],
            favTree: [],
            job: '',
        }
    })

    const list = [age, interest, favorite, Job]
    const required = [age, interest, favorite]

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (route.params) {
                let step = route.params.step;
                if (step === 0) {
                    setCurrentStep(step);
                }
            }

            let userFeild = CurrentCache.user.email?.toString().split('@')[0];

            async function getData() {
                try {
                    const docRef = doc(db, 'nutriUserData', `${userFeild}`);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());

                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error getting document:", error);
                }
            }

            getData();

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
            console.log(62);
            console.log(userInfo);

            if (userInfo?.userID) {
                console.log('63');
                setUserInfo({ ...userInfo, age: age, dataCollect: true, data: { interest: interest, favorite: favorite, job: Job?.trim().length > 0 ? Job.trim() : 'No Job yet' } })
                saveUser(userInfo).then((res) => {
                    console.log(res);
                    dispatch(currentSetUser(userInfo))



                    if (res) {
                        console.log('Data saved');
                        navigation.navigate('BottomTab' as never);
                    }
                })
            }

        } else if (!act && currentStep === 0) {
            setShowGoBack(true);
            if (!act && showGoBack) {
                navigation.goBack();
            }
        }
    }

    // list of interest and favorite subject
    const interestList = ['Nghệ thuật', 'Âm nhạc', 'Thể thao', 'Khoa học', 'Công nghệ', 'Phim ảnh', 'Nấu ăn', 'Toán', 'Văn học', 'Khác'];
    const favoriteList = ['Cà chua', 'Hoa cúc', 'Cây trầu bà', 'Hoa hồng', 'Cây kim tiền', 'Hoa lan', 'Sen đá', 'Xương rồng', 'Cây lưỡi hổ', 'Khác'];
    useEffect(() => {
        console.log(interest);
    }, [interest])

    function inputBox() {
        switch (currentStep) {
            case 0:
                return (
                    <BoardingInput
                        title='Tuổi của bạn'
                        placeholder='Nhập ở đây'
                        value={age}
                        isNumber={true}
                        onChgText={setAge as React.Dispatch<React.SetStateAction<string | number>>}
                    />)
                break;
            case 1:
                return (
                    <View style={[styles.flexCol, styles.gap4vw, styles.justifyContentCenter, styles.alignContentStart]}>
                        <Nunito24Bold style={[{ color: clrStyle.main2 }]}>Cùng chia sẻ</Nunito24Bold>
                        <Nunito20Bold style={[{ color: clrStyle.grey1 }]}>Sở thích của bạn<Nunito14Reg style={{ color: clrStyle.grey1 }}>/tối đa ba lựa chọn</Nunito14Reg></Nunito20Bold>
                        <BoardingPicking
                            data={interestList}
                            selected={interest}
                            maxLength={3}
                            setSelected={setInterest as React.Dispatch<React.SetStateAction<string[]>>}
                        />
                    </View>
                )
                break;
            case 2:
                return (
                    <View style={[styles.flexCol, styles.gap4vw, styles.justifyContentCenter, styles.alignContentStart]}>
                        <Nunito24Bold style={[{ color: clrStyle.main2 }]}>Cùng chia sẻ</Nunito24Bold>
                        <Nunito20Bold style={[{ color: clrStyle.grey1 }]}>Loại cây trồng ưa thích <Nunito14Reg style={{ color: clrStyle.grey1 }}>/tối đa ba lựa chọn</Nunito14Reg></Nunito20Bold>
                        <BoardingPicking
                            data={favoriteList}
                            selected={favorite}
                            maxLength={3}
                            setSelected={setFavorite as React.Dispatch<React.SetStateAction<string[]>>}
                        />
                    </View>
                )
                break;
            case 3:
                return (
                    <View style={[styles.flexCol, styles.gap4vw, styles.justifyContentCenter, styles.alignContentStart]}>
                        <Nunito24Bold style={[{ color: clrStyle.main2 }]}>Cùng chia sẻ</Nunito24Bold>
                        <Nunito20Bold style={[{ color: clrStyle.grey1 }]}>Nghề nghiệp của bạn <Nunito14Reg style={{ color: clrStyle.grey1 }}>/không bắt buộc</Nunito14Reg></Nunito20Bold>
                        <BoardingInput
                            CustomStyleClass={[styles.margin2vw]}
                            title=''
                            placeholder='Nhập ở đây'
                            value={Job}
                            onChgText={setJob as React.Dispatch<React.SetStateAction<string | number>>}
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
                <ViewRowBetweenCenter style={[styles.gap2vw]}>
                    <Nunito24Reg style={[styles.flex1, { color: clrStyle.main2 }]}>Trước khi bắt đầu,{'\n'}hãy tìm hiểu nhau</Nunito24Reg>
                    <TouchableOpacity onPress={() => navigation.navigate('BottomTab' as never)}>
                        <Nunito18Reg color={clrStyle.grey1}>Bỏ qua</Nunito18Reg>
                    </TouchableOpacity>
                </ViewRowBetweenCenter>

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
                        bgBarColor={clrStyle.grey2}
                        bgProcessColor={clrStyle.main2} />

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