// system import
import React, { Component, ComponentType, useState } from 'react';
import { ImageBackground, Platform, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View, Image, ImageStyle, StatusBarStyle, ReturnKeyType, KeyboardType, FlatList, TextInputProps, Animated, Easing, TouchableOpacityProps, ViewProps, ViewStyle } from 'react-native';

// style import
import styles from './stylesheet';
import { vw, vh } from './stylesheet';

// component import
import { marginBottomForScrollView } from './component';

// svg import
import * as SVG from './svgXml';
import clrStyle, { NGHIASTYLE } from './componentStyleSheet';
import { useNavigation } from '@react-navigation/native';
import { CurrentCache } from '../data/store';
import * as FormatData from '../data/interfaceFormat';
import * as CTEXT from './CustomText';
import { SvgXml } from 'react-native-svg';

// other import


// ____________________END OF IMPORT_______________________

// ____________________START OF UNIVERSAL CLASS_______________________


/**
 * Component that renders a view with a colored status bar.
 *
 * @component
 * @example
 * // Usage:
 * <SaveViewWithColorStatusBar
 *   StatusBarColor="#FF0000"
 *   StatusBarLightContent={true}
 *   SameColorBottom={true}
 *   StatusBarMargin={true}
 *   bgColor="#FFFFFF"
 *   StatusBarTranslucent={false}
 * >
 *   // Content goes here
 * </SaveViewWithColorStatusBar>
 *
 * @param {React.ReactNode} children - The content to be rendered inside the component.
 * @param {string} StatusBarColor - The color of the status bar.
 * @param {boolean} StatusBarLightContent - Determines if the status bar content should be light or dark.
 * @param {boolean} SameColorBottom - Determines if the bottom of the view should have the same color as the status bar.
 * @param {boolean} StatusBarMargin - Determines if a margin should be added to the top of the view to accommodate the status bar.
 * @param {string} bgColor - The background color of the view.
 * @param {boolean} StatusBarTranslucent - Determines if the status bar should be translucent.
 *
 * @returns {React.ReactNode} The rendered component.
 */
export class SaveViewWithColorStatusBar extends Component<{ children?: React.ReactNode, StatusBarColor?: string, StatusBarLightContent?: boolean, SameColorBottom?: boolean, StatusBarMargin?: boolean, bgColor?: string, StatusBarTranslucent?: boolean }> {
    render() {
        const { children, bgColor, SameColorBottom, StatusBarColor, StatusBarLightContent, StatusBarMargin, StatusBarTranslucent } = this.props;
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <SafeAreaView style={[styles.flex1, { backgroundColor: SameColorBottom ? StatusBarColor : bgColor }]}>
                {StatusBarColor ? <View style={[styles.w100vw, styles.h50vh, styles.positionAbsolute, { backgroundColor: StatusBarColor }]} /> : null}
                <View>
                    <StatusBar barStyle={StatusBarLightContent ? 'light-content' : 'dark-content'}
                        backgroundColor={StatusBarColor ? StatusBarColor : 'rgba(0,0,0,0)'}
                        translucent={StatusBarTranslucent ? true : false}
                    />
                    {StatusBarMargin ? <View style={{ width: vw(100), height: statusBarHeight }}></View> : null}
                </View>
                <View style={[styles.flex1, { backgroundColor: bgColor ? bgColor : 'rgb(242,242,242)' }]}>
                    {children}
                </View>
            </SafeAreaView>
        )
    }
}

export class ViewRow extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexRow, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewCol extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexCol, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexRowCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexColCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowBetweenCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexRowBetweenCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColBetweenCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexColBetweenCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowEvenlyCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexRowEvenlyCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColEvenlyCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexColEvenlyCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColEndCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexColEndCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowStartCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexRowStartCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColStartCenter extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexColStartCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColStartBetween extends Component<{ children?: React.ReactNode, style?: ViewStyle[] }> {
    render() {
        return (
            <View style={[styles.flexCol, styles.justifyContentSpaceBetween, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

// ____________________END OF UNIVERSAL CLASS_______________________

// ____________________START OF FONT_______________________

// END OF UNIVERSAL CLASS SECTION


/**
 * A React component that renders a customizable status bar and its content.
 * 
 * @remarks
 * This component is designed to work with both Android and iOS platforms.
 * It allows customization of the status bar's color, content style, and translucency.
 * Additionally, it provides an option to add a margin below the status bar on Android devices.
 * 
 * @param barColor - Optional. The color of the status bar background.
 * @param trans - Optional. If true, the status bar will be translucent.
 * @param children - Optional. The content to be rendered below the status bar.
 * @param bgColor - Optional. The background color of the view containing the status bar and its content.
 * @param barContentStyle - Optional. The style of the status bar content (e.g., 'dark-content', 'light-content').
 * @param notMargin - Optional. If true, no margin will be added below the status bar on Android devices.
 * 
 * @returns A React node containing the status bar and its content.
 */
export class SSBar extends Component<{ barColor?: any, trans?: boolean, children?: React.ReactNode, bgColor?: any, barContentStyle?: StatusBarStyle, notMargin?: boolean }> {
    render(): React.ReactNode {
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <View style={[styles.flex1, { backgroundColor: this.props.bgColor ? this.props.bgColor : clrStyle.white }]}>
                <>
                    <StatusBar
                        barStyle={this.props.barContentStyle ? this.props.barContentStyle : 'dark-content'}
                        translucent={this.props.trans ? true : false}
                        backgroundColor={this.props.barColor ? this.props.barColor : 'white'} />
                    {Platform.OS === 'android' && !this.props.notMargin ? <View style={{ height: statusBarHeight * 1.5 }}></View> : null}
                </>
                {this.props.children}
            </View>
        )
    }
}

export class SSBarWithSaveArea extends Component<{ barColor?: any, trans?: boolean, children?: React.ReactNode, bgColor?: any, barContentStyle?: StatusBarStyle, margin?: boolean }> {
    render(): React.ReactNode {
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <SafeAreaView style={[styles.flex1, { backgroundColor: this.props.bgColor ? this.props.bgColor : clrStyle.white }]}>
                <StatusBar
                    barStyle={this.props.barContentStyle ? this.props.barContentStyle : 'dark-content'}
                    translucent={this.props.trans ? true : false}
                    backgroundColor={this.props.barColor ? this.props.barColor : 'white'} />
                {Platform.OS === 'android' && this.props.margin ? <View style={{ height: statusBarHeight }}></View> : null}
                {this.props.children}
            </SafeAreaView>
        )
    }
}

/**
 * A React component that renders a customizable round button.
 *
 * @component
 * @example
 * ```tsx
 * <RoundBtn
 *   icon={<SomeIcon />}
 *   title="Click Me"
 *   onPress={() => console.log('Button pressed')}
 *   bgColor="#ff0000"
 *   textClass={CustomTextComponent}
 *   textColor="#ffffff"
 *   iconColor="#000000"
 *   border={true}
 *   borderColor="#00ff00"
 *   customStyle={{ margin: 10 }}
 * />
 * ```
 *
 * @prop {React.ReactNode} [icon] - The icon to display inside the button.
 * @prop {string} [title] - The text to display inside the button.
 * @prop {() => void} onPress - The function to call when the button is pressed.
 * @prop {string} [bgColor] - The background color of the button.
 * @prop {React.ComponentType<any>} [textClass] - The custom text component to use for the button text.
 * @prop {string} [textColor] - The color of the button text.
 * @prop {string} [iconColor] - The color of the icon.
 * @prop {boolean} [border] - Whether the button should have a border.
 * @prop {string} [borderColor] - The color of the border.
 * @prop {any} [customStyle] - Additional custom styles for the button.
 */
export class RoundBtn extends Component<{
    icon?: React.ReactNode
    title?: string
    onPress: () => void
    bgColor?: string
    textClass?: React.ComponentType<any>
    textColor?: string
    iconColor?: string
    border?: boolean
    borderColor?: string
    customStyle?: any
    otherTouchProps?: TouchableOpacityProps
}> {
    render() {
        const { icon, title, onPress, bgColor, textClass, textColor, iconColor, border, borderColor, customStyle, otherTouchProps } = this.props;
        let TextClass = textClass ? textClass : Text
        return (
            <TouchableOpacity
                onPress={onPress}
                {...otherTouchProps}
                style={[styles.flexRow, styles.alignItemsCenter, styles.padding4vw, styles.gap3vw, styles.borderRadius10, styles.overflowHidden, { backgroundColor: bgColor ? bgColor : undefined, borderWidth: border ? 1 : 0, }, customStyle]}>
                {icon ? icon : null}
                <TextClass style={[{ color: textColor ? textColor : clrStyle.black as string }]}>{title}</TextClass>
            </TouchableOpacity>
        );
    }
}

/**
 * A React component that renders a customizable search box.
 * 
 * @class SearchBox
 * @extends {Component}
 * 
 * @prop {any} [customStyle] - Custom styles to be applied to the search box.
 * @prop {string} [placeholder] - Placeholder text for the search input.
 * @prop {any} [placeholderTextColor] - Color of the placeholder text.
 * @prop {string} value - The current value of the search input.
 * @prop {(input: any) => void} [onChangeText] - Callback function to handle text changes in the search input.
 * @prop {() => void} [onClear] - Callback function to handle clearing the search input.
 * @prop {boolean} [showSearchIcon] - Flag to show or hide the search icon.
 * @prop {string} [fontFam] - Font family to be used for the search input text.
 * @prop {CurrentCache} [currentCache] - Cache object for current search context.
 * 
 * @method render
 * Renders the search box component.
 * 
 * @function searchEngine
 * An asynchronous function to perform search operations.
 * 
 * @param {string} keyword - The keyword to search for.
 * @param {any} dataBank - The data bank to search within.
 * @param {'set' | 'desk' | 'card'} type - The type of search to perform.
 * 
 * @returns {Promise<any[]>} - A promise that resolves to an array of search results.
 */
export class SearchBox extends Component<{
    customStyle?: any
    placeholder?: string
    placeholderTextColor?: any
    value: string
    onChangeText?: (input: any) => void
    onClear?: () => void
    showSearchIcon?: boolean
    icon?: any
    fontFam?: string
    currentCache?: CurrentCache
}> {
    render() {
        async function searchEngine(keyword: string, dataBank: any, type: 'set' | 'desk' | 'card') {
            keyword = value.trim();
            // keyword = keyword.trim();
            let result: any = [];
            const regex = new RegExp(`\\b${keyword}`, 'i');

            if (keyword === '') {
                return [];
            }
        }

        const { customStyle, placeholder, placeholderTextColor, value, onChangeText, onClear, showSearchIcon, fontFam } = this.props;
        return (
            <ViewRowBetweenCenter
                style={[styles.gap3vw, styles.borderRadius10, styles.paddingH4vw, { backgroundColor: clrStyle.white, borderColor: clrStyle.black }, customStyle]}>
                {showSearchIcon ? this.props.icon ? this.props.icon : SVG.searchIcon(vw(5), vw(5), clrStyle.black) : null}
                <TextInput
                    style={[styles.flex1, styles.paddingV2vw, { color: clrStyle.black as string, fontSize: vw(3.5), fontFamily: fontFam ? fontFam : undefined }]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder ? placeholder : 'Search'}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : ''}
                />
                <TouchableOpacity
                    onPress={onClear}
                    style={{ display: value ? 'flex' : 'none' }}
                >
                    {SVG.xIcon(vw(5), vw(5), clrStyle.black)}
                </TouchableOpacity>
            </ViewRowBetweenCenter>
        );
    }
}

interface SearchBoxState {
    showSearch: boolean;
    searchInput: string;

}

// export class BoardingInput extends Component<{
//     title: string,
//     supFncTitle?: string,
//     supFncTitleColor?: string,
//     supFnc?: () => void,
//     subTitle?: string,
//     placeholder?: string,
//     value: string | number,
//     isNumber?: boolean,
//     onChgText: (value: string | number) => void,
//     CustomStyleClass?: any,
//     CustomStyleText?: any,
//     CustomStyleInput?: any,
//     contentType?: string
//     hideContent?: boolean,
//     hideContentFnc?: (value: boolean) => void,
//     autoCap?: 'none' | 'characters' | 'words' | 'sentences',
//     maxLength?: number,
//     activeColor?: string,
//     passiveColor?: string,
//     tileColor?: string,
// }> {

//     render() {
//         const { title, placeholder, value, onChgText, CustomStyleClass, CustomStyleInput, CustomStyleText, contentType, subTitle, supFnc, supFncTitle, hideContent, hideContentFnc, autoCap, maxLength, supFncTitleColor, activeColor, passiveColor, tileColor } = this.props;
//         const isNumber = this.props.isNumber ? this.props.isNumber : false;

//         function changFnc(value: string | number) {
//             if (isNumber) {
//                 onChgText(parseInt(value as string));
//             } else {
//                 onChgText(value);
//             }
//         }

//         return (
//             <View style={[styles.flexColCenter, styles.gap4vw, styles.positionRelative, CustomStyleClass]}>
//                 {title ?
//                     <Nunito24Bold style={[{ color: tileColor }, CustomStyleText]}>{title}</Nunito24Bold>
//                     : null}
//                 <TextInput
//                     placeholder={placeholder ? placeholder : 'Type here'}
//                     value={value ? value.toString() : ''}
//                     onChangeText={changFnc}
//                     placeholderTextColor={passiveColor as string}
//                     secureTextEntry={hideContent ? hideContent : false}
//                     keyboardType={isNumber ? 'numeric' : 'default'}
//                     autoCapitalize={autoCap ? autoCap : 'sentences'}
//                     textContentType={contentType as TextInputProps['textContentType']}
//                     maxLength={maxLength ? maxLength : undefined}
//                     style={[styles.w100, styles.border1, styles.textCenter, { borderColor: value ? activeColor : passiveColor, padding: vw(2.5), fontFamily: value ? 'Nunito-Bold' : 'Nunito-Regular', fontSize: vw(4.5), borderRadius: vw(2), color: value ? activeColor : passiveColor }, CustomStyleInput]} />
//                 {hideContentFnc ?
//                     <TouchableOpacity
//                         onPress={() => { hideContentFnc && hideContentFnc(!hideContent) }}
//                         style={[styles.padding2vw, styles.positionAbsolute, { bottom: -vw(12) }]}>
//                         <Nunito14Reg style={{ color: activeColor }}>{hideContent ? `Show ${contentType}` : `Hide ${contentType}`}</Nunito14Reg>
//                     </TouchableOpacity>
//                     : null}
//                 {subTitle ?
//                     <View style={[styles.flexRowCenter]}>
//                         <Nunito16Reg style={[{ color: passiveColor }]}>{subTitle}</Nunito16Reg>
//                         <TouchableOpacity onPress={supFnc}><Nunito16Reg style={[styles.textUnderline, { color: supFncTitleColor ? supFncTitleColor : clrStyle.black }]}>{supFncTitle}</Nunito16Reg></TouchableOpacity>
//                     </View>
//                     : null
//                 }
//             </View>
//         );
//     }
// }

export class ProcessBarSelfMade extends Component<{
    barLength: number,
    currentStep: number,
    setCurrentStep: (value: number) => void,
    totalStep: number,
    barHeight?: number,
    bgBarColor?: string,
    bgProcessColor?: string,
    customBarStyle?: any,
    customProcessStyle?: any,
    round?: number,
    onStartedProcess?: boolean,
}> {
    render() {
        const { barLength, currentStep, setCurrentStep, totalStep, bgBarColor, bgProcessColor, customBarStyle, customProcessStyle, barHeight, onStartedProcess, round } = this.props;
        const process = (currentStep + (onStartedProcess ? 1 : 0)) / totalStep - (onStartedProcess ? 0 : 1);
        const animation = new Animated.Value(process);
        const inputRange = Array.from({ length: totalStep - (onStartedProcess ? 0 : 1) }, (_, i) => i / (totalStep - 1));
        const outputRange = Array.from({ length: totalStep - (onStartedProcess ? 0 : 1) }, (_, i) => i * barLength / (totalStep - 1));

        const processAnimationRange = animation.interpolate({
            inputRange: inputRange,
            outputRange: outputRange,
        });

        function extendAnimate() {
            Animated.timing(animation, {
                toValue: process,
                duration: 1000,
                useNativeDriver: false,
                easing: Easing.inOut(Easing.ease),
            }).start()
        }
        extendAnimate()

        return (
            <View style={[styles.overflowHidden, { width: barLength, backgroundColor: bgBarColor ? bgBarColor : 'gray', borderRadius: round }, customBarStyle]}>
                <Animated.View style={[styles.w100, { width: processAnimationRange, height: barHeight ? barHeight : vw(3), backgroundColor: bgProcessColor ? bgProcessColor : 'black', borderRadius: round, }, customProcessStyle]} ></Animated.View>
            </View>
        )
    }
}

// export class SectionTitleAndRightArrow extends Component<{
//     title: string,
//     titleFontClass?: ComponentType<{ children: React.ReactNode }>,
//     fnc: () => void,
//     titleColor?: string,
//     arrowColor?: string,
// }> {
//     render() {
//         const { title, fnc, titleColor, arrowColor } = this.props;
//         const TitleFontClass = this.props.titleFontClass ? this.props.titleFontClass : Inter16Bold;
//         return (
//             <ViewRowBetweenCenter style={[styles.paddingH6vw, styles.paddingV2vw]}>
//                 <TitleFontClass style={[{ color: titleColor ? titleColor : clrStyle.black }]}>{title}</TitleFontClass>
//                 <TouchableOpacity onPress={fnc}>
//                     {SVG.sharpRightArrow(vw(6), vw(6), arrowColor ? arrowColor : clrStyle.black)}
//                 </TouchableOpacity>
//             </ViewRowBetweenCenter>
//         )
//     }
// }

// export class TopNav3ItemWithTitle extends Component<{
//     title: string,
//     icon: any,
//     fnc: () => void,
//     customStyle?: any,
//     nav: any,
// }> {
//     render() {
//         const { title, icon, fnc, customStyle, nav } = this.props;
//         return (
//             <ViewRowBetweenCenter style={[styles.w100, styles.paddingH6vw]}>
//                 <TouchableOpacity onPress={() => nav.goBack()}>
//                     {SVG.sharpLeftArrow(vw(6), vw(6), clrStyle.black)}
//                 </TouchableOpacity>
//                 <Inter20Bold style={[styles.paddingH2vw, styles.textCenter, { color: clrStyle.black }]}>{title}</Inter20Bold>
//                 <TouchableOpacity onPress={fnc} style={[styles.padding2vw]}>
//                     {icon}
//                 </TouchableOpacity>
//             </ViewRowBetweenCenter>
//         )
//     }
// }


// export const Input: React.FC<{
//     value: string
//     onChange: (text: string) => void
//     placeHolder?: string
//     icon?: any
//     otherOption?: TextInputProps
// }> = ({ value, onChange, placeHolder, icon, otherOption }) => {
//     return (
//         <ViewRowStartCenter style={[styles.border2, styles.borderRadius2vw, styles.paddingV2vw, styles.paddingH4vw, { borderColor: getColor('Grey/40') }]}>
//             {icon}
//             <TextInput
//                 placeholderTextColor={getColor('Grey/100')}
//                 onChangeText={onChange}
//                 placeholder={placeHolder}
//                 style={[styles.padding2vw, styles.marginLeft2vw, styles.flex1,]}
//                 {...otherOption}
//             >
//                 <CTEXT.Be16Reg style={{ color: clrStyle.black }}>{value}</CTEXT.Be16Reg>
//             </TextInput>
//         </ViewRowStartCenter>
//     )
// }

export class LowBtn extends Component<{
    title: string,
    onPress: () => void,
    bgColor?: string,
    fontColor?: string,
    icon?: any,
    round?: number,
    CustomStyle?: any,
    FontElement?: ComponentType<{ children: React.ReactNode }>,
}> {
    render() {
        const { title, onPress, bgColor, fontColor, icon, round, CustomStyle, FontElement } = this.props;
        const Font = FontElement ? FontElement : CTEXT.Roboto16Bold;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.flexRowCenter, styles.gap3vw, styles.borderRadius100, styles.shadowW0H1Black, styles.w90, styles.alignSelfCenter, { backgroundColor: bgColor ? bgColor : clrStyle.main2, padding: vw(3.75), borderRadius: round ? round : vw(1000) }, CustomStyle ? CustomStyle : null]}>
                {icon ? icon : null}
                <Font style={{ color: fontColor ? fontColor : clrStyle.white, }}>{title}</Font>
            </TouchableOpacity>
        );
    }
}

export class BoardingInput extends Component<{
    title: string,
    supFncTitle?: string,
    supFncTitleColor?: string,
    supFnc?: () => void,
    subTitle?: string,
    placeholder?: string,
    value: string | number,
    isNumber?: boolean,
    onChgText: (value: string | number) => void,
    CustomStyleClass?: any,
    CustomStyleText?: any,
    CustomStyleInput?: any,
    contentType?: string
    hideContent?: boolean,
    hideContentFnc?: (value: boolean) => void,
    autoCap?: 'none' | 'characters' | 'words' | 'sentences',
    maxLength?: number,
}> {

    render() {
        const { title, placeholder, value, onChgText, CustomStyleClass, CustomStyleInput, CustomStyleText, contentType, subTitle, supFnc, supFncTitle, hideContent, hideContentFnc, autoCap, maxLength, supFncTitleColor } = this.props;
        const isNumber = this.props.isNumber ? this.props.isNumber : false;

        function changFnc(value: string | number) {
            if (isNumber) {
                onChgText(parseInt(value as string));
            } else {
                onChgText(value);
            }
        }

        return (
            <View style={[styles.flexColCenter, styles.gap4vw, styles.positionRelative, CustomStyleClass]}>
                {title ?
                    <CTEXT.Nunito24Bold style={[{ color: clrStyle.main2 }, CustomStyleText]}>{title}</CTEXT.Nunito24Bold>
                    : null}
                <TextInput
                    placeholder={placeholder ? placeholder : 'Type here'}
                    value={value ? value.toString() : ''}
                    onChangeText={changFnc}
                    placeholderTextColor={clrStyle.grey1}
                    secureTextEntry={hideContent ? hideContent : false}
                    keyboardType={isNumber ? 'numeric' : 'default'}
                    autoCapitalize={autoCap ? autoCap : 'sentences'}
                    textContentType={contentType as TextInputProps['textContentType']}
                    maxLength={maxLength ? maxLength : undefined}
                    style={[styles.w100, styles.border1, styles.textCenter, { borderColor: value ? clrStyle.main2 : clrStyle.grey1, padding: vw(2.5), fontFamily: value ? 'Nunito-Bold' : 'Nunito-Regular', fontSize: vw(4.5), borderRadius: vw(2), color: value ? clrStyle.main2 : clrStyle.grey2 }, CustomStyleInput]} />
                {hideContentFnc ?
                    <TouchableOpacity
                        onPress={() => { hideContentFnc && hideContentFnc(!hideContent) }}
                        style={[styles.padding2vw, styles.positionAbsolute, { bottom: -vw(12) }]}>
                        <CTEXT.Nunito14Reg style={{ color: clrStyle.grey2 }}>{hideContent ? `Show ${contentType}` : `Hide ${contentType}`}</CTEXT.Nunito14Reg>
                    </TouchableOpacity>
                    : null}
                {subTitle ?
                    <View style={[styles.flexRowCenter]}>
                        <CTEXT.Nunito16Reg style={[{ color: clrStyle.grey2 }]}>{subTitle}</CTEXT.Nunito16Reg>
                        <TouchableOpacity onPress={supFnc}><CTEXT.Nunito16Reg style={[styles.textUnderline, { color: supFncTitleColor ? supFncTitleColor : clrStyle.grey2 }]}>{supFncTitle}</CTEXT.Nunito16Reg></TouchableOpacity>
                    </View>
                    : null
                }
            </View>
        );
    }
}

export class BoardingNavigation extends Component<{
    fnc: (value: boolean) => void,
    leftTitle: string,
    rightTitle: string,
    showGoBack: boolean,
    currentStep: number,
    dataLength: number,
}> {
    render() {
        const { fnc, leftTitle, rightTitle, showGoBack, currentStep, dataLength } = this.props;

        return (
            <View style={[styles.flexRowBetweenCenter, styles.marginTop2vw, styles.marginBottom8vw]}>
                <TouchableOpacity
                    onPress={() => { fnc(false) }}>
                    <View style={[styles.borderRadius100, styles.wfit, { padding: vw(2.5), backgroundColor: currentStep > 0 ? clrStyle.white2 : clrStyle.grey2 }]}>
                        {showGoBack ?
                            <CTEXT.Nunito16Reg style={[styles.textUpperCase, styles.paddingH2vw, { color: clrStyle.black }]}>{leftTitle}</CTEXT.Nunito16Reg>
                            :
                            SVG.sharpLeftArrow(vw(6), vw(6), currentStep > 0 ? clrStyle.main2 : clrStyle.white)}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { fnc(true) }}>
                    <View style={[styles.borderRadius100, styles.wfit, { padding: vw(2.5), backgroundColor: currentStep < dataLength - 1 ? clrStyle.main1 : clrStyle.main2 }]}>
                        {currentStep < dataLength - 1 ?
                            SVG.sharpRightArrow(vw(6), vw(6), currentStep < dataLength - 1 ? clrStyle.main2 : clrStyle.grey2)
                            :
                            <CTEXT.Nunito16Bold style={[styles.textUpperCase, styles.paddingH2vw, { color: clrStyle.white }]}>{rightTitle}</CTEXT.Nunito16Bold>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export class BoardingPicking extends Component<{
    data: string[],
    selected: string[],
    setSelected: (value: string[]) => void,
    maxLength?: number | undefined,
    deleteFromOriginal?: string[],
    deleteFromOtherSelected1?: string,
    deleteFromOriginalFnc?: (value: string[]) => void,
    deleteFromOtherSelectedFnc1?: (value: string) => void,
    originalData?: string[],
}> {
    render() {
        const { data, selected, setSelected, maxLength, originalData, deleteFromOriginal, deleteFromOriginalFnc, deleteFromOtherSelected1, deleteFromOtherSelectedFnc1 } = this.props;
        const length = maxLength ? maxLength : data.length;
        return (
            <View style={[styles.flexRowStartCenter, styles.flexWrap, styles.gap4vw]}>
                {data.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                if (selected.includes(item)) {
                                    setSelected(selected.filter((value) => value !== item))
                                    if (deleteFromOriginal && deleteFromOriginalFnc && !originalData?.includes(item)) {
                                        deleteFromOriginalFnc(deleteFromOriginal.filter((value) => value !== item))
                                    }
                                    if (deleteFromOtherSelected1 && deleteFromOtherSelectedFnc1) {
                                        if (deleteFromOtherSelected1.includes(`${item},`)) {
                                            deleteFromOtherSelectedFnc1(deleteFromOtherSelected1.replace(`${item},`, ''))
                                        } else {
                                            deleteFromOtherSelectedFnc1(deleteFromOtherSelected1.replace(item, ''))
                                        }
                                    }
                                } else {
                                    if (selected.length < length!) {
                                        setSelected([...selected, item])
                                    }
                                };
                            }}
                            style={[styles.wfit, styles.paddingV2vw, styles.paddingH4vw, styles.border1, { borderColor: selected.includes(item) ? clrStyle.main2 : clrStyle.grey1, borderRadius: vw(2), }]}>
                            {selected.includes(item) ?
                                <CTEXT.Nunito14ExBold style={[{ color: clrStyle.main2 }]}>{item}</CTEXT.Nunito14ExBold>
                                :
                                <CTEXT.Nunito14Reg style={[{ color: clrStyle.grey1 }]}>{item}</CTEXT.Nunito14Reg>
                            }
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

export class TopNav extends Component<{
    children?: React.ReactNode,
    title?: string,
    returnPreScreen?: boolean,
    returnPreScreenFnc?: () => void,
    rightIcon?: any,
    rightFnc?: () => void,
    hideChildren?: any,
    leftIcon?: any,
}> {
    render() {
        const { children, title, returnPreScreen, returnPreScreenFnc, rightIcon, rightFnc, hideChildren, leftIcon } = this.props;
        return (
            <>
                <Animated.View style={[styles.paddingH4vw, styles.paddingBottom4vw, styles.paddingTop2vw, styles.overflowHidden, { zIndex: 1, borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6), }]}>
                    <View style={[styles.paddingTop2vw, styles.w100, styles.flexRowBetweenCenter]}>
                        {returnPreScreen ?
                            <TouchableOpacity
                                style={[styles.padding2vw]}
                                onPress={returnPreScreenFnc}>
                                {leftIcon ? leftIcon(vw(6), vw(6), clrStyle.grey1) : SVG.sharpLeftArrow(vw(6), vw(6), clrStyle.grey1)}
                            </TouchableOpacity>
                            : <View style={[{ width: vw(10), height: vw(10), }]} />
                        }
                        {title ? <CTEXT.Nunito22Bold style={[styles.textCenter, styles.alignSelfCenter, { color: clrStyle.main2 }]}>{title}</CTEXT.Nunito22Bold> : null}
                        {rightIcon ?
                            <TouchableOpacity
                                style={[styles.padding2vw]}
                                onPress={rightFnc}>
                                {rightIcon}
                            </TouchableOpacity>
                            : <View style={[{ width: vw(10), height: vw(10), }]} />
                        }
                    </View>
                    <Animated.View style={{ height: hideChildren, opacity: hideChildren }}>
                        {children}
                    </Animated.View>
                </Animated.View >
            </>
        )
    }
}

export class BannerSliderWithCenter extends Component<{
    data: any[],
    renderBanner: ({ item, index }: { item: any, index: number }) => React.ReactElement | null,
    currentIndex: number,
    setCurrentIndex: (value: number) => void,
    itemWidth?: number,
    snapToCenter?: boolean,
    customStyle?: any,
    customContainerStyle?: any,
}> {
    render() {
        const { data, renderBanner, currentIndex, setCurrentIndex, itemWidth, snapToCenter, customStyle, customContainerStyle } = this.props;
        const width = itemWidth ?? 1;
        return (
            <FlatList
                data={data}
                renderItem={renderBanner}
                snapToInterval={width}
                snapToAlignment={snapToCenter ? 'center' : 'start'}
                // time to snap to the center
                decelerationRate='fast'
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                // pagingEnabled={false}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width))
                }}
                style={customStyle}
                contentContainerStyle={[styles.flexRowStartCenter, customContainerStyle]}
            />
        )
    }
}

export class NotiBanner extends Component<{ title: string, time: Date }> {
    render(): React.ReactNode {
        return (
            <ViewRowBetweenCenter style={[styles.w100, styles.padding2vw, { borderBottomWidth: 1, borderColor: clrStyle.grey2 }]}>
                <ViewRow style={[styles.flex1]}>
                    <View style={[styles.paddingRight2vw, styles.marginRight2vw, { borderRightWidth: 1, borderColor: clrStyle.grey1 }]}><CTEXT.Nunito14Reg>{this.props.time.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</CTEXT.Nunito14Reg></View>
                    <CTEXT.Nunito14Reg>{this.props.title}</CTEXT.Nunito14Reg>
                </ViewRow>
                {
                    this.props.title.toLowerCase().includes('tưới') ?
                        <SvgXml xml={`<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.43268 22.4028C8.40355 22.4028 8.37441 22.4028 8.34527 22.3936C7.81246 22.2961 7.25882 22.0641 6.70935 21.7115C3.73307 19.7951 1.31042 14.4961 1.31042 9.89312C1.31042 9.49871 1.32707 9.11358 1.36454 8.74237C1.39784 8.40829 1.66425 8.17164 1.96396 8.20412C2.26367 8.24124 2.48012 8.53821 2.44682 8.8723C2.41768 9.1971 2.40103 9.54512 2.40103 9.89776C2.40103 14.111 4.57809 18.946 7.25466 20.6674C7.69173 20.9505 8.12049 21.1315 8.52426 21.2011C8.81981 21.2567 9.01962 21.5676 8.97383 21.8971C8.92804 22.194 8.6991 22.4075 8.43685 22.4075L8.43268 22.4028Z" fill="#CEA12C"/><path d="M1.21898 8.72375C1.41046 6.98371 1.93079 5.60096 2.79662 4.72862C3.99546 3.52219 5.64802 3.44795 7.32556 4.52909C7.86671 4.8771 7.17571 6.20417 6.63457 5.8608C5.48984 5.12303 4.4575 5.12767 3.71656 5.87008C3.11714 6.4733 2.73834 7.54516 2.58849 8.88615C2.49691 9.71673 1.12324 9.57753 1.21898 8.72375Z" fill="#353433"/><path d="M10.6055 10.2921C10.4098 10.2921 10.2225 10.1761 10.1226 9.9673C9.21516 8.06021 8.04547 6.58002 6.82998 5.79584C6.32214 5.47103 6.92988 4.45949 7.37528 4.74718C8.76976 5.64736 10.0852 7.29923 11.0883 9.4012C11.2299 9.69817 11.1258 10.0647 10.8636 10.2225C10.7845 10.2689 10.6971 10.2921 10.6096 10.2921H10.6055Z" fill="#CEA12C"/><path d="M13.3364 12.5611C17.1642 12.5611 20.2672 10.5647 20.2672 8.10199C20.2672 5.63928 17.1642 3.64285 13.3364 3.64285C9.50868 3.64285 6.40567 5.63928 6.40567 8.10199C6.40567 10.5647 9.50868 12.5611 13.3364 12.5611Z" fill="#F7C53F"/><path d="M20.2673 8.06027V25.7112C20.284 26.8666 19.6055 28.0267 18.236 28.9083C15.5302 30.6483 11.1428 30.6483 8.43713 28.9083C7.10092 28.0499 6.42241 26.9223 6.40576 25.7948V8.14379C6.42241 9.27134 7.09676 10.3942 8.43713 11.2573C11.1428 12.9973 15.5302 12.9973 18.236 11.2573C19.6055 10.3757 20.2798 9.21566 20.2673 8.06027Z" fill="url(#paint0_linear_2155_5680)"/><path d="M16.1796 4.57091C13.8526 3.79601 10.918 4.03266 8.96571 5.29013C7.01344 6.5476 6.64297 8.43612 7.84597 9.93024L16.1754 4.57091H16.1796Z" fill="url(#paint1_linear_2155_5680)"/><path opacity="0.8" d="M14.4396 5.68916C12.3208 5.47108 10.073 5.88404 8.43705 6.93271C7.9084 7.27608 7.48381 7.65656 7.15912 8.06489C7.1508 8.70523 7.37975 9.34557 7.84596 9.92558L14.4354 5.68452L14.4396 5.68916Z" fill="#448B8E"/><path d="M29.3292 16.3429L18.1734 22.6488C17.1327 23.1778 17.1744 26.6718 19.0808 25.6556L30.1534 17.9298C30.4989 17.7071 29.6747 16.1202 29.3292 16.3429Z" fill="#CEA12C"/><path d="M29.1753 17.2663C28.6176 16.0413 28.8465 14.6817 29.679 14.1156L29.4459 14.2734C28.6176 14.8395 28.3844 16.1944 28.9422 17.424C29.5375 18.7279 30.7988 19.3914 31.7645 18.9042L31.9976 18.7465C31.0319 19.2337 29.7664 18.5701 29.1753 17.2663Z" fill="#CEA12C"/><path d="M31.9975 18.7464C31.0318 19.2336 29.7663 18.57 29.1752 17.2662C28.58 15.9623 28.8797 14.5053 29.8454 14.0181C30.8112 13.5309 32.0766 14.1944 32.6677 15.4983C33.2629 16.8021 32.9591 18.2591 31.9975 18.7464Z" fill="#F7C53F"/><path d="M32.0806 17.9622C32.1389 18.055 32.1306 18.1618 32.0681 18.2082C32.0057 18.2546 31.9058 18.2174 31.8475 18.1246C31.7892 18.0318 31.7975 17.9251 31.86 17.8787C31.9224 17.8323 32.0223 17.8741 32.0806 17.9622Z" fill="#CEA12C"/><path d="M32.6178 16.8996C32.6427 16.9414 32.6594 16.9924 32.6552 17.0388C32.6511 17.1363 32.5761 17.1873 32.4887 17.1548C32.4429 17.1363 32.4055 17.1038 32.3805 17.062C32.3555 17.0203 32.3389 16.9692 32.343 16.9228C32.3472 16.8254 32.4221 16.7743 32.5095 16.8068C32.5512 16.8207 32.5886 16.8579 32.6178 16.8996Z" fill="#CEA12C"/><path d="M30.9359 18.0505C30.9609 18.0922 30.9776 18.1433 30.9734 18.1897C30.9734 18.2871 30.8943 18.3382 30.8069 18.3057C30.7611 18.2871 30.7236 18.2546 30.6987 18.2129C30.6737 18.1711 30.657 18.1201 30.6612 18.0737C30.6654 17.9762 30.7403 17.9252 30.8277 17.9577C30.8693 17.9716 30.9068 18.0087 30.9359 18.0505Z" fill="#CEA12C"/><path d="M32.2267 15.489C32.285 15.5818 32.2766 15.6885 32.21 15.7349C32.1434 15.7813 32.0477 15.7396 31.9894 15.6514C31.9311 15.5586 31.9395 15.4519 32.0019 15.4055C32.0685 15.3591 32.1684 15.3962 32.2267 15.489Z" fill="#CEA12C"/><path d="M29.8535 17.1178C29.9117 17.2106 29.9034 17.3173 29.841 17.3637C29.7744 17.4101 29.6745 17.373 29.6162 17.2802C29.5579 17.1874 29.5662 17.076 29.6328 17.0343C29.6995 16.9879 29.7952 17.0296 29.8535 17.1178Z" fill="#CEA12C"/><path d="M31.1401 14.5517C31.1651 14.5935 31.1817 14.6445 31.1776 14.6909C31.1734 14.7883 31.0985 14.8394 31.011 14.8069C30.9653 14.7883 30.9278 14.7559 30.9028 14.7141C30.8778 14.6723 30.8612 14.6213 30.8654 14.5749C30.8695 14.4775 30.9444 14.4264 31.0319 14.4589C31.0735 14.4728 31.1109 14.5099 31.1401 14.5517Z" fill="#CEA12C"/><path d="M29.4624 15.7026C29.4873 15.7443 29.504 15.7954 29.4998 15.8418C29.4998 15.9392 29.4207 15.9903 29.3333 15.9578C29.2875 15.9392 29.2501 15.9067 29.2251 15.865C29.2001 15.8232 29.1835 15.7722 29.1876 15.7258C29.1918 15.6283 29.2667 15.5773 29.3541 15.6098C29.3958 15.6237 29.4332 15.6608 29.4624 15.7026Z" fill="#CEA12C"/><path d="M29.9952 14.6399C30.0535 14.7327 30.0493 14.8441 29.9827 14.8858C29.9161 14.9322 29.8162 14.8858 29.7579 14.7977C29.6997 14.7095 29.708 14.5982 29.7704 14.5518C29.837 14.5054 29.9328 14.5471 29.991 14.6353L29.9952 14.6399Z" fill="#CEA12C"/><defs><linearGradient id="paint0_linear_2155_5680" x1="6.40576" y1="19.1362" x2="20.2673" y2="19.1362" gradientUnits="userSpaceOnUse"><stop stop-color="#CEA12C"/><stop offset="1" stop-color="#E5B634"/></linearGradient><linearGradient id="paint1_linear_2155_5680" x1="11.6673" y1="13.0205" x2="11.6673" y2="24.9967" gradientUnits="userSpaceOnUse"><stop stop-color="#CEA12C"/><stop offset="1" stop-color="#E5B634"/></linearGradient></defs></svg>`} />
                        : this.props.title.toLowerCase().includes('bón') ?
                            <SvgXml xml={`<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5481 16.8861L25.9325 10.2685L25.8892 26.1681L14.5009 32.7858L14.5481 16.8861Z" fill="#DFB392"/><path d="M11.8834 9.68681L23.2678 3.06915L25.9322 10.2684L14.5478 16.8861L11.8834 9.68681Z" fill="#EEC39B"/><path d="M11.8874 8.20138L23.2718 1.58765L23.2678 3.06916L11.8834 9.68682L11.8874 8.20138Z" fill="#DFB392"/><path d="M11.243 7.83195L22.6275 1.21429L23.2719 1.58762L11.8875 8.20135L11.243 7.83195Z" fill="#EEC39B"/><path d="M11.8874 8.20137L11.8835 9.6868L14.5479 16.8861L14.5007 32.7857L8.5 29.3197L8.54323 13.42L11.239 9.31348L11.2429 7.83197L11.8874 8.20137Z" fill="#AC8063"/><g style="mix-blend-mode:multiply" opacity="0.3"><path d="M11.5457 9.40382V8.24455L11.4671 8.20132V9.3488L8.72418 13.5182L14.214 16.6856L11.5457 9.40382Z" fill="#9B7A67"/></g><path opacity="0.3" d="M11.978 12.5908L8.72418 13.5182L14.214 16.6856L11.978 12.5908Z" fill="#AC8063"/><g style="mix-blend-mode:multiply" opacity="0.15"><path d="M11.9778 12.5908L14.2138 16.6855L11.5456 9.40375L11.9778 12.5908Z" fill="#9B7A67"/></g><path d="M24.4509 25.0283L16.0255 29.8933V17.7072L24.4509 12.8422V25.0283Z" fill="#EFEBE5"/><path d="M24.4508 25.0285L16.0255 29.8935V28.2155L24.4508 23.3505V25.0285Z" fill="#FFCC5A"/><path d="M17.22 25.5865V25.6965C17.22 25.7201 17.2083 25.7397 17.1847 25.7554L16.7092 26.0305C16.7092 26.0305 16.6817 26.0541 16.6817 26.0659V26.4707C16.6817 26.4707 16.6895 26.4903 16.7092 26.4785L17.1218 26.2388C17.1493 26.2231 17.1611 26.227 17.1611 26.2545V26.3606C17.1611 26.3881 17.1493 26.4078 17.1218 26.4196L16.7092 26.6593C16.7092 26.6593 16.6817 26.6829 16.6817 26.6946V27.2016C16.6817 27.2252 16.6699 27.2448 16.6463 27.2605L16.5127 27.3391C16.4891 27.3548 16.4773 27.347 16.4773 27.3234V26.0187C16.4773 25.9952 16.4891 25.9755 16.5127 25.9598L17.1847 25.5707C17.2083 25.555 17.22 25.5629 17.22 25.5865ZM18.1789 25.3664C18.2378 25.39 18.2654 25.4568 18.2654 25.559V25.8301C18.2654 25.8576 18.2536 25.8773 18.2261 25.8891L17.6523 26.2192C17.6523 26.2192 17.6287 26.2388 17.6287 26.2545V26.3449C17.6287 26.451 17.6798 26.4707 17.7859 26.4117L18.2182 26.1602C18.2457 26.1445 18.2575 26.1523 18.2575 26.1759V26.282C18.2575 26.3056 18.2457 26.3253 18.2182 26.337L17.7545 26.6043C17.6484 26.6671 17.5659 26.6829 17.5108 26.6593C17.4519 26.6357 17.4244 26.5689 17.4244 26.4667V26.0384C17.4244 25.9323 17.4519 25.834 17.5108 25.7437C17.5698 25.6533 17.6523 25.5747 17.7545 25.5157L17.9313 25.4136C18.0374 25.3507 18.12 25.335 18.1789 25.3585V25.3664ZM18.061 25.6886C18.061 25.6336 18.0492 25.6022 18.0256 25.5904C18.0021 25.5786 17.9628 25.5904 17.9077 25.6218L17.7899 25.6886C17.7348 25.7201 17.6955 25.7554 17.672 25.7947C17.6484 25.834 17.6366 25.8812 17.6366 25.9362V26.0738C17.6366 26.0738 17.6445 26.0895 17.6562 26.0816L18.0414 25.8615C18.0414 25.8615 18.061 25.8419 18.061 25.8262V25.6886ZM19.0395 24.7848L18.9609 24.832C18.9098 24.8595 18.8666 24.8988 18.8234 24.942C18.7841 24.9852 18.7566 25.0324 18.7408 25.0756C18.733 25.0795 18.733 25.0009 18.733 25.0009C18.733 24.9774 18.7212 24.9734 18.6976 24.9852L18.564 25.0638C18.5404 25.0795 18.5286 25.0952 18.5286 25.1228V26.1406C18.5286 26.1641 18.5404 26.1681 18.564 26.1563L18.6976 26.0777C18.7212 26.062 18.733 26.0462 18.733 26.0187V25.3389C18.733 25.2092 18.7919 25.111 18.9098 25.0402L19.0395 24.9656C19.0631 24.9577 19.0749 24.9381 19.0749 24.9106V24.8005C19.0749 24.7769 19.0631 24.773 19.0395 24.7848ZM19.7704 25.2721L19.6879 25.3192C19.5818 25.3821 19.5268 25.3585 19.5268 25.2564V24.7062C19.5268 24.7062 19.5347 24.6787 19.5504 24.6708L19.7508 24.5569C19.7783 24.5412 19.7901 24.5215 19.7901 24.5019V24.3918C19.7901 24.3682 19.7783 24.3643 19.7508 24.3761L19.5504 24.4901C19.5504 24.4901 19.5268 24.4979 19.5268 24.4822V24.2897C19.5268 24.2661 19.515 24.2621 19.4914 24.2739L19.3578 24.3525C19.3303 24.3683 19.3185 24.3879 19.3185 24.4115V24.604C19.3185 24.604 19.3107 24.6276 19.2989 24.6394L19.1967 24.6983C19.1731 24.7141 19.1613 24.7298 19.1613 24.7573V24.8673C19.1613 24.8673 19.1613 24.887 19.1692 24.8909C19.1731 24.8909 19.1849 24.8909 19.1967 24.883L19.2989 24.8241C19.2989 24.8241 19.3185 24.8202 19.3185 24.832V25.3939C19.3185 25.5 19.35 25.5629 19.4089 25.5825C19.4678 25.6061 19.5504 25.5825 19.6565 25.5236L19.7704 25.4568C19.7979 25.4411 19.8097 25.4214 19.8097 25.4018V25.2917C19.8097 25.2682 19.7979 25.2642 19.7704 25.276V25.2721ZM20.2184 23.6923L20.0809 23.7709C20.0573 23.7827 20.0455 23.8024 20.0455 23.8259V24.0224C20.0455 24.046 20.0573 24.0539 20.0809 24.0382L20.2184 23.9596C20.242 23.9478 20.2538 23.9281 20.2538 23.9045V23.7081C20.2538 23.6845 20.242 23.6805 20.2184 23.6923ZM20.2184 24.105L20.0809 24.1836C20.0573 24.1953 20.0455 24.215 20.0455 24.2386V25.2564C20.0455 25.2799 20.0573 25.2839 20.0809 25.2721L20.2184 25.1935C20.2184 25.1935 20.242 25.1778 20.2459 25.1699C20.2499 25.1621 20.2538 25.1503 20.2538 25.1385V24.1207C20.2538 24.0971 20.242 24.0932 20.2184 24.105ZM20.7371 23.3897L20.6035 23.4683C20.58 23.4841 20.5682 23.4998 20.5682 23.5273V24.9577C20.5682 24.9813 20.58 24.9852 20.6035 24.9734L20.7371 24.8948C20.7607 24.8791 20.7725 24.8634 20.7725 24.8359V23.4055C20.7725 23.3819 20.7607 23.378 20.7371 23.3897ZM21.2559 23.5037L21.1183 23.5823C21.0948 23.5941 21.083 23.6137 21.083 23.6373V24.6551C21.083 24.6787 21.0948 24.6826 21.1183 24.6708L21.2559 24.5922C21.2559 24.5922 21.2795 24.5765 21.2834 24.5687C21.2873 24.5608 21.2912 24.549 21.2912 24.5372V23.5194C21.2912 23.4958 21.2795 23.4919 21.2559 23.5037ZM21.2559 23.0911L21.1183 23.1697C21.0948 23.1815 21.083 23.2011 21.083 23.2247V23.4212C21.083 23.4448 21.0948 23.4526 21.1183 23.4369L21.2559 23.3583C21.2795 23.3465 21.2912 23.3269 21.2912 23.3033V23.1068C21.2912 23.0832 21.2795 23.0793 21.2559 23.0911ZM22.2776 23.822L21.8021 24.0971L22.2697 23.1343C22.2855 23.1029 22.2973 23.0714 22.2973 23.04V22.9418C22.2973 22.9182 22.2855 22.9143 22.2619 22.926L21.586 23.3151C21.5585 23.3308 21.5467 23.3505 21.5467 23.374V23.4801C21.5467 23.5076 21.5585 23.5116 21.586 23.4959L22.0536 23.2247L21.5585 24.2346C21.5388 24.2739 21.527 24.3093 21.527 24.3447V24.3997C21.527 24.4233 21.5388 24.4272 21.5663 24.4154L22.2776 24.0028C22.3051 23.9871 22.3169 23.9674 22.3169 23.9438V23.8377C22.3169 23.8102 22.3051 23.8063 22.2776 23.822ZM23.2718 22.427C23.3308 22.4505 23.3583 22.5174 23.3583 22.6195V22.8907C23.3583 22.9182 23.3465 22.9378 23.319 22.9496L22.7452 23.2797C22.7452 23.2797 22.7217 23.2994 22.7217 23.3151V23.4055C22.7217 23.5116 22.7728 23.5312 22.8789 23.4723L23.3111 23.2208C23.3386 23.2051 23.3504 23.2129 23.3504 23.2365V23.3426C23.3504 23.3662 23.3386 23.3858 23.3111 23.3976L22.8474 23.6648C22.7413 23.7277 22.6588 23.7434 22.6038 23.7198C22.5448 23.6963 22.5173 23.6295 22.5173 23.5273V23.099C22.5173 22.9928 22.5448 22.8946 22.6038 22.8042C22.6627 22.7138 22.7452 22.6352 22.8474 22.5763L23.0243 22.4741C23.1304 22.4112 23.2129 22.3955 23.2718 22.4191V22.427ZM23.1539 22.7492C23.1539 22.6942 23.1421 22.6628 23.1186 22.651C23.095 22.6392 23.0557 22.651 23.0007 22.6824L22.8828 22.7492C22.8278 22.7806 22.7885 22.816 22.7649 22.8553C22.7413 22.8946 22.7295 22.9418 22.7295 22.9968V23.1343C22.7295 23.1343 22.7374 23.15 22.7492 23.1422L23.1343 22.9221C23.1343 22.9221 23.1539 22.9025 23.1539 22.8867V22.7492ZM24.1324 21.8454L24.0538 21.8925C24.0028 21.92 23.9595 21.9593 23.9163 22.0026C23.877 22.0458 23.8495 22.0929 23.8338 22.1362C23.8259 22.1401 23.8259 22.0615 23.8259 22.0615C23.8259 22.0379 23.8141 22.034 23.7905 22.0458L23.6569 22.1244C23.6334 22.1401 23.6216 22.1558 23.6216 22.1833V23.2011C23.6216 23.2247 23.6334 23.2286 23.6569 23.2168L23.7905 23.1382C23.8141 23.1225 23.8259 23.1068 23.8259 23.0793V22.3995C23.8259 22.2698 23.8849 22.1715 24.0028 22.1008L24.1324 22.0261C24.156 22.0183 24.1678 21.9986 24.1678 21.9711V21.8611C24.1678 21.8375 24.156 21.8336 24.1324 21.8454Z" fill="#62811D"/><path d="M22.7728 18.0768C22.7728 20.0888 21.6647 22.3602 20.2971 23.15C18.9296 23.9399 17.8214 22.9457 17.8214 20.9337C17.8214 18.9216 18.9296 16.6503 20.2971 15.8604C21.6647 15.0705 22.7728 16.0647 22.7728 18.0768Z" fill="#FFCC5A"/><path d="M19.7198 20.6899C19.5744 20.6663 19.1853 20.6349 18.7256 21.0357C19.6373 20.5092 20.1638 20.9336 19.9674 23.036C20.0695 22.8473 20.1953 21.7549 20.1992 21.5702C20.2071 21.0868 20.1481 20.7646 19.7237 20.6899H19.7198Z" fill="#62811D"/><path d="M19.5743 19.0552C19.3896 18.843 19.2088 18.7919 18.9219 18.3125C18.5172 19.2477 18.8198 19.6446 18.9416 19.7547C19.1499 19.9394 19.5861 19.8136 19.759 19.9276C19.7668 19.8411 19.924 19.456 19.5743 19.0552Z" fill="url(#paint0_linear_2155_5720)"/><path d="M19.9554 20.2852C19.9554 20.2852 19.9358 20.3245 19.9201 20.3284C19.8375 20.3638 19.9986 19.6879 20.034 19.5896C20.2659 18.8901 21.0164 18.1867 21.0322 17.4047C21.0872 18.2378 20.3169 18.8705 20.144 19.6525C20.0458 20.1044 20.1362 20.0415 19.9593 20.2852H19.9554Z" fill="#719020"/><path d="M22.3171 19.8098C22.325 19.6133 22.2582 19.1142 21.8809 19.1182C21.7787 19.1182 20.926 19.5701 20.8867 19.6251C20.812 19.7233 20.6273 19.9159 20.6627 19.9748C20.6941 20.0259 20.7688 20.0534 20.816 20.0888C20.8671 20.1242 20.9103 20.1674 20.9692 20.191C21.0124 20.2067 21.1146 19.9355 21.1736 19.9159C21.2522 19.8923 21.7787 19.4443 22.3171 19.8098Z" fill="#62811D"/><path d="M20.3836 21.6761C20.3483 21.7507 20.3915 21.7193 20.305 21.7507C20.2147 21.7822 20.2343 21.7271 20.2422 21.6564C20.2579 21.5346 20.3797 20.6818 20.5723 20.0059C20.6312 19.7937 20.7766 19.5737 20.9574 19.4322C21.3228 19.1532 21.7748 19.0746 22.0223 19.1414C21.2678 19.4636 20.4976 21.4363 20.3797 21.68L20.3836 21.6761Z" fill="url(#paint1_linear_2155_5720)"/><path d="M19.7314 19.9276C19.4366 19.3185 19.7117 18.4186 20.0104 17.7702C20.2776 17.1886 20.5998 16.497 20.3994 16.1276C20.6274 16.3241 20.5291 16.8074 20.2383 17.4912C19.9318 18.2104 19.6371 19.0827 19.8728 19.5897C20.4112 20.7568 20.3876 20.9376 20.5566 22.6667C20.5684 22.981 19.9239 23.3386 19.9436 23.0321C19.9947 22.6588 20.2108 20.9337 19.7314 19.9316V19.9276Z" fill="url(#paint2_linear_2155_5720)"/><defs><linearGradient id="paint0_linear_2155_5720" x1="46.5003" y1="1.27404" x2="47.906" y2="2.66247" gradientUnits="userSpaceOnUse"><stop stop-color="#B3C94B"/><stop offset="0.42" stop-color="#91AC34"/><stop offset="0.77" stop-color="#7C9A26"/><stop offset="1" stop-color="#759421"/></linearGradient><linearGradient id="paint1_linear_2155_5720" x1="56.4475" y1="0.505702" x2="57.0361" y2="3.90676" gradientUnits="userSpaceOnUse"><stop stop-color="#B3C94B"/><stop offset="0.42" stop-color="#91AC34"/><stop offset="0.77" stop-color="#7C9A26"/><stop offset="1" stop-color="#759421"/></linearGradient><linearGradient id="paint2_linear_2155_5720" x1="54.812" y1="0.847847" x2="56.368" y2="4.15257" gradientUnits="userSpaceOnUse"><stop stop-color="#9EBD37"/><stop offset="0.1" stop-color="#91B030"/><stop offset="0.32" stop-color="#7C9B25"/><stop offset="0.47" stop-color="#759421"/><stop offset="1" stop-color="#62811D"/></linearGradient></defs></svg>`} /> :
                            <SvgXml xml={`<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7942 12.3884L18.2557 10.4369C17.9656 9.55157 17.777 7.30743 17.3128 6.23053C17.1497 5.85109 16.7508 5.63788 16.3482 5.73184C16.2539 5.75352 16.1705 5.78243 16.1089 5.8005C15.8115 5.89084 15.7426 6.03539 15.6338 6.32449C15.4235 6.88462 15.195 6.73646 15.3764 7.24238C15.554 7.7447 16.4643 11.138 16.7326 11.568C16.8559 11.7668 19.8078 13.4653 19.8078 13.4653C20.1197 13.7074 21.0916 12.6919 20.7978 12.392L20.7942 12.3884Z" fill="#EFEBE5"/><path opacity="0.6" d="M20.7797 12.4463C20.6854 12.3524 20.388 12.3198 20.0435 12.7065C19.7389 13.0498 19.7244 13.3353 19.8187 13.4293C19.913 13.5232 20.2067 13.3787 20.4714 13.104C20.7362 12.833 20.874 12.5367 20.7797 12.4427V12.4463Z" fill="#C4BFB5"/><path d="M21.3525 13.1473C21.3525 13.0894 21.3525 13.0352 21.3525 12.9882C21.3416 12.8654 20.9065 12.6486 20.765 12.6088C20.6925 12.551 20.6164 12.4932 20.5438 12.4353C20.1703 12.4028 19.7388 13.1834 19.8186 13.2484C20.319 13.6279 20.4786 13.7508 20.5402 13.8772C20.591 13.9784 20.6309 14.1627 20.7143 14.4301C20.7723 14.6217 21.1422 14.6036 20.8702 13.9387C20.9355 13.982 21.0334 14.2169 21.1386 14.5349C21.2183 14.7807 21.4686 14.6181 21.4504 14.5169C21.425 14.3976 21.3888 14.235 21.3489 14.0904C21.425 14.2567 21.5085 14.4338 21.5411 14.4988C21.6426 14.6939 21.882 14.5711 21.7986 14.3615C21.7623 14.2711 21.7297 14.1844 21.697 14.0904C21.7732 14.1989 21.8711 14.3434 21.9835 14.2711C22.2011 14.1266 21.6716 13.4869 21.3598 13.1473H21.3525Z" fill="#F3BC97"/><path d="M11.463 29.6946C11.4485 29.85 11.4122 30.168 11.4702 30.327C11.8329 31.2955 12.5654 32.5061 13.2508 32.7048C13.86 32.8819 14.491 32.7591 14.6687 32.423C14.7231 32.3182 14.7122 32.1339 14.6832 31.946C14.5817 31.2051 13.987 31.3425 13.5772 30.8257C13.2435 30.4065 12.7141 30.1716 12.2971 29.8464C12.1121 29.7018 11.4847 29.644 11.463 29.6982V29.6946Z" fill="#494846"/><path d="M13.6316 29.2538C13.6461 28.3576 13.6823 26.9157 13.7295 26.7025C12.9498 27.1578 12.0976 27.1072 11.4449 26.5652C11.4884 26.8217 11.5935 28.5708 11.4739 29.3803C11.4231 29.7272 11.4376 30.1066 11.6479 30.3957C12.4167 31.6605 12.928 32.8386 14.3532 32.4086C15.2417 32.1412 14.2807 30.786 13.8274 30.0091C13.6932 29.7778 13.6243 29.5212 13.6279 29.2538H13.6316Z" fill="#E5B634"/><path d="M11.699 26.0484C11.5286 26.1424 11.5286 26.193 11.4597 26.2978C11.369 26.4351 11.3364 26.8652 11.5685 27.0314C12.2212 27.4976 13.2185 27.3241 13.4687 27.2121C13.806 27.0495 13.8241 26.7314 13.8277 26.5146C13.8277 26.3665 13.7588 26.2111 13.6319 26.1605C13.2257 25.922 12.4424 25.7666 11.699 26.0521V26.0484Z" fill="#E5B634"/><path opacity="0.7" d="M11.699 26.0483C11.5285 26.1422 11.5285 26.1928 11.4596 26.2976C11.3835 26.4133 11.3472 26.7349 11.4777 26.9337C11.5213 27.5552 11.5648 28.7514 11.4705 29.3838C11.4197 29.7307 11.4342 30.1101 11.6446 30.3992C11.6627 30.4318 11.6808 30.4607 11.7026 30.4932C11.7352 30.3125 11.9673 28.0359 11.9601 27.23C11.9963 27.2517 12.0979 27.2734 12.1523 27.2842C12.0652 27.1686 12.1124 26.9156 12.2719 26.8252C12.5185 26.6843 12.7724 26.5506 13.0081 26.3952C13.1713 26.2868 13.3308 26.1784 13.5049 26.0989C13.077 25.8965 12.3698 25.7917 11.6953 26.0519L11.699 26.0483Z" fill="#B27E18"/><path d="M15.9384 27.2627C15.9384 27.2627 15.9347 27.4 15.9239 27.4578C15.9311 28.1336 16.1995 28.0902 17.1024 28.5781C17.5702 28.8311 18.1722 29.5032 19.2638 29.3876C19.7026 29.3406 20.0253 29.1238 20.0326 28.654C20.0471 27.8337 18.9737 28.1372 18.1758 27.8084C16.2865 27.0278 15.9964 26.7495 15.9384 27.2591V27.2627Z" fill="#494846"/><path d="M16.2539 27.8191C15.8333 27.4938 15.9674 27.1505 15.9275 26.6193C15.7644 24.3896 15.7752 24.1872 15.6918 23.909C16.4461 24.3824 17.2294 24.3896 17.9076 23.8801C17.9076 23.8801 17.9039 25.9724 17.991 26.4711C18.02 26.641 18.1179 26.7855 18.2666 26.8759C18.7743 27.183 19.9347 27.8733 20.0471 28.5635C20.0725 28.7225 19.9492 28.9176 19.8005 28.9863C18.6147 29.5392 17.2838 28.231 16.7797 28.0395C16.602 27.9708 16.4062 27.9347 16.2575 27.8154L16.2539 27.8191Z" fill="#E5B634"/><path d="M17.5666 23.1826C17.1459 23.0633 16.272 23.0381 15.8042 23.3669C15.7208 23.4645 15.6519 23.5295 15.5938 23.6415C15.5177 23.7861 15.5322 24.2161 15.7824 24.3571C16.4823 24.751 17.5122 24.5088 17.737 24.3498C17.9764 24.1836 17.9909 23.8114 17.9728 23.5946C17.9583 23.4464 17.8712 23.2513 17.5702 23.1826H17.5666Z" fill="#E5B634"/><path opacity="0.7" d="M16.2134 25.7916C16.2098 25.3146 16.1808 24.5124 16.1808 24.5124C16.2352 24.5232 16.3694 24.5521 16.46 24.5593C16.3984 24.5196 16.3839 24.4003 16.3911 24.2991C16.4383 23.7173 17.1998 23.3993 17.7365 23.2512C17.6894 23.2259 17.635 23.2006 17.5697 23.1861C17.149 23.0669 16.2751 23.0416 15.8073 23.3704C15.7239 23.468 15.655 23.533 15.5969 23.6451C15.5244 23.786 15.5353 24.1907 15.7638 24.3461C15.7928 24.6786 15.829 25.2821 15.9306 26.6228C15.9705 27.154 15.8363 27.4937 16.2569 27.8226C16.2569 27.8226 16.2243 26.5071 16.2171 25.7952L16.2134 25.7916Z" fill="#B27E18"/><path d="M12.1487 14.5386C12.1668 15.0048 12.1559 15.6083 12.1559 15.6083C13.7479 15.8865 17.2474 15.0156 17.7007 13.0967C17.7261 12.4101 17.8022 6.00653 16.7107 5.76802C16.2501 5.66684 12.1632 7.03645 11.7969 8.05914C11.1188 9.95998 12.0435 11.9078 12.1523 14.535L12.1487 14.5386Z" fill="url(#paint0_radial_2155_2110)"/><path style="mix-blend-mode:multiply" d="M12.1487 14.5386C12.1668 15.0048 12.1559 15.6083 12.1559 15.6083C13.7479 15.8865 17.2474 15.0156 17.7007 13.0967C17.7261 12.4101 17.8022 6.00653 16.7107 5.76802C16.2501 5.66684 12.1632 7.03645 11.7969 8.05914C11.1188 9.95998 12.0435 11.9078 12.1523 14.535L12.1487 14.5386Z" fill="url(#paint1_linear_2155_2110)"/><path d="M18.0596 19.0883C18.0197 16.7719 17.8311 13.5882 17.7659 12.9016C17.6752 11.9367 17.5446 10.184 17.454 9.4432C17.2872 7.47009 16.7396 6.14746 16.0796 5.82584C15.8584 5.82584 15.7496 5.93063 15.7024 6.08603C16.3371 6.3932 16.8194 7.79172 16.9753 9.37815C16.3044 9.88408 15.4704 10.2708 14.4078 10.4767C14.1576 9.3384 13.5193 7.39059 12.4677 7.37614C12.319 7.37614 12.0144 7.60019 11.989 7.74835C12.1123 7.65439 13.0951 7.74835 13.61 9.6781C13.7406 10.1732 13.8929 10.7261 13.9581 11.232C14.1358 12.598 13.4831 12.5041 13.0153 12.3342L12.0942 12.439C12.0942 12.439 11.9781 13.2304 11.9709 14.4374C11.9673 15.1204 11.7605 16.8008 11.6989 18.6004C11.6191 20.9458 11.6808 23.4899 11.659 24.2993L11.5611 26.4351C11.717 27.1253 13.639 27.0819 13.7297 26.4387C13.7587 26.2182 14.2337 24.8595 14.5819 23.685C14.7306 23.1863 14.8502 22.6804 14.9409 22.1672L15.1875 20.8012C15.1875 20.8012 15.6444 23.2044 15.7024 23.7031C15.7641 24.2704 17.726 24.274 17.8638 23.6597C18.0161 23.2766 18.201 21.112 18.056 19.0883H18.0596Z" fill="#2F4B5B"/><g style="mix-blend-mode:multiply" opacity="0.2"><path d="M15.63 18.9763C15.9528 18.792 16.1848 18.568 16.2211 18.3439C16.0253 18.6185 15.3798 18.7559 15.0824 18.7776L15.1912 20.7976C15.3181 21.6288 15.6626 23.3056 15.7062 23.6995C15.7207 23.8224 15.8294 23.9199 15.9854 23.9886C15.8367 21.6866 15.6771 19.4172 15.6336 18.9763H15.63Z" fill="#2F4B5B"/></g><g style="mix-blend-mode:multiply" opacity="0.2"><path d="M12.8487 12.7823L12.098 12.4353C12.098 12.4353 11.982 13.2267 11.9747 14.4337C11.9711 15.1167 11.7644 16.7971 11.7027 18.5968C11.623 20.9421 11.6846 23.4862 11.6629 24.2957L11.5649 26.4314C11.5976 26.5723 11.7027 26.6807 11.8514 26.7602C11.8514 26.7602 12.1053 23.8873 12.2068 22.5936C12.486 19.1099 12.5332 16.284 12.8487 12.7823Z" fill="#2F4B5B"/></g><path d="M13.5592 5.14653C13.668 4.96946 13.9944 5.0345 14.1902 5.03089C14.4985 5.02366 14.8103 5.02005 15.1186 5.03812C15.1947 5.04173 15.5755 5.03089 15.6009 5.14292C15.6444 5.33806 15.8983 5.75003 15.92 5.94878C16.0143 6.43664 16.192 6.88474 15.9889 7.19191C15.978 7.20637 15.7641 7.14493 15.7641 7.14493V8.34831L15.3072 7.38344C14.814 7.65086 13.9291 7.64725 13.5991 6.94979C13.6608 6.22343 13.4831 5.51152 13.5266 5.23687C13.5339 5.20074 13.5447 5.17183 13.5592 5.14653Z" fill="#EFB289"/><path d="M15.9853 6.23773C15.9853 6.23773 16.036 6.61718 16.0433 6.68222C16.0542 6.78341 16.0107 6.99662 15.7641 7.1484C16.007 7.36522 16.1992 7.56037 16.4531 7.8314C16.4785 7.75912 16.3733 7.09781 16.2391 6.71113C16.163 6.49069 15.9853 6.24496 15.9853 6.23773Z" fill="#EFEBE5"/><path d="M15.3072 7.38699L15.0135 8.43859C13.3236 8.23261 13.2511 7.28219 13.1532 6.97863C13.1894 6.66424 13.4832 6.21613 13.5956 6.20529C13.5956 6.20529 13.6065 6.33177 13.621 6.53776C13.7116 6.89913 14.1831 7.13403 14.4696 7.23521C14.7161 7.32194 14.9881 7.3906 15.3072 7.38699Z" fill="#EFEBE5"/><path d="M16.214 5.98839C16.1379 6.30278 16.0653 6.72198 15.7607 6.78703C15.2023 6.90628 14.0092 6.60634 13.8605 6.19076C13.6103 5.4933 13.3673 4.77778 13.6828 3.88157C13.8097 3.5202 13.1026 2.62037 13.4181 2.35657C13.6465 2.16865 14.836 2.57701 15.0898 2.46859C15.8405 2.14336 16.4933 2.17949 16.5331 2.94922C16.5549 3.33951 16.5875 3.7045 16.5658 4.09478C16.486 5.33069 16.3301 5.53667 16.2176 5.992L16.214 5.98839Z" fill="#F3BC97"/><path d="M16.5694 2.43615C16.4243 1.95913 16.3083 1.64112 15.6773 1.35925C15.0934 1.09906 13.4434 1.12435 13.0481 1.98081C13.0119 2.06032 12.9575 2.23016 12.9575 2.23016C12.9575 2.23016 12.8306 2.34219 12.7616 2.42531C12.0763 3.27454 12.9067 4.64415 13.0554 5.11032C13.1751 5.48615 13.331 5.80416 13.7517 5.93064C13.7517 5.93064 13.6827 5.60902 13.6175 5.33799C13.5449 5.03443 13.4615 4.69474 13.6719 4.49237C13.7915 4.37673 13.9729 4.3695 14.0817 4.50321C14.1397 4.57549 14.1542 4.98746 14.2847 4.92241C14.3718 4.87904 14.3391 4.62969 14.3428 4.55019C14.35 4.27555 14.535 3.80937 14.5241 3.43354C14.7525 3.50943 14.7779 3.29983 15.097 3.12637C16.0472 2.60961 16.4352 2.924 16.5186 3.23117C16.6165 3.607 16.5367 4.09125 16.5331 4.47069C16.5331 4.34059 16.8196 3.23479 16.573 2.43253L16.5694 2.43615Z" fill="#352920"/><path d="M16.5331 16.5551L22.5131 13.0931L22.0308 15.0879L17.0662 17.9681L16.5331 16.5551Z" fill="#B58452"/><path d="M16.9176 16.3311L17.0663 17.9682L15.6448 17.1515L15.1335 15.3048L16.9176 16.3311Z" fill="#A07048"/><path d="M17.0662 16.6996L14.8759 15.4384V15.106L17.0662 16.3672V16.6996Z" fill="#A07048"/><path d="M22.9083 13.3388L17.0661 16.6996V16.3672L22.9083 13.0064V13.3388Z" fill="#B58452"/><path d="M17.0663 16.3672L14.876 15.106L20.7181 11.7452L22.9085 13.0064L17.0663 16.3672Z" fill="#C3945C"/><path d="M15.1914 15.1059L20.718 11.9258L22.5893 13.0064L17.0662 16.1828L15.1914 15.1059Z" fill="#A07048"/><path d="M15.311 15.1747L17.0661 16.1829L22.4695 13.0751L20.7179 12.0668L15.311 15.1747Z" fill="#593E2C"/><path d="M22.0853 10.8201C22.1506 10.8092 22.2159 10.7876 22.2812 10.7839C22.3102 10.7839 22.3356 10.7839 22.3646 10.7767C22.4371 10.7623 22.4588 10.7081 22.4407 10.6828C22.4298 10.6683 22.4081 10.6719 22.4044 10.6647C22.3936 10.6502 22.4552 10.6466 22.4806 10.6394C22.5205 10.6285 22.5713 10.6105 22.5894 10.5707C22.6148 10.5093 22.5821 10.5093 22.6547 10.484C22.6946 10.4695 22.7163 10.4262 22.7417 10.3973C22.7707 10.3647 22.8505 10.278 23.0717 10.1877C22.865 10.0829 22.6365 10.1877 22.593 10.1949C22.5531 10.1949 22.506 10.2057 22.4734 10.1877C22.448 10.1696 22.4262 10.1588 22.3936 10.1877C22.3754 10.2021 22.3609 10.2238 22.3355 10.2346C22.292 10.2527 22.2449 10.213 22.2014 10.231C22.1579 10.2491 22.1252 10.3142 22.0998 10.3467C22.089 10.3611 22.0745 10.3864 22.0563 10.3937C22.0273 10.4045 22.0491 10.3539 22.0092 10.3647C21.9802 10.3756 21.962 10.4045 21.9512 10.4262C21.9221 10.4804 21.8641 10.5238 21.8641 10.5816C21.8641 10.6394 21.8895 10.6213 21.9221 10.6575C21.9221 10.6575 21.8859 10.8634 22.0926 10.8237L22.0853 10.8201Z" fill="#759421"/><path d="M21.2619 9.15773C21.3126 9.13605 21.367 9.11075 21.4214 9.09268C21.4432 9.08546 21.4686 9.08184 21.4903 9.07461C21.5483 9.05293 21.5592 9.00234 21.5375 8.98427C21.5266 8.97343 21.5084 8.98066 21.5048 8.97704C21.4903 8.9662 21.5447 8.95536 21.5665 8.94452C21.5991 8.93006 21.639 8.90477 21.6463 8.86863C21.6571 8.81442 21.6317 8.81804 21.6861 8.78551C21.7188 8.76745 21.726 8.72769 21.7442 8.69878C21.7623 8.66626 21.8167 8.58314 21.9871 8.47112C21.7949 8.41691 21.6209 8.54339 21.5846 8.55423C21.552 8.56146 21.5121 8.57953 21.4831 8.56869C21.4577 8.55785 21.4395 8.55423 21.4142 8.57953C21.3997 8.59399 21.3924 8.61567 21.3743 8.62651C21.338 8.64819 21.2945 8.6229 21.2582 8.64458C21.2256 8.66626 21.2075 8.72769 21.193 8.76022C21.1857 8.77467 21.1784 8.79997 21.1639 8.8072C21.1385 8.82165 21.1494 8.77467 21.1204 8.78913C21.0987 8.79997 21.0878 8.82888 21.0805 8.85056C21.066 8.90115 21.0225 8.94813 21.0334 8.99511C21.0406 9.04209 21.0624 9.02402 21.095 9.04932C21.095 9.04932 21.095 9.22639 21.2655 9.16134L21.2619 9.15773Z" fill="#759421"/><path d="M21.3888 7.57485C21.436 7.56039 21.4867 7.54232 21.5339 7.53509C21.5557 7.53509 21.5738 7.53148 21.5955 7.52425C21.6499 7.5098 21.6608 7.46643 21.6463 7.44836C21.6391 7.43752 21.6209 7.44114 21.6173 7.43752C21.6064 7.42668 21.6536 7.42307 21.6753 7.41584C21.7043 7.405 21.7442 7.39054 21.7551 7.35802C21.7732 7.31104 21.7478 7.31104 21.7986 7.28936C21.8276 7.2749 21.8421 7.24238 21.8603 7.21708C21.8784 7.19179 21.9364 7.12313 22.096 7.04362C21.9364 6.97858 21.7696 7.06892 21.737 7.07253C21.708 7.07615 21.6717 7.08699 21.6463 7.07253C21.6246 7.06169 21.61 7.05447 21.5847 7.07615C21.5702 7.0906 21.5593 7.10506 21.5448 7.11229C21.5121 7.12674 21.4759 7.10144 21.4432 7.1159C21.4106 7.13035 21.3925 7.18095 21.3743 7.20986C21.3671 7.2207 21.3562 7.24238 21.3417 7.24961C21.3199 7.26045 21.3344 7.2207 21.3054 7.23154C21.2837 7.23877 21.2728 7.26406 21.2655 7.28213C21.2474 7.32188 21.2039 7.36163 21.2075 7.40139C21.2075 7.44475 21.2293 7.4303 21.2547 7.45559C21.2547 7.45559 21.2401 7.61098 21.3925 7.57123L21.3888 7.57485Z" fill="#759421"/><path d="M20.5114 5.91626C20.5295 5.86928 20.544 5.81869 20.5694 5.77532C20.5803 5.75725 20.5912 5.73918 20.5984 5.72112C20.6202 5.67052 20.5912 5.63439 20.5694 5.63439C20.5549 5.63439 20.5477 5.64884 20.544 5.65245C20.5295 5.65245 20.5549 5.6127 20.5586 5.59463C20.5694 5.56572 20.5767 5.52597 20.5586 5.49706C20.5295 5.45731 20.515 5.47538 20.5295 5.42117C20.5368 5.38865 20.5187 5.35974 20.5078 5.33083C20.5005 5.29831 20.4751 5.21519 20.5078 5.03812C20.3591 5.12485 20.3337 5.31276 20.3156 5.34167C20.3011 5.36697 20.2866 5.40311 20.2612 5.41395C20.2394 5.42479 20.2249 5.43202 20.2285 5.46454C20.2285 5.48261 20.2394 5.50068 20.2358 5.51875C20.2285 5.55488 20.185 5.56572 20.1778 5.60186C20.1705 5.638 20.1995 5.68136 20.2104 5.71389C20.214 5.72473 20.2249 5.74641 20.2213 5.76087C20.2177 5.78616 20.1923 5.75003 20.185 5.77894C20.1814 5.80062 20.1923 5.82591 20.1995 5.84037C20.2213 5.88012 20.2285 5.93433 20.2612 5.95962C20.2974 5.98492 20.2975 5.95962 20.3337 5.9524C20.3337 5.9524 20.4498 6.05719 20.5078 5.91264L20.5114 5.91626Z" fill="#759421"/><path d="M19.6738 8.59752C19.6447 8.56499 19.6194 8.52524 19.5867 8.49272C19.5722 8.47826 19.5577 8.46742 19.5468 8.45297C19.5142 8.41683 19.5287 8.37708 19.5468 8.37346C19.5577 8.37346 19.5686 8.38069 19.5759 8.38069C19.5904 8.38069 19.5577 8.34817 19.5468 8.33371C19.5287 8.31203 19.5106 8.27951 19.5178 8.2506C19.5323 8.20723 19.5505 8.22169 19.5214 8.17832C19.5069 8.15302 19.5142 8.12411 19.5142 8.0952C19.5142 8.06629 19.5106 7.98679 19.4344 7.84586C19.5904 7.88199 19.6665 8.03377 19.6883 8.05545C19.71 8.07352 19.7318 8.09882 19.7572 8.10243C19.7789 8.10243 19.7971 8.10966 19.8007 8.13496C19.8007 8.14941 19.8007 8.16748 19.8116 8.18193C19.8261 8.21084 19.8696 8.21084 19.8877 8.23614C19.9022 8.26505 19.8877 8.31203 19.8877 8.34094C19.8877 8.35178 19.8841 8.37346 19.8877 8.3843C19.8986 8.40237 19.9095 8.36624 19.924 8.38792C19.9349 8.40599 19.9312 8.42767 19.9276 8.44574C19.9204 8.48549 19.9276 8.53247 19.9059 8.56138C19.8805 8.59029 19.8732 8.57222 19.8406 8.57583C19.8406 8.57583 19.768 8.69509 19.6738 8.58667V8.59752Z" fill="#759421"/><path d="M20.7399 6.05711C20.7762 6.03904 20.8125 6.01736 20.8524 6.00651C20.8669 5.99929 20.885 5.99929 20.8995 5.99206C20.9394 5.97399 20.943 5.93785 20.9285 5.9234C20.9212 5.91617 20.9068 5.9234 20.9031 5.91978C20.8922 5.91256 20.9321 5.90172 20.9466 5.89449C20.9684 5.88365 20.9974 5.86558 21.001 5.83667C21.0047 5.79692 20.9865 5.80053 21.0228 5.77523C21.0446 5.76078 21.0482 5.73187 21.0591 5.71019C21.0699 5.68489 21.1026 5.62346 21.2222 5.53673C21.0772 5.5042 20.9575 5.60177 20.9321 5.61262C20.9104 5.61984 20.8814 5.6343 20.8596 5.62707C20.8415 5.61984 20.827 5.61623 20.8125 5.63791C20.8052 5.64875 20.798 5.66321 20.7871 5.67405C20.7617 5.69212 20.7291 5.67405 20.7037 5.69212C20.6819 5.71019 20.6747 5.75355 20.6638 5.77523C20.6602 5.78608 20.6565 5.80414 20.6456 5.81137C20.6275 5.82221 20.6348 5.78969 20.613 5.80053C20.5985 5.81137 20.5912 5.82944 20.5876 5.8439C20.5804 5.88003 20.5514 5.91617 20.5622 5.94869C20.5731 5.98122 20.584 5.97038 20.6094 5.98483C20.6094 5.98483 20.6239 6.11131 20.7399 6.05711Z" fill="#759421"/><path d="M19.9856 6.47631C19.9565 6.4474 19.9312 6.41849 19.9022 6.3932C19.8913 6.38236 19.8768 6.37513 19.8623 6.36429C19.8333 6.33538 19.8441 6.29924 19.8623 6.29563C19.8731 6.29563 19.884 6.29924 19.8877 6.29924C19.8985 6.29924 19.8695 6.27394 19.8586 6.2631C19.8405 6.24503 19.8224 6.21974 19.8296 6.19444C19.8405 6.1583 19.8586 6.16553 19.8296 6.13301C19.8151 6.11133 19.8224 6.08603 19.8224 6.06073C19.8224 6.03544 19.8151 5.97039 19.739 5.85114C19.884 5.8692 19.9566 5.99569 19.9783 6.01375C19.9964 6.02821 20.0182 6.04989 20.04 6.04989C20.0581 6.04989 20.0762 6.04989 20.0798 6.07519C20.0798 6.08964 20.0798 6.1041 20.0907 6.11494C20.1052 6.14024 20.1451 6.13301 20.1596 6.1583C20.1741 6.17999 20.1633 6.22335 20.1633 6.24865C20.1633 6.25949 20.1633 6.27756 20.1633 6.28479C20.1741 6.29924 20.185 6.26672 20.1959 6.28479C20.2068 6.29924 20.2032 6.31731 20.1995 6.33176C20.1923 6.3679 20.2031 6.40765 20.1814 6.43295C20.1596 6.46186 20.1524 6.44379 20.1234 6.4474C20.1234 6.4474 20.0617 6.55582 19.9747 6.46909L19.9856 6.47631Z" fill="#759421"/><path d="M19.155 9.89137C19.1006 9.89137 19.0426 9.88415 18.9882 9.89137C18.9664 9.89137 18.9447 9.8986 18.9193 9.8986C18.8613 9.8986 18.8323 9.85524 18.8431 9.83355C18.8504 9.8191 18.8685 9.8191 18.8722 9.81548C18.8794 9.80103 18.8286 9.80826 18.8069 9.80826C18.7706 9.80826 18.7271 9.80103 18.709 9.76851C18.6799 9.72514 18.7053 9.71791 18.6437 9.70707C18.6074 9.70346 18.5857 9.66732 18.5603 9.64925C18.5313 9.62757 18.4551 9.56975 18.2629 9.53C18.4152 9.41436 18.6147 9.46856 18.6509 9.46134C18.6836 9.45772 18.7235 9.46134 18.7452 9.43604C18.7634 9.41797 18.7815 9.40713 18.8105 9.42158C18.8286 9.43243 18.8431 9.44688 18.8649 9.45049C18.9048 9.45772 18.9338 9.41797 18.9737 9.4252C19.01 9.43243 19.0462 9.48302 19.0716 9.5047C19.0825 9.51554 19.1006 9.53361 19.1151 9.53723C19.1405 9.54084 19.1151 9.50109 19.1478 9.50831C19.1731 9.50831 19.1913 9.53361 19.2058 9.54807C19.2384 9.58782 19.2928 9.61673 19.3001 9.66009C19.3109 9.70707 19.2856 9.69623 19.2638 9.72875C19.2638 9.72875 19.3254 9.88776 19.1514 9.88776L19.155 9.89137Z" fill="#759421"/><path d="M20.3587 8.27962C20.3009 8.59401 20.2901 8.93009 20.3009 9.2734C20.3117 9.61671 20.3515 9.97085 20.3696 10.325C20.3768 10.5057 20.384 10.6864 20.3912 10.8671L20.4021 11.1381C20.3985 11.2212 20.3876 11.3152 20.3804 11.4055C20.3732 11.4959 20.3551 11.5898 20.3659 11.6874L20.384 11.9584C20.3949 12.1391 20.4057 12.3198 20.4129 12.5005C20.4129 12.7065 20.4129 12.9197 20.4129 13.1293C20.4021 13.1943 20.5611 13.1907 20.5539 13.1293C20.5466 12.9233 20.5539 12.7101 20.5466 12.4933C20.5358 12.3126 20.525 12.1319 20.5105 11.9512L20.4924 11.6802C20.4816 11.597 20.496 11.5103 20.5033 11.4164C20.5105 11.3224 20.5213 11.2393 20.525 11.1381L20.5105 10.8634C20.4997 10.6828 20.4924 10.5021 20.4816 10.3214C20.4599 9.96001 20.4165 9.60948 20.4021 9.26978C20.384 8.93009 20.3949 8.60124 20.4455 8.29407C20.4707 8.14229 20.5105 7.99413 20.5322 7.84235C20.5539 7.69419 20.5502 7.54603 20.5358 7.4087C20.5105 7.13406 20.4527 6.88832 20.4274 6.66788C20.3985 6.44744 20.3696 5.99934 20.3696 5.95959C20.3696 5.72831 20.4021 5.48257 20.4021 5.48257C20.4021 5.46812 20.3876 5.4645 20.384 5.47896C20.384 5.47896 20.3262 5.7789 20.3262 6.10052C20.3262 6.25953 20.337 6.45467 20.3623 6.67872C20.3876 6.90278 20.4382 7.14851 20.4599 7.41593C20.4707 7.54964 20.4708 7.69058 20.4491 7.83151C20.4274 7.97606 20.3876 8.12061 20.3587 8.27962Z" fill="#62811D"/><path d="M20.4568 12.4969C20.4568 12.4969 20.5257 12.3271 20.6563 12.0813C20.7868 11.8356 20.979 11.5212 21.2256 11.243C21.4686 10.9647 21.7587 10.7298 21.998 10.5925C22.2374 10.4515 22.4114 10.3901 22.4114 10.3901C22.4187 10.3901 22.4259 10.3901 22.4259 10.3973C22.4259 10.4046 22.4259 10.4118 22.4187 10.4118C22.4187 10.4118 22.2482 10.4768 22.0162 10.6214C21.7841 10.7623 21.5012 11.0008 21.2691 11.2791C21.037 11.5573 20.8521 11.8717 20.7288 12.1175C20.6091 12.3596 20.5402 12.5294 20.5402 12.5294C20.5293 12.5547 20.504 12.5656 20.4786 12.5584C20.4532 12.5511 20.4423 12.5222 20.4496 12.4969V12.4933L20.4568 12.4969Z" fill="#62811D"/><path d="M20.388 10.3214C20.388 10.3214 20.2937 9.74321 20.0797 9.20114C19.9673 8.93373 19.8513 8.6627 19.7751 8.45671C19.6953 8.25434 19.6155 8.12786 19.6155 8.12786C19.63 8.11702 19.7135 8.23989 19.8005 8.44587C19.8803 8.65185 20.0036 8.91566 20.1232 9.18308C20.3517 9.72875 20.4641 10.307 20.4641 10.307C20.4677 10.3286 20.4569 10.3467 20.4351 10.3539C20.4133 10.3575 20.3952 10.3467 20.388 10.325V10.3214Z" fill="#62811D"/><path d="M20.3482 8.44227C20.3482 8.44227 20.4026 8.33386 20.5114 8.17847C20.6166 8.02669 20.7834 7.83878 20.9684 7.67255C21.3382 7.34008 21.7807 7.11603 21.7807 7.11603C21.7879 7.13048 21.3527 7.36538 20.9974 7.70507C20.8197 7.8713 20.6637 8.05922 20.5622 8.21099C20.4607 8.36277 20.4099 8.47118 20.4099 8.47118C20.4026 8.48925 20.3809 8.49648 20.3664 8.48564C20.3519 8.4748 20.341 8.45673 20.3519 8.44227H20.3482Z" fill="#62811D"/><path d="M20.4316 7.18821C20.4316 7.18821 20.4171 7.10871 20.3808 6.99668C20.3446 6.88466 20.2756 6.74011 20.2031 6.59556C20.1306 6.45101 20.0726 6.30284 20.0109 6.19804C19.9529 6.09325 19.8985 6.03543 19.8985 6.03543C19.9058 6.0282 19.9638 6.08602 20.0254 6.19082C20.0871 6.29562 20.1523 6.44378 20.2285 6.58472C20.3047 6.72565 20.3772 6.8702 20.4207 6.98584C20.4642 7.10148 20.4787 7.18099 20.4787 7.18099C20.4787 7.19544 20.4715 7.2099 20.4606 7.2099C20.4461 7.2099 20.4352 7.20267 20.4316 7.19183V7.18821Z" fill="#62811D"/><path d="M20.3481 6.41137C20.3481 6.41137 20.4316 6.19816 20.5657 6.0247C20.631 5.93435 20.7072 5.85485 20.7724 5.80065C20.8377 5.74644 20.8849 5.71753 20.8849 5.71753C20.8921 5.72837 20.845 5.75728 20.7833 5.81149C20.7217 5.86569 20.6491 5.94881 20.5875 6.03915C20.4606 6.21984 20.388 6.42582 20.388 6.42582C20.3844 6.43667 20.3699 6.44389 20.359 6.44028C20.3482 6.43667 20.3409 6.42221 20.3445 6.41137H20.3481Z" fill="#62811D"/><path d="M20.7435 8.61211C20.7797 8.59404 20.816 8.57236 20.8559 8.56152C20.8704 8.55429 20.8885 8.55429 20.903 8.54706C20.9429 8.52899 20.9466 8.49286 20.9321 8.4784C20.9248 8.47117 20.9103 8.4784 20.9067 8.47479C20.8958 8.46756 20.9357 8.45672 20.9502 8.44949C20.9719 8.43865 21.001 8.42058 21.0046 8.39167C21.0082 8.35192 20.9901 8.35553 21.0263 8.33024C21.0481 8.31578 21.0517 8.28687 21.0626 8.26519C21.0735 8.23989 21.1061 8.17846 21.2258 8.09173C21.0807 8.05921 20.9611 8.15678 20.9357 8.164C20.9139 8.17123 20.8849 8.18569 20.8631 8.17846C20.845 8.17123 20.8305 8.16762 20.816 8.1893C20.8088 8.20014 20.8015 8.2146 20.7906 8.22544C20.7652 8.24351 20.7326 8.22544 20.7072 8.24351C20.6855 8.26158 20.6782 8.30494 20.6673 8.32662C20.6637 8.33747 20.6601 8.35553 20.6492 8.36276C20.6311 8.3736 20.6383 8.34108 20.6166 8.35192C20.6021 8.36276 20.5948 8.38083 20.5912 8.39528C20.5839 8.43142 20.5549 8.46756 20.5658 8.50008C20.573 8.53261 20.5875 8.52177 20.6129 8.53622C20.6129 8.53622 20.6274 8.6627 20.7435 8.6085V8.61211Z" fill="#759421"/><path d="M20.3481 8.96621C20.3481 8.96621 20.4316 8.753 20.5657 8.57954C20.631 8.48919 20.7072 8.40969 20.7724 8.35549C20.8377 8.30128 20.8849 8.27237 20.8849 8.27237C20.8921 8.28321 20.845 8.31212 20.7833 8.36633C20.7217 8.42053 20.6491 8.50365 20.5875 8.59399C20.4606 8.77468 20.388 8.98066 20.388 8.98066C20.3844 8.99151 20.3699 8.99873 20.359 8.99512C20.3482 8.99151 20.3409 8.97705 20.3445 8.96621H20.3481Z" fill="#62811D"/><path d="M20.4207 11.0984C20.4207 11.0984 20.3626 10.9683 20.2466 10.7913C20.1342 10.6142 19.9601 10.3865 19.7643 10.1805C19.5685 9.97818 19.3473 9.79388 19.1623 9.69269C18.9774 9.58789 18.8359 9.55898 18.8359 9.55898C18.8396 9.5373 18.8758 9.54814 18.9375 9.5626C18.9991 9.58067 19.0825 9.61319 19.1768 9.66378C19.369 9.76135 19.5975 9.94204 19.8042 10.1444C20.0073 10.3468 20.1886 10.5708 20.3119 10.7515C20.4352 10.9322 20.5005 11.0587 20.5005 11.0587C20.5113 11.084 20.5005 11.1093 20.4823 11.1201C20.4606 11.131 20.4352 11.1201 20.4243 11.1021L20.4207 11.0984Z" fill="#62811D"/><path d="M20.7472 6.56666C20.7799 6.5522 20.8125 6.53414 20.8452 6.52329C20.8597 6.51968 20.8742 6.51607 20.8887 6.50884C20.9249 6.49438 20.9286 6.46186 20.9141 6.45102C20.9068 6.44379 20.8959 6.45102 20.8923 6.44741C20.885 6.44018 20.9177 6.43295 20.9286 6.42572C20.9503 6.41488 20.9721 6.40043 20.9757 6.37513C20.9793 6.33899 20.9612 6.34261 20.9975 6.32092C21.0156 6.31008 21.0192 6.28479 21.0301 6.2631C21.041 6.24142 21.07 6.18722 21.1752 6.11494C21.0519 6.08603 20.9467 6.16915 20.9213 6.17637C20.8995 6.1836 20.8778 6.19444 20.856 6.18722C20.8415 6.1836 20.827 6.17999 20.8125 6.19806C20.8053 6.2089 20.8016 6.21974 20.7907 6.23058C20.769 6.24504 20.74 6.23058 20.7182 6.24504C20.6965 6.25949 20.6892 6.29924 20.682 6.31731C20.682 6.32454 20.6747 6.34261 20.6638 6.34622C20.6493 6.35706 20.6529 6.32454 20.6348 6.33538C20.6203 6.34261 20.6167 6.36068 20.6131 6.37513C20.6058 6.40765 20.5804 6.43656 20.5877 6.46547C20.5949 6.49438 20.6058 6.48354 20.6312 6.498C20.6312 6.498 20.6421 6.61002 20.7472 6.56305V6.56666Z" fill="#759421"/><path d="M20.4172 6.9208C20.4172 6.9208 20.4716 6.72205 20.5912 6.5522C20.6456 6.46908 20.7109 6.38958 20.7653 6.33537C20.8197 6.28117 20.8632 6.25226 20.8632 6.25226C20.8705 6.2631 20.8306 6.29201 20.7798 6.34622C20.729 6.40042 20.671 6.47992 20.6203 6.56665C20.5115 6.7365 20.4716 6.93164 20.4716 6.93164C20.4716 6.9461 20.4534 6.95333 20.4389 6.95333C20.4244 6.95333 20.4172 6.93526 20.4172 6.9208Z" fill="#62811D"/><path d="M20.4026 10.2527C20.4026 10.2527 20.5585 9.76125 20.8522 9.33844C20.9973 9.12523 21.1677 8.93732 21.3128 8.81084C21.3853 8.74579 21.447 8.69881 21.4941 8.66628C21.5376 8.63376 21.5666 8.61569 21.5666 8.61569C21.5775 8.63015 21.5521 8.65183 21.5086 8.68435C21.4651 8.71688 21.4034 8.76747 21.3345 8.83252C21.1967 8.96261 21.0299 9.15414 20.8957 9.36735C20.6165 9.79016 20.4787 10.278 20.4787 10.278C20.4715 10.2997 20.4533 10.3105 20.4316 10.3033C20.4098 10.2961 20.3989 10.278 20.4062 10.2563V10.2527H20.4026Z" fill="#62811D"/><path d="M21.9003 11.1164C21.9583 11.149 22.0236 11.1743 22.078 11.2104C22.0998 11.2248 22.1215 11.2429 22.1469 11.2574C22.2122 11.2899 22.263 11.261 22.263 11.2321C22.263 11.214 22.2448 11.2032 22.2448 11.1959C22.2448 11.1779 22.2956 11.214 22.321 11.2248C22.3572 11.2429 22.4116 11.261 22.4515 11.2393C22.5096 11.2104 22.4842 11.1851 22.5567 11.2104C22.5966 11.2248 22.6401 11.2032 22.68 11.1959C22.7235 11.1887 22.8395 11.1706 23.068 11.2393C22.9737 11.0297 22.7271 10.9683 22.6909 10.943C22.6582 10.9213 22.6147 10.896 22.6038 10.8635C22.593 10.8346 22.5821 10.8129 22.5422 10.8129C22.5168 10.8129 22.4914 10.8201 22.4697 10.8129C22.4225 10.7984 22.4153 10.7406 22.3681 10.7261C22.3246 10.7117 22.2593 10.7442 22.2158 10.7551C22.1977 10.7587 22.1687 10.7695 22.1505 10.7659C22.1179 10.7551 22.1687 10.7298 22.1324 10.7153C22.1034 10.7045 22.0708 10.7153 22.049 10.7261C21.9946 10.7478 21.9184 10.7478 21.8822 10.7912C21.8459 10.8346 21.8749 10.8382 21.8822 10.8852C21.8822 10.8852 21.7263 11.0225 21.9112 11.12L21.9003 11.1164Z" fill="#759421"/><path d="M22.9339 11.1454C22.9339 11.1454 22.6112 10.9827 22.2594 10.9177C22.0854 10.8852 21.904 10.8816 21.7771 10.9032C21.6466 10.9285 21.5704 10.9683 21.5704 10.9683C21.5595 10.9755 21.545 10.9683 21.5378 10.9574C21.5305 10.9466 21.5378 10.9321 21.5487 10.9249C21.5487 10.9249 21.6357 10.8852 21.7699 10.8635C21.904 10.8418 22.089 10.849 22.2667 10.8888C22.6221 10.9611 22.9412 11.1345 22.9412 11.1345C22.9412 11.1454 22.9412 11.1454 22.9339 11.1454Z" fill="#62811D"/><path d="M21.0117 9.75038C21.0698 9.76122 21.1314 9.76483 21.1858 9.7829C21.2076 9.79013 21.2293 9.80097 21.2547 9.80458C21.3163 9.81542 21.3526 9.77567 21.3454 9.75038C21.3417 9.73592 21.3236 9.72869 21.32 9.72508C21.3164 9.70701 21.3671 9.72508 21.3925 9.72869C21.4288 9.73231 21.4759 9.73592 21.5049 9.70701C21.5448 9.66365 21.5194 9.65281 21.5847 9.65642C21.621 9.65642 21.6536 9.62751 21.6826 9.60944C21.7153 9.59137 21.8095 9.54439 22.0199 9.54078C21.8821 9.389 21.6609 9.40707 21.621 9.39261C21.5883 9.38177 21.5448 9.37455 21.5231 9.34925C21.5049 9.32757 21.4904 9.3095 21.4578 9.32395C21.436 9.33118 21.4179 9.34202 21.3961 9.34202C21.3526 9.34202 21.3272 9.29504 21.2873 9.29504C21.2475 9.29504 21.2003 9.33841 21.1677 9.36009C21.1532 9.36732 21.1314 9.38539 21.1169 9.38539C21.0879 9.38539 21.1241 9.34925 21.0879 9.34925C21.0625 9.34925 21.0371 9.36732 21.019 9.38177C20.9791 9.41791 20.9174 9.43598 20.8957 9.48296C20.8776 9.52994 20.9029 9.52632 20.9211 9.56246C20.9211 9.56246 20.8268 9.72147 21.0081 9.75399L21.0117 9.75038Z" fill="#759421"/><path d="M21.8856 9.49743C21.8856 9.49743 21.5701 9.44684 21.2582 9.4902C21.1023 9.50827 20.95 9.55525 20.8484 9.60946C20.7469 9.66366 20.6925 9.71787 20.6925 9.71787C20.6852 9.7251 20.6707 9.7251 20.6635 9.71787C20.6562 9.71064 20.6562 9.69619 20.6635 9.68896C20.6635 9.68896 20.7251 9.63114 20.8339 9.57693C20.9427 9.52273 21.0987 9.47936 21.2582 9.46491C21.5773 9.42877 21.8928 9.4902 21.8928 9.4902C21.8965 9.49743 21.8928 9.50105 21.8928 9.50105L21.8856 9.49743Z" fill="#62811D"/><path d="M20.9608 8.12782C21.0188 8.13866 21.0805 8.14227 21.1348 8.16034C21.1566 8.16757 21.1784 8.17841 21.2037 8.18203C21.2654 8.19287 21.3017 8.15311 21.2944 8.12782C21.2908 8.11336 21.2726 8.10614 21.269 8.10252C21.2654 8.08445 21.3162 8.10252 21.3416 8.10614C21.3778 8.10975 21.425 8.11336 21.454 8.08445C21.4939 8.04109 21.4685 8.03025 21.5338 8.03386C21.57 8.03386 21.6027 8.00495 21.6317 7.98688C21.6643 7.96881 21.7586 7.92183 21.9689 7.91822C21.8311 7.76644 21.6099 7.78451 21.57 7.77006C21.5374 7.75922 21.4939 7.75199 21.4721 7.72669C21.454 7.70501 21.4395 7.68694 21.4068 7.7014C21.3851 7.70862 21.3669 7.71946 21.3452 7.71946C21.3017 7.71946 21.2763 7.67249 21.2364 7.67249C21.1965 7.67249 21.1494 7.71585 21.1167 7.73753C21.1022 7.74476 21.0805 7.76283 21.0659 7.76283C21.0369 7.76283 21.0732 7.72669 21.0369 7.72669C21.0116 7.72669 20.9862 7.74476 20.968 7.75922C20.9281 7.79535 20.8665 7.81342 20.8447 7.8604C20.8266 7.90738 20.852 7.90377 20.8701 7.9399C20.8701 7.9399 20.7758 8.09891 20.9572 8.13143L20.9608 8.12782Z" fill="#759421"/><path d="M21.835 7.87136C21.835 7.87136 21.5195 7.82077 21.2076 7.86414C21.0517 7.8822 20.8994 7.92918 20.7978 7.98339C20.6963 8.0376 20.6419 8.0918 20.6419 8.0918C20.6346 8.09903 20.6201 8.09903 20.6129 8.0918C20.6056 8.08458 20.6056 8.07012 20.6129 8.06289C20.6129 8.06289 20.6745 8.00507 20.7833 7.95087C20.8921 7.89666 21.048 7.85329 21.2076 7.83884C21.5267 7.8027 21.8422 7.86414 21.8422 7.86414C21.8459 7.87136 21.8422 7.87498 21.8422 7.87498L21.835 7.87136Z" fill="#62811D"/><path d="M19.5286 10.3286C19.4705 10.3431 19.4053 10.3503 19.3472 10.3684C19.3219 10.3756 19.3001 10.3864 19.2747 10.3936C19.2094 10.4081 19.1695 10.3684 19.1768 10.3394C19.1804 10.325 19.2022 10.3178 19.2022 10.3105C19.2058 10.2925 19.1514 10.3141 19.1297 10.3178C19.0898 10.325 19.0426 10.3286 19.01 10.2997C18.9665 10.2563 18.9919 10.2455 18.923 10.2491C18.8831 10.2491 18.8504 10.2202 18.8178 10.2057C18.7815 10.1877 18.6836 10.1443 18.4624 10.1479C18.6002 9.98529 18.8323 9.99252 18.8722 9.97807C18.9085 9.96723 18.952 9.95638 18.9701 9.92747C18.9882 9.90579 19.0027 9.88772 19.039 9.89856C19.0608 9.90579 19.0825 9.91663 19.1043 9.91663C19.1478 9.91663 19.1732 9.86604 19.2167 9.86243C19.2602 9.86243 19.311 9.90579 19.3436 9.92747C19.3581 9.9347 19.3799 9.95277 19.398 9.95277C19.427 9.95277 19.3908 9.91302 19.427 9.91302C19.4524 9.91302 19.4814 9.92747 19.4995 9.94193C19.5431 9.97807 19.6083 9.99614 19.6301 10.0431C19.6519 10.0901 19.6229 10.0865 19.6083 10.1262C19.6083 10.1262 19.7135 10.2888 19.5249 10.3286H19.5286Z" fill="#759421"/><path d="M18.6003 10.0865C18.6003 10.0865 18.9266 10.0142 19.2639 10.0359C19.4307 10.0467 19.5975 10.0829 19.7136 10.1371C19.8296 10.1913 19.8949 10.2491 19.8949 10.2491C19.9058 10.2563 19.9058 10.2708 19.8985 10.2816C19.8913 10.2925 19.8768 10.2925 19.8659 10.2852C19.8659 10.2852 19.8042 10.231 19.6954 10.1768C19.5866 10.1226 19.4271 10.0829 19.2603 10.0684C18.9303 10.0359 18.6039 10.1009 18.6039 10.1009C18.5966 10.0937 18.6003 10.0901 18.6039 10.0901L18.6003 10.0865Z" fill="#62811D"/><path d="M19.5829 9.66371C19.5902 9.61312 19.5902 9.56253 19.601 9.51555C19.6047 9.49387 19.6119 9.4758 19.6155 9.45412C19.6228 9.39991 19.5865 9.371 19.5648 9.37823C19.5539 9.38184 19.5503 9.39991 19.543 9.39991C19.5285 9.40352 19.543 9.36016 19.543 9.33848C19.543 9.30595 19.543 9.2662 19.5176 9.24452C19.4814 9.212 19.4705 9.23368 19.4705 9.17947C19.4705 9.14695 19.4415 9.12165 19.427 9.09636C19.4088 9.06745 19.3653 8.99156 19.3508 8.81448C19.2275 8.93735 19.2529 9.12527 19.2457 9.15779C19.2384 9.1867 19.2348 9.22284 19.213 9.24091C19.1949 9.25536 19.1804 9.26982 19.1949 9.29873C19.2021 9.31679 19.213 9.33125 19.213 9.34932C19.213 9.38546 19.1768 9.40714 19.1804 9.44689C19.1804 9.48303 19.2239 9.51916 19.242 9.54446C19.2493 9.5553 19.2638 9.57337 19.2674 9.58783C19.2674 9.61312 19.2348 9.58783 19.2348 9.61312C19.2348 9.6348 19.2529 9.65649 19.2638 9.67094C19.2964 9.70347 19.3146 9.75767 19.3544 9.76851C19.3943 9.78297 19.3907 9.76129 19.4233 9.74322C19.4233 9.74322 19.5612 9.81549 19.5829 9.6601V9.66371Z" fill="#759421"/><path d="M19.3217 8.9301C19.3217 8.9301 19.2928 9.20113 19.347 9.46494C19.3687 9.59503 19.4157 9.72152 19.4699 9.80825C19.5205 9.89136 19.5711 9.93473 19.5711 9.93473C19.5783 9.94195 19.5783 9.95279 19.5711 9.96002C19.5639 9.96725 19.553 9.96725 19.5458 9.96002C19.5458 9.96002 19.4952 9.90943 19.441 9.8227C19.3904 9.73236 19.3434 9.60226 19.3253 9.46855C19.282 9.20113 19.3145 8.9301 19.3145 8.9301C19.3217 8.92649 19.3253 8.9301 19.3217 8.9301Z" fill="#62811D"/><path d="M21.3016 11.8355C21.3596 11.868 21.4249 11.8933 21.4793 11.9295C21.5011 11.9439 21.5228 11.962 21.5482 11.9765C21.6135 12.009 21.6643 11.9801 21.6643 11.9512C21.6643 11.9331 21.6461 11.9222 21.6461 11.915C21.6461 11.897 21.6969 11.9331 21.7223 11.9439C21.7586 11.962 21.813 11.9801 21.8528 11.9584C21.9109 11.9295 21.8855 11.9042 21.958 11.9295C21.9979 11.9439 22.0414 11.9222 22.0813 11.915C22.1248 11.9078 22.2409 11.8897 22.4693 11.9584C22.375 11.7488 22.1285 11.6874 22.0922 11.6621C22.0595 11.6404 22.016 11.6151 22.0051 11.5826C21.9943 11.5536 21.9834 11.532 21.9435 11.532C21.9181 11.532 21.8927 11.5392 21.871 11.532C21.8238 11.5175 21.8166 11.4597 21.7694 11.4452C21.7259 11.4308 21.6606 11.4633 21.6171 11.4741C21.599 11.4778 21.57 11.4886 21.5518 11.485C21.5192 11.4741 21.57 11.4488 21.5337 11.4344C21.5047 11.4236 21.4721 11.4344 21.4503 11.4452C21.3959 11.4669 21.3198 11.4669 21.2835 11.5103C21.2472 11.5536 21.2762 11.5573 21.2835 11.6042C21.2835 11.6042 21.1276 11.7416 21.3125 11.8391L21.3016 11.8355Z" fill="#759421"/><path d="M22.3317 11.8644C22.3317 11.8644 22.009 11.7018 21.6572 11.6368C21.4831 11.6043 21.3018 11.6006 21.1749 11.6223C21.0443 11.6476 20.9682 11.6874 20.9682 11.6874C20.9573 11.6946 20.9428 11.6874 20.9356 11.6765C20.9283 11.6657 20.9356 11.6512 20.9464 11.644C20.9464 11.644 21.0335 11.6043 21.1676 11.5826C21.3018 11.5609 21.4868 11.5681 21.6644 11.6079C22.0198 11.6801 22.339 11.8536 22.339 11.8536C22.339 11.8644 22.339 11.8644 22.3317 11.8644Z" fill="#62811D"/><path d="M20.7507 11.2356C20.8014 11.2031 20.8486 11.1597 20.8993 11.1308C20.9211 11.12 20.9429 11.1091 20.9646 11.0947C21.019 11.0585 21.0154 11.0007 20.99 10.9899C20.9755 10.9827 20.9574 10.9899 20.9537 10.9899C20.9392 10.9827 20.99 10.9574 21.0081 10.9429C21.0371 10.9212 21.0734 10.8851 21.0734 10.8453C21.0734 10.7839 21.0444 10.7947 21.0952 10.7514C21.1242 10.7261 21.1242 10.6791 21.1351 10.6466C21.1459 10.6104 21.1822 10.5093 21.3309 10.3502C21.1206 10.3394 20.9682 10.5129 20.932 10.5345C20.8993 10.5526 20.8631 10.5779 20.8304 10.5743C20.8014 10.5707 20.7797 10.5707 20.7615 10.6032C20.7507 10.6249 20.747 10.6466 20.7325 10.661C20.6999 10.6936 20.6491 10.6755 20.6165 10.708C20.5875 10.7369 20.5838 10.8056 20.5766 10.8417C20.5766 10.8562 20.5693 10.8851 20.5585 10.8995C20.5367 10.9212 20.5367 10.867 20.5113 10.8923C20.4932 10.9104 20.4859 10.9429 20.4859 10.9646C20.4823 11.0188 20.4497 11.0802 20.4714 11.1272C20.4932 11.1742 20.5077 11.1525 20.5476 11.167C20.5476 11.167 20.5947 11.3513 20.7507 11.2428V11.2356Z" fill="#759421"/><path d="M21.2037 10.4117C21.2037 10.4117 20.9354 10.6033 20.7396 10.8635C20.638 10.9899 20.5619 11.1345 20.5292 11.2501C20.4966 11.3658 20.4966 11.4453 20.4966 11.4453C20.4966 11.4561 20.4857 11.467 20.4748 11.467C20.464 11.467 20.4531 11.4561 20.4531 11.4453C20.4531 11.4453 20.4531 11.3585 20.493 11.2393C20.5329 11.12 20.6163 10.9755 20.7214 10.849C20.9281 10.5924 21.2001 10.4045 21.2001 10.4045C21.211 10.4081 21.2074 10.4117 21.2074 10.4117H21.2037Z" fill="#62811D"/><path d="M20.1523 12.0669C20.1052 12.0307 20.0544 11.991 20.0037 11.9621C19.9819 11.9512 19.9601 11.9404 19.9384 11.9259C19.884 11.8862 19.8876 11.832 19.913 11.8211C19.9275 11.8139 19.9456 11.8211 19.9493 11.8211C19.9638 11.8139 19.913 11.785 19.8949 11.7705C19.8658 11.7452 19.8296 11.7127 19.8296 11.673C19.8296 11.6115 19.8586 11.6224 19.8115 11.5754C19.7824 11.5501 19.7824 11.5031 19.7752 11.4706C19.7643 11.4308 19.7317 11.3333 19.583 11.1743C19.7933 11.167 19.942 11.3405 19.9783 11.3622C20.0109 11.3802 20.0472 11.4055 20.0798 11.4019C20.1088 11.4019 20.1306 11.3983 20.1451 11.4308C20.156 11.4525 20.1596 11.4742 20.1741 11.4887C20.2031 11.5212 20.2575 11.5031 20.2865 11.5356C20.3155 11.5645 20.3155 11.6332 20.3228 11.6693C20.3228 11.6838 20.33 11.7127 20.3409 11.7272C20.3627 11.7488 20.3627 11.6946 20.3881 11.7199C20.4062 11.738 20.4134 11.7705 20.4134 11.7922C20.4134 11.8464 20.4461 11.9079 20.4279 11.9548C20.4062 12.0018 20.3917 11.9801 20.3518 11.9946C20.3518 11.9946 20.3046 12.1789 20.1487 12.0669H20.1523Z" fill="#759421"/><path d="M19.7171 11.2283C19.7171 11.2283 19.9854 11.4199 20.1921 11.6764C20.2937 11.8029 20.3771 11.9511 20.4133 12.0703C20.4496 12.1896 20.4532 12.2763 20.4532 12.2763C20.4532 12.2872 20.446 12.298 20.4315 12.298C20.4206 12.298 20.4097 12.2908 20.4097 12.2763C20.4097 12.2763 20.4097 12.1968 20.3771 12.0812C20.3444 11.9655 20.2683 11.821 20.1704 11.6945C19.9745 11.4343 19.7134 11.2356 19.7134 11.2356C19.7134 11.2247 19.7171 11.2247 19.7207 11.2283H19.7171Z" fill="#62811D"/><path d="M21.4071 10.755C21.3926 10.7116 21.3817 10.6611 21.3636 10.6213C21.3564 10.6032 21.3455 10.5888 21.3382 10.5671C21.3237 10.5165 21.3491 10.484 21.3709 10.4876C21.3817 10.4876 21.389 10.5057 21.3962 10.5057C21.4107 10.5057 21.389 10.4659 21.3854 10.4515C21.3781 10.4225 21.3709 10.3864 21.389 10.3611C21.418 10.325 21.4289 10.343 21.4216 10.2925C21.418 10.2635 21.4361 10.2346 21.447 10.2093C21.4579 10.1804 21.4833 10.1009 21.4651 9.93469C21.6029 10.0286 21.6138 10.2057 21.6283 10.2346C21.6392 10.2599 21.6501 10.2925 21.6755 10.3069C21.6936 10.3178 21.7081 10.3286 21.7045 10.3575C21.7045 10.3756 21.6936 10.39 21.6972 10.4081C21.7009 10.4442 21.7408 10.4551 21.748 10.4912C21.7516 10.5237 21.7226 10.5671 21.7081 10.5924C21.7045 10.6032 21.69 10.6249 21.6936 10.6358C21.6936 10.6574 21.7226 10.6249 21.7262 10.6538C21.7299 10.6755 21.719 10.6972 21.7081 10.7116C21.6864 10.7478 21.6755 10.7984 21.6428 10.8201C21.6066 10.8417 21.6066 10.8201 21.5776 10.8092C21.5776 10.8092 21.4615 10.9032 21.4144 10.7622L21.4071 10.755Z" fill="#759421"/><path d="M21.5227 10.0287C21.5227 10.0287 21.6059 10.2708 21.6131 10.531C21.6203 10.6575 21.6022 10.7876 21.5697 10.8815C21.5372 10.9755 21.4974 11.0297 21.4974 11.0297C21.4938 11.0369 21.483 11.0405 21.4758 11.0333C21.4685 11.0297 21.4649 11.0189 21.4721 11.0116C21.4721 11.0116 21.5119 10.961 21.5444 10.8743C21.5769 10.7876 21.595 10.6611 21.595 10.5346C21.595 10.2816 21.5191 10.0359 21.5191 10.0359C21.5227 10.0287 21.5263 10.0323 21.5263 10.0359L21.5227 10.0287Z" fill="#62811D"/><path d="M18.6981 11.503C18.6328 11.4994 18.5639 11.4885 18.4987 11.4921C18.4697 11.4921 18.4443 11.4994 18.4153 11.4958C18.3427 11.4921 18.3137 11.4379 18.3282 11.4126C18.3355 11.3982 18.3609 11.3982 18.3645 11.391C18.3754 11.3729 18.3101 11.3801 18.2847 11.3765C18.2448 11.3729 18.1904 11.3621 18.1687 11.3223C18.136 11.2645 18.1687 11.2609 18.0925 11.2464C18.049 11.2392 18.0236 11.1958 17.9946 11.1705C17.962 11.1416 17.8713 11.0693 17.6428 11.0079C17.835 10.8778 18.0744 10.9537 18.1179 10.9501C18.1578 10.9501 18.2086 10.9501 18.2339 10.9284C18.2593 10.9103 18.2775 10.8959 18.3137 10.9176C18.3355 10.932 18.3536 10.9501 18.3754 10.9537C18.4225 10.9645 18.4624 10.9212 18.5096 10.932C18.5531 10.9429 18.5929 11.0043 18.6256 11.0368C18.6365 11.0513 18.6582 11.073 18.6764 11.0802C18.709 11.0874 18.6764 11.0368 18.7162 11.0477C18.7453 11.0549 18.767 11.0802 18.7815 11.1019C18.8178 11.1488 18.8794 11.1886 18.8903 11.2428C18.8976 11.3006 18.8722 11.2862 18.8432 11.3259C18.8432 11.3259 18.9048 11.5247 18.6981 11.5102V11.503Z" fill="#759421"/><path d="M20.4495 13.0028C20.4495 13.0028 20.3625 12.8401 20.2102 12.6161C20.0579 12.392 19.833 12.1029 19.5647 11.8572C19.2999 11.6079 18.9881 11.4091 18.7378 11.3007C18.4876 11.1887 18.3099 11.1453 18.3099 11.1453C18.3027 11.1453 18.2991 11.1381 18.3027 11.1308C18.3027 11.1236 18.3099 11.12 18.3172 11.1236C18.3172 11.1236 18.4985 11.1634 18.7523 11.2718C19.0098 11.3766 19.3253 11.5717 19.6046 11.8175C19.8838 12.0596 20.1195 12.3487 20.2791 12.5727C20.4386 12.8004 20.5329 12.9558 20.5329 12.9558C20.5474 12.9811 20.5402 13.01 20.5184 13.0244C20.4966 13.0389 20.4676 13.0281 20.4531 13.0064L20.4495 13.0028Z" fill="#62811D"/><path d="M18.9193 11.7704C18.8649 11.8102 18.8069 11.8427 18.7561 11.8861C18.7344 11.9041 18.7162 11.9258 18.6945 11.9403C18.6364 11.9836 18.5784 11.9619 18.5748 11.9294C18.5748 11.9114 18.5893 11.8969 18.5893 11.8897C18.5893 11.8716 18.5422 11.915 18.5204 11.9294C18.4841 11.9511 18.437 11.9764 18.3935 11.9619C18.3318 11.9403 18.3536 11.915 18.2883 11.9475C18.252 11.9656 18.2049 11.9475 18.165 11.9475C18.1215 11.9475 18.0054 11.9439 17.7879 12.0415C17.8568 11.821 18.0889 11.7307 18.1215 11.6981C18.1505 11.6728 18.1904 11.6439 18.1976 11.6078C18.2049 11.5789 18.2121 11.5536 18.252 11.55C18.2774 11.55 18.3028 11.55 18.3246 11.5391C18.3681 11.5175 18.3717 11.4596 18.4152 11.438C18.4587 11.4199 18.5276 11.438 18.5712 11.4452C18.5893 11.4452 18.6183 11.4524 18.6364 11.4452C18.6655 11.4307 18.6111 11.4127 18.6473 11.391C18.6727 11.3765 18.709 11.3837 18.7307 11.391C18.7887 11.4054 18.8613 11.3946 18.9048 11.4343C18.9483 11.4741 18.9157 11.4813 18.9193 11.5283C18.9193 11.5283 19.0934 11.6439 18.9193 11.7632V11.7704Z" fill="#759421"/><path d="M17.893 11.9222C17.893 11.9222 18.1868 11.709 18.5277 11.5933C18.6981 11.5319 18.8794 11.4994 19.0172 11.503C19.155 11.5066 19.2457 11.5355 19.2457 11.5355C19.2602 11.5355 19.2674 11.5536 19.2638 11.5644C19.2638 11.5789 19.2457 11.5861 19.2348 11.5825C19.2348 11.5825 19.1514 11.5536 19.0172 11.5464C18.8867 11.5391 18.709 11.5644 18.5385 11.6222C18.1977 11.7307 17.9003 11.933 17.9003 11.933C17.8894 11.9294 17.8894 11.9258 17.893 11.9222Z" fill="#62811D"/><path d="M19.6083 12.4065C19.5539 12.4462 19.4959 12.4788 19.4451 12.5221C19.4234 12.5402 19.4053 12.5619 19.3835 12.5763C19.3255 12.6197 19.2674 12.598 19.2638 12.5655C19.2638 12.5474 19.2783 12.533 19.2783 12.5258C19.2783 12.5077 19.2312 12.551 19.2094 12.5655C19.1732 12.5872 19.126 12.6125 19.0825 12.598C19.0209 12.5763 19.0426 12.551 18.9773 12.5836C18.9411 12.6016 18.8939 12.5836 18.854 12.5836C18.8105 12.5836 18.6945 12.58 18.4769 12.6775C18.5458 12.4571 18.7779 12.3667 18.8105 12.3342C18.8395 12.3089 18.8794 12.28 18.8867 12.2439C18.8939 12.215 18.9012 12.1897 18.9411 12.1861C18.9665 12.1861 18.9918 12.1861 19.0136 12.1752C19.0571 12.1535 19.0607 12.0957 19.1043 12.074C19.1478 12.056 19.2167 12.074 19.2602 12.0813C19.2783 12.0813 19.3073 12.0885 19.3255 12.0813C19.3545 12.0668 19.3001 12.0487 19.3364 12.0271C19.3617 12.0126 19.398 12.0198 19.4198 12.0271C19.4778 12.0415 19.5503 12.0307 19.5938 12.0704C19.6373 12.1102 19.6047 12.1174 19.6083 12.1644C19.6083 12.1644 19.7824 12.28 19.6083 12.3993V12.4065Z" fill="#759421"/><path d="M18.5821 12.5583C18.5821 12.5583 18.8759 12.345 19.2167 12.2294C19.3872 12.168 19.5685 12.1355 19.7063 12.1391C19.8441 12.1427 19.9348 12.1716 19.9348 12.1716C19.9493 12.1716 19.9565 12.1897 19.9529 12.2005C19.9529 12.215 19.9348 12.2222 19.9239 12.2186C19.9239 12.2186 19.8405 12.1897 19.7063 12.1824C19.5758 12.1752 19.3981 12.2005 19.2276 12.2583C18.8867 12.3667 18.5894 12.5691 18.5894 12.5691C18.5785 12.5655 18.5785 12.5619 18.5821 12.5583Z" fill="#62811D"/><path d="M19.4888 11.3982C19.4997 11.344 19.5033 11.2898 19.5178 11.2356C19.5251 11.2139 19.5323 11.1923 19.5359 11.1706C19.5468 11.1128 19.5106 11.0766 19.4852 11.0839C19.4707 11.0875 19.467 11.1055 19.4598 11.1055C19.4453 11.1091 19.4598 11.0622 19.4634 11.0405C19.467 11.008 19.4707 10.961 19.4453 10.9357C19.4054 10.8959 19.3945 10.9212 19.3981 10.8598C19.3981 10.8237 19.3728 10.7948 19.3582 10.7658C19.3401 10.7333 19.3002 10.6466 19.2966 10.4514C19.1552 10.5779 19.1661 10.7839 19.1552 10.82C19.1443 10.8526 19.137 10.8923 19.1117 10.9104C19.0899 10.9248 19.0754 10.9393 19.0863 10.9718C19.0935 10.9899 19.1044 11.008 19.1044 11.0296C19.1044 11.0694 19.0609 11.0911 19.0609 11.1308C19.0609 11.1706 19.1008 11.2139 19.1225 11.2429C19.1298 11.2537 19.1443 11.2754 19.1443 11.2935C19.1443 11.3187 19.1117 11.2862 19.108 11.3187C19.108 11.344 19.1225 11.3657 19.137 11.3802C19.1697 11.4163 19.1878 11.4778 19.2277 11.4958C19.2712 11.5139 19.2676 11.4886 19.3039 11.4741C19.3039 11.4741 19.4489 11.5645 19.4815 11.3946L19.4888 11.3982Z" fill="#759421"/><path d="M19.2563 10.585C19.2563 10.585 19.2057 10.8777 19.2418 11.1668C19.2563 11.3114 19.2996 11.4523 19.3502 11.5499C19.4008 11.6438 19.4514 11.698 19.4514 11.698C19.4586 11.7053 19.4586 11.7197 19.4514 11.7269C19.4442 11.7342 19.4297 11.7342 19.4225 11.7269C19.4225 11.7269 19.3683 11.6691 19.3177 11.5679C19.2671 11.4667 19.231 11.3222 19.2165 11.174C19.1876 10.8777 19.2454 10.5886 19.2454 10.5886C19.2527 10.5886 19.2563 10.5886 19.2563 10.5886V10.585Z" fill="#62811D"/><path d="M20.6128 9.33846C20.5911 9.2951 20.573 9.2445 20.5476 9.20475C20.5367 9.18668 20.5258 9.17223 20.5149 9.15416C20.4932 9.10718 20.5149 9.06743 20.5403 9.06743C20.5548 9.06743 20.5621 9.08189 20.5657 9.08189C20.5802 9.08189 20.5548 9.04213 20.5476 9.02407C20.5367 8.99516 20.5222 8.9554 20.5403 8.92649C20.5657 8.88313 20.5802 8.90481 20.5657 8.8506C20.5548 8.82169 20.573 8.78917 20.5802 8.76026C20.5875 8.72774 20.602 8.64462 20.5621 8.47116C20.7144 8.55066 20.7543 8.73135 20.7724 8.76026C20.7869 8.78556 20.805 8.81808 20.8304 8.82892C20.8522 8.83615 20.8667 8.84699 20.8667 8.8759C20.8667 8.89397 20.8594 8.91204 20.8667 8.93011C20.8739 8.96625 20.9211 8.97347 20.9283 9.00961C20.9356 9.04213 20.9102 9.09273 20.903 9.12164C20.8993 9.13609 20.8884 9.15416 20.8921 9.16862C20.8993 9.19391 20.9211 9.15416 20.9283 9.18307C20.9356 9.20475 20.9283 9.23005 20.9175 9.2445C20.8993 9.28425 20.8957 9.33846 20.8631 9.36737C20.8304 9.39267 20.8268 9.36737 20.7905 9.36737C20.7905 9.36737 20.6817 9.4794 20.6165 9.33846H20.6128Z" fill="#759421"/><path d="M20.6346 8.56875C20.6346 8.56875 20.7539 8.81087 20.7936 9.07829C20.8153 9.212 20.8153 9.34571 20.7936 9.44689C20.7719 9.54808 20.7394 9.60951 20.7394 9.60951C20.7358 9.61674 20.7249 9.62396 20.7141 9.61674C20.7069 9.61312 20.6997 9.60228 20.7069 9.59144C20.7069 9.59144 20.7394 9.53362 20.7611 9.43966C20.7828 9.34571 20.7864 9.212 20.7683 9.0819C20.7322 8.8181 20.6238 8.57236 20.6238 8.57236C20.6274 8.56514 20.631 8.56514 20.631 8.56875H20.6346Z" fill="#62811D"/><path d="M20.7904 7.49901C20.7687 7.45565 20.7505 7.40506 20.7252 7.36531C20.7143 7.34724 20.7034 7.33278 20.6925 7.31471C20.6708 7.26773 20.6925 7.22798 20.7179 7.22798C20.7324 7.22798 20.7397 7.24244 20.7433 7.24244C20.7578 7.24244 20.7324 7.20269 20.7252 7.18462C20.7143 7.15571 20.6998 7.11596 20.7179 7.08705C20.7433 7.04368 20.7578 7.06536 20.7433 7.01116C20.7324 6.98225 20.7505 6.94972 20.7578 6.92081C20.765 6.88829 20.7796 6.80517 20.7397 6.63171C20.892 6.71122 20.9319 6.8919 20.95 6.92081C20.9645 6.94611 20.9826 6.97863 21.008 6.98948C21.0298 6.9967 21.0443 7.00754 21.0443 7.03645C21.0443 7.05452 21.037 7.07259 21.0443 7.09066C21.0515 7.1268 21.0987 7.13403 21.1059 7.17016C21.1132 7.20269 21.0878 7.25328 21.0805 7.28219C21.0769 7.29664 21.066 7.31471 21.0697 7.32917C21.0769 7.35446 21.0987 7.31471 21.1059 7.34362C21.1132 7.36531 21.1059 7.3906 21.0951 7.40506C21.0769 7.44481 21.0733 7.49901 21.0406 7.52792C21.008 7.55322 21.0044 7.52792 20.9681 7.52792C20.9681 7.52792 20.8593 7.63995 20.7941 7.49901H20.7904Z" fill="#759421"/><path d="M20.8122 6.72936C20.8122 6.72936 20.9314 6.97148 20.9712 7.2389C20.9929 7.37261 20.9929 7.50632 20.9712 7.60751C20.9495 7.70869 20.917 7.77012 20.917 7.77012C20.9134 7.77735 20.9025 7.78458 20.8917 7.77735C20.8844 7.77374 20.8772 7.7629 20.8845 7.75206C20.8845 7.75206 20.917 7.69424 20.9387 7.60028C20.9603 7.50632 20.964 7.37261 20.9459 7.24252C20.9098 6.97871 20.8013 6.73298 20.8013 6.73298C20.8049 6.72575 20.8086 6.72575 20.8086 6.72936H20.8122Z" fill="#62811D"/><path d="M19.8549 7.60377C19.8223 7.58209 19.7897 7.55679 19.757 7.53511C19.7425 7.52788 19.728 7.52066 19.7135 7.51343C19.6772 7.48813 19.6772 7.452 19.6954 7.44477C19.7062 7.44115 19.7171 7.44477 19.7208 7.44477C19.7316 7.43754 19.6954 7.42309 19.6845 7.41224C19.6664 7.39779 19.641 7.37611 19.641 7.3472C19.641 7.30745 19.6591 7.31467 19.6265 7.28576C19.6083 7.26769 19.6083 7.23878 19.6011 7.2171C19.5938 7.19181 19.5721 7.12676 19.4705 7.02557C19.6083 7.01835 19.7063 7.13037 19.7316 7.14121C19.7534 7.15205 19.7752 7.17012 19.7969 7.16651C19.815 7.16651 19.8295 7.16651 19.8404 7.18458C19.8477 7.19903 19.8513 7.21349 19.8622 7.22433C19.8839 7.24601 19.9166 7.23156 19.9383 7.25324C19.9565 7.27131 19.9601 7.31467 19.9637 7.33997C19.9637 7.35081 19.9673 7.36888 19.9782 7.37611C19.9927 7.39056 19.9927 7.35442 20.0109 7.37249C20.0254 7.38333 20.0254 7.40502 20.029 7.41947C20.029 7.45561 20.0544 7.49536 20.0399 7.52427C20.029 7.55679 20.0145 7.54234 19.9891 7.54957C19.9891 7.54957 19.9601 7.66882 19.8586 7.60016L19.8549 7.60377Z" fill="#759421"/><path d="M20.3482 8.52529C20.3482 8.52529 20.3373 8.42772 20.301 8.29039C20.2684 8.14946 20.1995 7.96877 20.1088 7.79892C19.9311 7.45562 19.67 7.16652 19.67 7.16652C19.6809 7.15929 19.9493 7.44116 20.1378 7.78447C20.2321 7.95432 20.3047 8.13862 20.3445 8.27955C20.3844 8.42049 20.3989 8.51806 20.3989 8.51806C20.3989 8.53613 20.3917 8.54697 20.3772 8.55058C20.3627 8.55058 20.3482 8.54336 20.3482 8.5289V8.52529Z" fill="#62811D"/><path d="M20.029 8.12422C19.9854 8.11699 19.9383 8.10615 19.8912 8.10253C19.873 8.10253 19.8549 8.10253 19.8331 8.10253C19.7824 8.09531 19.7679 8.05556 19.7787 8.03749C19.786 8.02665 19.8005 8.02665 19.8041 8.02303C19.8114 8.01219 19.7679 8.01219 19.7497 8.00858C19.7207 8.00135 19.6844 7.99051 19.6699 7.9616C19.6518 7.91823 19.6699 7.91823 19.6228 7.90378C19.5938 7.89655 19.5793 7.86403 19.5612 7.84234C19.5394 7.82066 19.485 7.76284 19.3291 7.70502C19.4705 7.62913 19.6337 7.69779 19.6627 7.69779C19.6917 7.69779 19.7243 7.70502 19.7461 7.69057C19.7642 7.67973 19.7787 7.66888 19.8005 7.69057C19.815 7.70141 19.8259 7.71586 19.8404 7.71948C19.873 7.73032 19.902 7.70141 19.9347 7.71225C19.9637 7.72309 19.9891 7.77007 20.0072 7.79175C20.0145 7.80259 20.0253 7.82066 20.0398 7.82427C20.0616 7.8315 20.0435 7.79537 20.0725 7.80259C20.0906 7.80982 20.1051 7.82789 20.116 7.84234C20.1377 7.87848 20.1776 7.91101 20.1813 7.94714C20.1813 7.98689 20.1631 7.97605 20.1414 8.00135C20.1414 8.00135 20.1704 8.14229 20.0253 8.1206L20.029 8.12422Z" fill="#759421"/><path d="M19.4452 7.69772C19.4452 7.69772 19.6954 7.73747 19.9239 7.84589C20.0399 7.89648 20.1451 7.97237 20.2104 8.04103C20.2756 8.10969 20.3083 8.16751 20.3083 8.16751C20.3119 8.17474 20.3083 8.18558 20.301 8.18919C20.2938 8.19281 20.2829 8.18919 20.2793 8.18197C20.2793 8.18197 20.2539 8.12776 20.1886 8.0591C20.127 7.99044 20.0254 7.91816 19.913 7.86396C19.6918 7.75193 19.4416 7.70495 19.4416 7.70495C19.4416 7.69772 19.4416 7.69772 19.4416 7.69772H19.4452Z" fill="#62811D"/><path d="M20.319 7.70132C20.348 7.67241 20.3734 7.6435 20.4024 7.6182C20.4133 7.60736 20.4278 7.60014 20.4387 7.58929C20.4677 7.56038 20.4604 7.52425 20.4423 7.52063C20.4314 7.52063 20.4205 7.52425 20.4169 7.52425C20.406 7.52425 20.435 7.49895 20.4459 7.48811C20.464 7.47004 20.4822 7.44474 20.4749 7.41945C20.4677 7.3797 20.4495 7.39054 20.4749 7.35801C20.4894 7.33633 20.4858 7.31104 20.4858 7.28574C20.4858 7.26044 20.5003 7.19178 20.5765 7.07614C20.4423 7.09421 20.3661 7.22069 20.3444 7.23876C20.3262 7.25322 20.3045 7.2749 20.2827 7.2749C20.2646 7.2749 20.2501 7.2749 20.2428 7.30019C20.2392 7.31465 20.2392 7.3291 20.232 7.33995C20.2175 7.36524 20.1812 7.35801 20.1631 7.38331C20.1485 7.40499 20.1558 7.44836 20.1522 7.47365C20.1522 7.4845 20.1522 7.50256 20.1449 7.51341C20.134 7.52786 20.1268 7.49534 20.1123 7.51341C20.1014 7.52786 20.1014 7.54954 20.105 7.564C20.1087 7.60014 20.0941 7.63989 20.1123 7.6688C20.1304 7.69771 20.1377 7.67964 20.1667 7.68687C20.1667 7.68687 20.2174 7.79889 20.3045 7.71216L20.319 7.70132Z" fill="#759421"/><path d="M20.5111 7.12673C20.5111 7.12673 20.366 7.27851 20.2681 7.46643C20.221 7.56038 20.1883 7.65796 20.1774 7.73384C20.1702 7.80973 20.1774 7.86033 20.1774 7.86033C20.1774 7.86755 20.1738 7.87478 20.1666 7.87839C20.1593 7.87839 20.1521 7.87478 20.1521 7.86755C20.1521 7.86755 20.1448 7.81335 20.1521 7.73023C20.1629 7.65073 20.1992 7.54954 20.25 7.45559C20.3515 7.26767 20.5038 7.11951 20.5038 7.11951C20.5111 7.11951 20.5111 7.11951 20.5074 7.12312L20.5111 7.12673Z" fill="#62811D"/><path d="M19.7898 8.99148C19.7499 8.99148 19.7064 8.98064 19.6665 8.98064C19.6484 8.98064 19.6338 8.98064 19.6157 8.98064C19.5722 8.97703 19.5541 8.9445 19.5649 8.92644C19.5722 8.91559 19.5831 8.91559 19.5867 8.91198C19.594 8.90114 19.5541 8.90475 19.5396 8.90114C19.5142 8.90114 19.4815 8.8903 19.467 8.865C19.4453 8.82886 19.467 8.82525 19.4235 8.81441C19.3981 8.80718 19.3836 8.78189 19.3655 8.76382C19.3474 8.74575 19.293 8.69877 19.1479 8.6554C19.2676 8.57952 19.4163 8.63011 19.4453 8.63011C19.4707 8.63011 19.4997 8.63011 19.5178 8.61927C19.5323 8.60843 19.5468 8.59758 19.5686 8.61204C19.5794 8.61927 19.5903 8.63372 19.6048 8.63734C19.6338 8.64456 19.6592 8.61927 19.6882 8.62649C19.7173 8.63372 19.739 8.67347 19.7571 8.69154C19.7644 8.69877 19.7753 8.71684 19.7862 8.71684C19.8043 8.72407 19.7862 8.69154 19.8115 8.69516C19.8297 8.69877 19.8442 8.71684 19.8514 8.72768C19.8732 8.7602 19.9095 8.78189 19.9167 8.81802C19.9203 8.85416 19.9022 8.84693 19.8841 8.86862C19.8841 8.86862 19.9203 8.99148 19.7898 8.98064V8.99148Z" fill="#759421"/><path d="M19.2422 8.65186C19.2422 8.65186 19.467 8.66992 19.6737 8.75304C19.7789 8.79279 19.8768 8.85061 19.9384 8.90482C20.0001 8.96264 20.0327 9.01323 20.0327 9.01323C20.0363 9.02046 20.0327 9.02769 20.0291 9.03491C20.0255 9.04214 20.0146 9.03491 20.0073 9.0313C20.0073 9.0313 19.9783 8.98432 19.9203 8.9265C19.8623 8.87229 19.768 8.81086 19.6665 8.77111C19.4634 8.68438 19.2385 8.6627 19.2385 8.6627C19.2385 8.65547 19.2385 8.65547 19.2385 8.65547L19.2422 8.65186Z" fill="#62811D"/><path d="M19.9167 10.1986C19.8877 10.1553 19.8586 10.1047 19.826 10.0613C19.8115 10.0432 19.7934 10.0288 19.7825 10.0107C19.7498 9.96012 19.768 9.91675 19.7934 9.91314C19.8079 9.91314 19.8188 9.92398 19.826 9.92398C19.8405 9.92398 19.8079 9.88423 19.797 9.86616C19.7789 9.83725 19.7607 9.7975 19.7752 9.76136C19.797 9.71077 19.8151 9.72884 19.7897 9.67463C19.7752 9.64211 19.7897 9.60597 19.7897 9.57345C19.7897 9.53731 19.797 9.44335 19.7245 9.26266C19.9058 9.3241 19.9747 9.51924 19.9965 9.54454C20.0182 9.56983 20.04 9.60236 20.069 9.60958C20.0944 9.61681 20.1125 9.62043 20.1161 9.65656C20.1161 9.67825 20.1161 9.69632 20.1234 9.71438C20.1379 9.75052 20.1886 9.75413 20.2031 9.79027C20.2177 9.82641 20.1959 9.88062 20.1923 9.91675C20.1923 9.93121 20.185 9.9565 20.1923 9.97096C20.2031 9.99626 20.2213 9.95289 20.2358 9.9818C20.2467 10.0035 20.2394 10.0324 20.2358 10.0505C20.2213 10.0974 20.2285 10.1589 20.1959 10.1914C20.1633 10.2239 20.156 10.1986 20.1197 10.1986C20.1197 10.1986 20.0218 10.3396 19.9239 10.1986H19.9167Z" fill="#759421"/><path d="M19.8183 9.35653C19.8183 9.35653 19.9845 9.60227 20.0712 9.88775C20.1182 10.0287 20.1399 10.1769 20.1327 10.2889C20.1254 10.4009 20.1001 10.4732 20.1001 10.4732C20.1001 10.484 20.0857 10.4912 20.0748 10.4876C20.064 10.484 20.0604 10.4732 20.0604 10.4623C20.0604 10.4623 20.0857 10.3937 20.0965 10.2853C20.1038 10.1769 20.0893 10.0323 20.0459 9.89137C19.9664 9.60949 19.8074 9.36014 19.8074 9.36014C19.811 9.35292 19.8147 9.35292 19.8147 9.35653H19.8183Z" fill="#62811D"/><path d="M18.5822 12.8365C18.6474 12.8257 18.7127 12.804 18.778 12.8004C18.807 12.8004 18.8324 12.8004 18.8614 12.7932C18.9339 12.7787 18.9557 12.7245 18.9375 12.6992C18.9267 12.6847 18.9049 12.6884 18.9013 12.6811C18.8904 12.6667 18.952 12.6631 18.9774 12.6558C19.0173 12.645 19.0681 12.6269 19.0862 12.5872C19.1116 12.5257 19.079 12.5257 19.1515 12.5004C19.1914 12.486 19.2131 12.4426 19.2385 12.4137C19.2675 12.3812 19.3473 12.2945 19.5685 12.2041C19.3618 12.0993 19.1334 12.2041 19.0899 12.2113C19.05 12.2113 19.0028 12.2222 18.9702 12.2041C18.9448 12.1861 18.923 12.1752 18.8904 12.2041C18.8723 12.2186 18.8578 12.2403 18.8324 12.2511C18.7889 12.2692 18.7417 12.2294 18.6982 12.2475C18.6547 12.2656 18.622 12.3306 18.5967 12.3631C18.5858 12.3776 18.5713 12.4029 18.5531 12.4101C18.5241 12.4209 18.5459 12.3704 18.506 12.3812C18.477 12.392 18.4589 12.4209 18.448 12.4426C18.419 12.4968 18.3609 12.5402 18.3609 12.598C18.3609 12.6558 18.3863 12.6378 18.419 12.6739C18.419 12.6739 18.3827 12.8799 18.5894 12.8401L18.5822 12.8365Z" fill="#759421"/><path d="M17.759 11.174C17.8098 11.1523 17.8642 11.127 17.9186 11.109C17.9403 11.1018 17.9657 11.0981 17.9875 11.0909C18.0455 11.0692 18.0564 11.0186 18.0346 11.0006C18.0237 10.9897 18.0056 10.997 18.002 10.9933C17.9875 10.9825 18.0419 10.9717 18.0636 10.9608C18.0963 10.9464 18.1361 10.9211 18.1434 10.8849C18.1543 10.8307 18.1289 10.8343 18.1833 10.8018C18.2159 10.7837 18.2232 10.744 18.2413 10.7151C18.2594 10.6826 18.3138 10.5994 18.4843 10.4874C18.2921 10.4332 18.118 10.5597 18.0817 10.5705C18.0491 10.5778 18.0092 10.5958 17.9802 10.585C17.9548 10.5741 17.9367 10.5705 17.9113 10.5958C17.8968 10.6103 17.8895 10.632 17.8714 10.6428C17.8352 10.6645 17.7916 10.6392 17.7554 10.6609C17.7227 10.6826 17.7082 10.744 17.6901 10.7765C17.6828 10.791 17.6756 10.8163 17.6611 10.8235C17.6357 10.8379 17.6466 10.791 17.6176 10.8054C17.5958 10.8163 17.5849 10.8452 17.5777 10.8669C17.5632 10.9175 17.5197 10.9644 17.5305 11.0114C17.5378 11.0584 17.5596 11.0403 17.5922 11.0656C17.5922 11.0656 17.5922 11.2427 17.7626 11.1776L17.759 11.174Z" fill="#759421"/><path d="M17.886 9.59133C17.9331 9.57687 17.9839 9.5588 18.031 9.55157C18.0528 9.55157 18.0709 9.54796 18.0927 9.54073C18.1471 9.52628 18.158 9.48291 18.1435 9.46484C18.1362 9.454 18.1181 9.45762 18.1145 9.454C18.1036 9.44316 18.1507 9.43955 18.1725 9.43232C18.2015 9.42148 18.2414 9.40702 18.2522 9.3745C18.2704 9.32752 18.245 9.32752 18.2958 9.30584C18.3248 9.29138 18.3393 9.25886 18.3574 9.23356C18.3755 9.20827 18.4336 9.13961 18.5931 9.0601C18.4336 8.99506 18.2668 9.0854 18.2341 9.08901C18.2051 9.09263 18.1688 9.10347 18.1435 9.08901C18.1217 9.07817 18.1072 9.07094 18.0818 9.09263C18.0673 9.10708 18.0564 9.12154 18.0419 9.12876C18.0093 9.14322 17.973 9.11792 17.9404 9.13238C17.9077 9.14683 17.8896 9.19743 17.8715 9.22634C17.8642 9.23718 17.8533 9.25886 17.8388 9.26609C17.8171 9.27693 17.8316 9.23718 17.8026 9.24802C17.7808 9.25525 17.7699 9.28054 17.7627 9.29861C17.7446 9.33836 17.701 9.37811 17.7047 9.41786C17.7047 9.46123 17.7264 9.44678 17.7518 9.47207C17.7518 9.47207 17.7373 9.62746 17.8896 9.58771L17.886 9.59133Z" fill="#759421"/><path d="M17.0082 7.93255C17.0264 7.88558 17.0409 7.83498 17.0663 7.79162C17.0771 7.77355 17.088 7.75548 17.0953 7.73741C17.117 7.68682 17.088 7.65068 17.0663 7.65068C17.0518 7.65068 17.0445 7.66514 17.0409 7.66875C17.0264 7.66875 17.0518 7.629 17.0554 7.61093C17.0663 7.58202 17.0735 7.54227 17.0554 7.51336C17.0264 7.47361 17.0119 7.49168 17.0264 7.43747C17.0336 7.40495 17.0155 7.37604 17.0046 7.34713C16.9974 7.3146 16.972 7.23149 17.0046 7.05441C16.8559 7.14114 16.8305 7.32906 16.8124 7.35797C16.7979 7.38326 16.7834 7.4194 16.758 7.43024C16.7363 7.44108 16.7217 7.44831 16.7254 7.48084C16.7254 7.4989 16.7363 7.51697 16.7326 7.53504C16.7254 7.57118 16.6819 7.58202 16.6746 7.61816C16.6674 7.6543 16.6964 7.69766 16.7072 7.73018C16.7109 7.74103 16.7218 7.76271 16.7181 7.77716C16.7145 7.80246 16.6891 7.76632 16.6819 7.79523C16.6782 7.81691 16.6891 7.84221 16.6964 7.85667C16.7181 7.89642 16.7254 7.95062 16.758 7.97592C16.7943 8.00122 16.7943 7.97592 16.8305 7.96869C16.8305 7.96869 16.9466 8.07349 17.0046 7.92894L17.0082 7.93255Z" fill="#759421"/><path d="M16.1706 10.6105C16.1416 10.5779 16.1162 10.5382 16.0836 10.5057C16.0691 10.4912 16.0545 10.4804 16.0437 10.4659C16.011 10.4298 16.0255 10.39 16.0437 10.3864C16.0545 10.3864 16.0654 10.3936 16.0727 10.3936C16.0872 10.3936 16.0545 10.3611 16.0437 10.3467C16.0255 10.325 16.0074 10.2924 16.0147 10.2635C16.0292 10.2202 16.0473 10.2346 16.0183 10.1913C16.0038 10.166 16.011 10.1371 16.011 10.1081C16.011 10.0792 16.0074 9.99973 15.9312 9.8588C16.0872 9.89493 16.1633 10.0467 16.1851 10.0684C16.2069 10.0865 16.2286 10.1118 16.254 10.1154C16.2758 10.1154 16.2939 10.1226 16.2975 10.1479C16.2975 10.1624 16.2975 10.1804 16.3084 10.1949C16.3229 10.2238 16.3664 10.2238 16.3845 10.2491C16.399 10.278 16.3845 10.325 16.3845 10.3539C16.3845 10.3647 16.3809 10.3864 16.3845 10.3972C16.3954 10.4153 16.4063 10.3792 16.4208 10.4009C16.4317 10.4189 16.4281 10.4406 16.4244 10.4587C16.4172 10.4984 16.4244 10.5454 16.4027 10.5743C16.3773 10.6032 16.37 10.5852 16.3374 10.5888C16.3374 10.5888 16.2649 10.708 16.1706 10.5996V10.6105Z" fill="#759421"/><path d="M17.2368 8.07359C17.273 8.05552 17.3093 8.03384 17.3492 8.02299C17.3637 8.01577 17.3818 8.01577 17.3963 8.00854C17.4362 7.99047 17.4398 7.95433 17.4253 7.93988C17.4181 7.93265 17.4036 7.93988 17.4 7.93626C17.3891 7.92904 17.429 7.9182 17.4435 7.91097C17.4652 7.90013 17.4942 7.88206 17.4979 7.85315C17.5015 7.8134 17.4834 7.81701 17.5196 7.79171C17.5414 7.77726 17.545 7.74835 17.5559 7.72667C17.5668 7.70137 17.5994 7.63994 17.7191 7.55321C17.574 7.52068 17.4543 7.61825 17.429 7.6291C17.4072 7.63632 17.3782 7.65078 17.3564 7.64355C17.3383 7.63632 17.3238 7.63271 17.3093 7.65439C17.302 7.66523 17.2948 7.67969 17.2839 7.69053C17.2585 7.7086 17.2259 7.69053 17.2005 7.7086C17.1787 7.72667 17.1715 7.77003 17.1606 7.79171C17.157 7.80256 17.1533 7.82062 17.1425 7.82785C17.1243 7.83869 17.1316 7.80617 17.1098 7.81701C17.0953 7.82785 17.0881 7.84592 17.0844 7.86038C17.0772 7.89651 17.0482 7.93265 17.0591 7.96517C17.0699 7.9977 17.0808 7.98686 17.1062 8.00131C17.1062 8.00131 17.1207 8.12779 17.2368 8.07359Z" fill="#759421"/><path d="M16.4824 8.49276C16.4534 8.46385 16.428 8.43494 16.399 8.40965C16.3845 8.39881 16.3736 8.39158 16.3591 8.38074C16.3301 8.35183 16.341 8.31569 16.3591 8.31208C16.37 8.31208 16.3809 8.31569 16.3845 8.31569C16.3954 8.31569 16.3664 8.29039 16.3555 8.27955C16.3374 8.26148 16.3192 8.23619 16.3265 8.21089C16.3373 8.17475 16.3555 8.18198 16.3265 8.14946C16.312 8.12777 16.3192 8.10248 16.3192 8.07718C16.3192 8.05189 16.312 7.98684 16.2358 7.86758C16.3809 7.88565 16.4534 8.01213 16.4752 8.0302C16.4933 8.04466 16.515 8.06634 16.5368 8.06634C16.5549 8.06634 16.5731 8.06634 16.5767 8.09164C16.5767 8.10609 16.5767 8.12055 16.5876 8.13139C16.6021 8.15668 16.642 8.14946 16.6565 8.17475C16.671 8.19644 16.6601 8.2398 16.6601 8.2651C16.6601 8.27594 16.6601 8.29401 16.6601 8.30123C16.671 8.31569 16.6819 8.28317 16.6927 8.30123C16.7036 8.31569 16.7 8.33376 16.6964 8.34821C16.6891 8.38435 16.7 8.4241 16.6782 8.4494C16.6565 8.47831 16.6492 8.46024 16.6202 8.46385C16.6202 8.46385 16.5586 8.57227 16.4715 8.48554L16.4824 8.49276Z" fill="#759421"/><path d="M15.6521 11.9077C15.5977 11.9077 15.5397 11.9004 15.4853 11.9077C15.4636 11.9077 15.4418 11.9149 15.4164 11.9149C15.3584 11.9149 15.3294 11.8715 15.3403 11.8498C15.3475 11.8354 15.3657 11.8354 15.3693 11.8318C15.3765 11.8173 15.3258 11.8246 15.304 11.8246C15.2678 11.8246 15.2242 11.8173 15.2061 11.7848C15.1771 11.7414 15.2025 11.7342 15.1408 11.7234C15.1046 11.7198 15.0828 11.6836 15.0574 11.6655C15.0284 11.6439 14.9523 11.586 14.7601 11.5463C14.9124 11.4307 15.1118 11.4849 15.1481 11.4776C15.1807 11.474 15.2206 11.4776 15.2424 11.4523C15.2605 11.4343 15.2786 11.4234 15.3076 11.4379C15.3258 11.4487 15.3403 11.4632 15.362 11.4668C15.4019 11.474 15.4309 11.4343 15.4708 11.4415C15.5071 11.4487 15.5433 11.4993 15.5687 11.521C15.5796 11.5318 15.5977 11.5499 15.6122 11.5535C15.6376 11.5571 15.6123 11.5174 15.6449 11.5246C15.6703 11.5246 15.6884 11.5499 15.7029 11.5644C15.7355 11.6041 15.7899 11.633 15.7972 11.6764C15.8081 11.7234 15.7827 11.7125 15.7609 11.7451C15.7609 11.7451 15.8226 11.9041 15.6485 11.9041L15.6521 11.9077Z" fill="#759421"/><path d="M16.8559 10.296C16.7981 10.6104 16.7872 10.9465 16.7981 11.2898C16.8089 11.6331 16.8487 11.9872 16.8667 12.3414C16.874 12.5221 16.8812 12.7028 16.8884 12.8834L16.8992 13.1545C16.8956 13.2376 16.8848 13.3315 16.8776 13.4219C16.8703 13.5122 16.8523 13.6062 16.8631 13.7038L16.8812 13.9748C16.892 14.1555 16.9029 14.3362 16.9101 14.5169C16.9101 14.7228 16.9101 14.9361 16.9101 15.1456C16.8992 15.2107 17.0582 15.2071 17.051 15.1456C17.0438 14.9397 17.051 14.7265 17.0438 14.5096C17.033 14.3289 17.0221 14.1483 17.0077 13.9676L16.9896 13.6965C16.9788 13.6134 16.9932 13.5267 17.0004 13.4327C17.0077 13.3388 17.0185 13.2557 17.0221 13.1545L17.0077 12.8798C16.9968 12.6991 16.9896 12.5185 16.9788 12.3378C16.9571 11.9764 16.9137 11.6259 16.8992 11.2862C16.8812 10.9465 16.892 10.6176 16.9426 10.3141C16.9679 10.1623 17.0077 10.0141 17.0293 9.86234C17.051 9.71418 17.0474 9.56601 17.033 9.42869C17.0077 9.15405 16.9498 8.90831 16.9245 8.68787C16.8956 8.46743 16.8667 8.01933 16.8667 7.97958C16.8631 7.7483 16.8992 7.50256 16.8992 7.50256C16.8992 7.48811 16.8848 7.48449 16.8812 7.49895C16.8812 7.49895 16.8234 7.79889 16.8234 8.12051C16.8234 8.27952 16.8342 8.47466 16.8595 8.69871C16.8848 8.92277 16.9354 9.1685 16.9571 9.43592C16.9679 9.56963 16.9679 9.71056 16.9462 9.85511C16.9245 9.99967 16.8848 10.1442 16.8559 10.3032V10.296Z" fill="#62811D"/><path d="M16.954 14.5132C16.954 14.5132 17.0229 14.3434 17.1534 14.0976C17.284 13.8519 17.4762 13.5375 17.7228 13.2592C17.9657 12.981 18.2558 12.7461 18.4952 12.6088C18.7345 12.4678 18.9086 12.4064 18.9086 12.4064C18.9158 12.4064 18.9231 12.4064 18.9231 12.4136C18.9231 12.4209 18.9231 12.4281 18.9158 12.4281C18.9158 12.4281 18.7454 12.4931 18.5133 12.6377C18.2812 12.7786 17.9984 13.0171 17.7663 13.2954C17.5342 13.5736 17.3492 13.888 17.2259 14.1338C17.1063 14.3759 17.0374 14.5457 17.0374 14.5457C17.0265 14.571 17.0011 14.5819 16.9757 14.5747C16.9503 14.5638 16.9395 14.5385 16.9467 14.5132V14.5096L16.954 14.5132Z" fill="#62811D"/><path d="M16.8851 12.3377C16.8851 12.3377 16.7908 11.7595 16.5769 11.2174C16.4644 10.95 16.3484 10.679 16.2722 10.473C16.1925 10.2706 16.1127 10.1442 16.1127 10.1442C16.1272 10.1333 16.2106 10.2562 16.2976 10.4622C16.3774 10.6682 16.5007 10.932 16.6204 11.1994C16.8488 11.745 16.9613 12.3232 16.9613 12.3232C16.9649 12.3449 16.954 12.363 16.9323 12.3702C16.9105 12.3775 16.8924 12.363 16.8851 12.3413V12.3377Z" fill="#62811D"/><path d="M16.8451 10.4586C16.8451 10.4586 16.8995 10.3502 17.0083 10.1948C17.1134 10.043 17.2802 9.85507 17.4652 9.68884C17.8351 9.35638 18.2775 9.13232 18.2775 9.13232C18.2847 9.14678 17.8496 9.38167 17.4942 9.72137C17.3165 9.8876 17.1606 10.0755 17.059 10.2273C16.9575 10.3791 16.9067 10.4875 16.9067 10.4875C16.8995 10.5056 16.8777 10.5128 16.8632 10.5019C16.8487 10.4911 16.8378 10.473 16.8487 10.4586H16.8451Z" fill="#62811D"/><path d="M16.9287 9.20469C16.9287 9.20469 16.9142 9.12519 16.878 9.01316C16.8417 8.90114 16.7728 8.75659 16.7003 8.61204C16.6277 8.46749 16.5697 8.31932 16.5081 8.21452C16.4501 8.10973 16.3957 8.05191 16.3957 8.05191C16.4029 8.04468 16.4609 8.1025 16.5226 8.2073C16.5842 8.3121 16.6495 8.46026 16.7257 8.6012C16.8018 8.74213 16.8743 8.88668 16.9179 9.00232C16.9614 9.11796 16.9759 9.19746 16.9759 9.19746C16.9759 9.21192 16.9686 9.22637 16.9578 9.22637C16.9433 9.22637 16.9324 9.21915 16.9287 9.20831V9.20469Z" fill="#62811D"/><path d="M16.8452 8.42767C16.8452 8.42767 16.9286 8.21445 17.0664 8.04099C17.1317 7.95065 17.2078 7.87115 17.2731 7.81694C17.3384 7.76274 17.3855 7.73383 17.3855 7.73383C17.3928 7.74467 17.3457 7.77358 17.284 7.82778C17.2224 7.88199 17.1498 7.96511 17.0882 8.05545C16.9576 8.23614 16.8887 8.44212 16.8887 8.44212C16.8851 8.45296 16.8706 8.46019 16.8597 8.45658C16.8488 8.45296 16.8416 8.43851 16.8452 8.42767Z" fill="#62811D"/><path d="M17.2368 10.6284C17.273 10.6103 17.3093 10.5886 17.3492 10.5778C17.3637 10.5706 17.3818 10.5706 17.3963 10.5633C17.4362 10.5453 17.4398 10.5091 17.4253 10.4947C17.4181 10.4875 17.4036 10.4947 17.4 10.4911C17.3891 10.4838 17.429 10.473 17.4435 10.4658C17.4652 10.4549 17.4942 10.4369 17.4979 10.408C17.5015 10.3682 17.4834 10.3718 17.5196 10.3465C17.5414 10.3321 17.545 10.3032 17.5559 10.2815C17.5668 10.2562 17.5994 10.1947 17.7191 10.108C17.574 10.0755 17.4543 10.1731 17.429 10.1839C17.4072 10.1911 17.3782 10.2056 17.3564 10.1984C17.3383 10.1911 17.3238 10.1875 17.3093 10.2092C17.302 10.22 17.2948 10.2345 17.2839 10.2453C17.2585 10.2634 17.2259 10.2453 17.2005 10.2634C17.1787 10.2815 17.1715 10.3248 17.1606 10.3465C17.157 10.3574 17.1533 10.3754 17.1425 10.3827C17.1243 10.3935 17.1316 10.361 17.1098 10.3718C17.0953 10.3827 17.0881 10.4007 17.0844 10.4152C17.0772 10.4513 17.0482 10.4875 17.0591 10.52C17.0699 10.5525 17.0808 10.5417 17.1062 10.5561C17.1062 10.5561 17.1207 10.6826 17.2368 10.6284Z" fill="#759421"/><path d="M16.8453 10.9827C16.8453 10.9827 16.9287 10.7694 17.0629 10.596C17.1282 10.5056 17.2043 10.4261 17.2696 10.3719C17.3349 10.3177 17.382 10.2888 17.382 10.2888C17.3893 10.2997 17.3421 10.3286 17.2805 10.3828C17.2188 10.437 17.1463 10.5201 17.0846 10.6104C16.9577 10.7911 16.8852 10.9971 16.8852 10.9971C16.8816 11.008 16.8671 11.0152 16.8562 11.0116C16.8453 11.008 16.838 10.9935 16.8417 10.9827H16.8453Z" fill="#62811D"/><path d="M16.914 13.1147C16.914 13.1147 16.8559 12.9846 16.7399 12.8076C16.6275 12.6305 16.4534 12.4028 16.2576 12.1968C16.0617 11.9945 15.8405 11.8102 15.6556 11.709C15.4706 11.6042 15.3292 11.5753 15.3292 11.5753C15.3328 11.5536 15.3691 11.5644 15.4307 11.5789C15.4924 11.597 15.5758 11.6295 15.6701 11.6801C15.8623 11.7776 16.0908 11.9583 16.2975 12.1607C16.5005 12.3631 16.6819 12.5871 16.8052 12.7678C16.9285 12.9485 16.9937 13.075 16.9937 13.075C17.0046 13.1003 16.9937 13.1256 16.9756 13.1364C16.9538 13.1473 16.9285 13.1364 16.9176 13.1184L16.914 13.1147Z" fill="#62811D"/><path d="M17.2403 8.58302C17.2729 8.56856 17.3056 8.55049 17.3382 8.53965C17.3527 8.53604 17.3672 8.53242 17.3817 8.5252C17.418 8.51074 17.4216 8.47822 17.4071 8.46738C17.3999 8.46015 17.389 8.46738 17.3854 8.46376C17.3781 8.45654 17.4107 8.44931 17.4216 8.44208C17.4434 8.43124 17.4651 8.41678 17.4688 8.39149C17.4724 8.35535 17.4543 8.35896 17.4905 8.33728C17.5087 8.32644 17.5123 8.30114 17.5232 8.27946C17.534 8.25778 17.5631 8.20357 17.6682 8.1313C17.5449 8.10239 17.4397 8.1855 17.4144 8.19273C17.3926 8.19996 17.3708 8.2108 17.3491 8.20357C17.3346 8.19996 17.3201 8.19634 17.3056 8.21441C17.2983 8.22525 17.2947 8.2361 17.2838 8.24694C17.2621 8.26139 17.233 8.24694 17.2113 8.26139C17.1895 8.27585 17.1823 8.3156 17.175 8.33367C17.175 8.34089 17.1678 8.35896 17.1569 8.36619C17.1424 8.37703 17.146 8.34451 17.1279 8.35535C17.1134 8.36258 17.1098 8.38065 17.1061 8.3951C17.0989 8.42763 17.0735 8.45654 17.0807 8.48545C17.088 8.51436 17.0989 8.50351 17.1243 8.51797C17.1243 8.51797 17.1351 8.63 17.2403 8.58302Z" fill="#759421"/><path d="M16.9141 8.93716C16.9141 8.93716 16.9685 8.7384 17.0882 8.56856C17.1426 8.48544 17.2079 8.40594 17.2623 8.35173C17.3167 8.29753 17.3602 8.26862 17.3602 8.26862C17.3674 8.27946 17.3275 8.30837 17.2768 8.36257C17.226 8.41678 17.168 8.49628 17.1172 8.58301C17.0084 8.75286 16.9685 8.948 16.9685 8.948C16.9685 8.96246 16.9504 8.96968 16.9359 8.96968C16.9214 8.96968 16.9141 8.95161 16.9141 8.93716Z" fill="#62811D"/><path d="M16.8994 12.269C16.8994 12.269 17.0553 11.7775 17.3491 11.3547C17.4941 11.1415 17.6645 10.9536 17.8096 10.8271C17.8821 10.7621 17.9438 10.7151 17.9909 10.6826C18.0344 10.6501 18.0635 10.632 18.0635 10.632C18.0743 10.6464 18.0489 10.6681 18.0054 10.7007C17.9619 10.7332 17.9003 10.7838 17.8314 10.8488C17.6936 10.9789 17.5267 11.1704 17.3926 11.3836C17.1133 11.8065 16.9755 12.2943 16.9755 12.2943C16.9683 12.316 16.9501 12.3268 16.9284 12.3196C16.9066 12.3124 16.8957 12.2943 16.903 12.2726V12.269H16.8994Z" fill="#62811D"/><path d="M18.3972 13.1328C18.4553 13.1653 18.5205 13.1906 18.5749 13.2267C18.5967 13.2412 18.6184 13.2593 18.6438 13.2737C18.7091 13.3063 18.7599 13.2773 18.7599 13.2484C18.7599 13.2304 18.7417 13.2195 18.7417 13.2123C18.7417 13.1942 18.7925 13.2304 18.8179 13.2412C18.8542 13.2593 18.9086 13.2773 18.9484 13.2557C19.0065 13.2267 18.9811 13.2015 19.0536 13.2267C19.0935 13.2412 19.137 13.2195 19.1769 13.2123C19.2204 13.2051 19.3365 13.187 19.5649 13.2557C19.4707 13.0461 19.2241 12.9846 19.1878 12.9593C19.1552 12.9376 19.1116 12.9124 19.1008 12.8798C19.0899 12.8509 19.079 12.8292 19.0391 12.8292C19.0137 12.8292 18.9883 12.8365 18.9666 12.8292C18.9194 12.8148 18.9122 12.757 18.865 12.7425C18.8215 12.728 18.7562 12.7606 18.7127 12.7714C18.6946 12.775 18.6656 12.7859 18.6475 12.7823C18.6148 12.7714 18.6656 12.7461 18.6293 12.7317C18.6003 12.7208 18.5677 12.7317 18.5459 12.7425C18.4915 12.7642 18.4154 12.7642 18.3791 12.8076C18.3428 12.8509 18.3718 12.8545 18.3791 12.9015C18.3791 12.9015 18.2232 13.0388 18.4081 13.1364L18.3972 13.1328Z" fill="#759421"/><path d="M19.4309 13.1581C19.4309 13.1581 19.1081 12.9954 18.7564 12.9304C18.5823 12.8979 18.401 12.8942 18.2741 12.9159C18.1435 12.9412 18.0674 12.981 18.0674 12.981C18.0565 12.9882 18.042 12.981 18.0347 12.9701C18.0275 12.9593 18.0347 12.9448 18.0456 12.9376C18.0456 12.9376 18.1326 12.8979 18.2668 12.8762C18.401 12.8545 18.5859 12.8617 18.7636 12.9015C19.119 12.9737 19.4381 13.1472 19.4381 13.1472C19.4381 13.1581 19.4381 13.1581 19.4309 13.1581Z" fill="#62811D"/><path d="M17.509 11.7667C17.567 11.7776 17.6286 11.7812 17.683 11.7993C17.7048 11.8065 17.7265 11.8173 17.7519 11.8209C17.8136 11.8318 17.8498 11.792 17.8426 11.7667C17.839 11.7523 17.8208 11.7451 17.8172 11.7414C17.8136 11.7234 17.8643 11.7414 17.8897 11.7451C17.926 11.7487 17.9731 11.7523 18.0022 11.7234C18.042 11.68 18.0166 11.6692 18.0819 11.6728C18.1182 11.6728 18.1508 11.6439 18.1798 11.6258C18.2125 11.6077 18.3068 11.5607 18.5171 11.5571C18.3793 11.4054 18.1581 11.4234 18.1182 11.409C18.0856 11.3981 18.042 11.3909 18.0203 11.3656C18.0021 11.3439 17.9876 11.3259 17.955 11.3403C17.9332 11.3475 17.9151 11.3584 17.8934 11.3584C17.8498 11.3584 17.8245 11.3114 17.7846 11.3114C17.7447 11.3114 17.6975 11.3548 17.6649 11.3764C17.6504 11.3837 17.6286 11.4017 17.6141 11.4017C17.5851 11.4017 17.6214 11.3656 17.5851 11.362C17.5597 11.362 17.5343 11.3801 17.5162 11.3945C17.4763 11.4307 17.4147 11.4487 17.3929 11.4957C17.3748 11.5427 17.4002 11.5391 17.4183 11.5752C17.4183 11.5752 17.324 11.7342 17.5053 11.7667H17.509Z" fill="#759421"/><path d="M18.3828 11.5102C18.3828 11.5102 18.0673 11.4597 17.7554 11.503C17.5995 11.5211 17.4472 11.5681 17.3457 11.6223C17.2441 11.6765 17.1897 11.7307 17.1897 11.7307C17.1825 11.7379 17.168 11.7379 17.1607 11.7307C17.1535 11.7235 17.1535 11.709 17.1607 11.7018C17.1607 11.7018 17.2224 11.644 17.3312 11.5898C17.4399 11.5355 17.5959 11.4922 17.7554 11.4777C18.0746 11.4416 18.3901 11.503 18.3901 11.503C18.3937 11.5102 18.3901 11.5139 18.3901 11.5139L18.3828 11.5102Z" fill="#62811D"/><path d="M17.458 10.1406C17.516 10.1515 17.5777 10.1551 17.6321 10.1731C17.6538 10.1804 17.6756 10.1912 17.701 10.1948C17.7626 10.2057 17.7989 10.1659 17.7916 10.1406C17.788 10.1262 17.7699 10.1189 17.7662 10.1153C17.7626 10.0973 17.8134 10.1153 17.8388 10.1189C17.875 10.1226 17.9222 10.1262 17.9512 10.0973C17.9911 10.0539 17.9657 10.0431 18.031 10.0467C18.0672 10.0467 18.0999 10.0178 18.1289 9.99969C18.1615 9.98162 18.2558 9.93464 18.4661 9.93103C18.3283 9.77925 18.1071 9.79732 18.0672 9.78286C18.0346 9.77202 17.9911 9.76479 17.9693 9.7395C17.9512 9.71781 17.9367 9.70336 17.904 9.7142C17.8823 9.72143 17.8641 9.73227 17.8424 9.73588C17.7989 9.73588 17.7735 9.6889 17.7336 9.6889C17.6937 9.6889 17.6466 9.73227 17.6139 9.75395C17.5994 9.76118 17.5777 9.77925 17.5632 9.77925C17.5341 9.77925 17.5704 9.74311 17.5341 9.7395C17.5088 9.7395 17.4834 9.75757 17.4652 9.77202C17.4254 9.80816 17.3637 9.82623 17.3419 9.87321C17.3238 9.92018 17.3492 9.91657 17.3673 9.95271C17.3673 9.95271 17.273 10.1117 17.4544 10.1442L17.458 10.1406Z" fill="#759421"/><path d="M18.3318 9.88406C18.3318 9.88406 18.0164 9.83347 17.7045 9.87683C17.5485 9.8949 17.3962 9.94188 17.2947 9.99609C17.1932 10.0503 17.1388 10.1045 17.1388 10.1045C17.1315 10.1117 17.117 10.1117 17.1097 10.1045C17.1025 10.0973 17.1025 10.0828 17.1097 10.0756C17.1097 10.0756 17.1714 10.0178 17.2802 9.96356C17.389 9.90936 17.5449 9.86599 17.7045 9.85154C18.0236 9.8154 18.3391 9.87683 18.3391 9.87683C18.3427 9.88406 18.3391 9.88767 18.3391 9.88767L18.3318 9.88406Z" fill="#62811D"/><path d="M16.0257 12.3449C15.9677 12.3594 15.9024 12.3666 15.8444 12.3846C15.819 12.3919 15.7972 12.4027 15.7719 12.4099C15.7066 12.4244 15.6667 12.3846 15.6739 12.3557C15.6776 12.3413 15.6993 12.3341 15.6993 12.3268C15.703 12.3088 15.6486 12.3304 15.6268 12.3341C15.5869 12.3413 15.5398 12.3449 15.5071 12.316C15.4636 12.2726 15.489 12.2618 15.4201 12.2654C15.3802 12.2654 15.3476 12.2365 15.3149 12.222C15.2787 12.204 15.1808 12.1606 14.9595 12.1642C15.0974 12.0016 15.3294 12.0088 15.3693 11.9944C15.4056 11.9835 15.4491 11.9727 15.4672 11.9438C15.4854 11.9221 15.4999 11.904 15.5361 11.9149C15.5579 11.9221 15.5797 11.9329 15.6014 11.9329C15.6449 11.9329 15.6703 11.8823 15.7138 11.8787C15.7574 11.8787 15.8081 11.9221 15.8408 11.9438C15.8553 11.951 15.877 11.9691 15.8952 11.9691C15.9242 11.9691 15.8879 11.9293 15.9242 11.9293C15.9496 11.9293 15.9786 11.9438 15.9967 11.9582C16.0402 11.9944 16.1055 12.0124 16.1272 12.0594C16.149 12.1064 16.12 12.1028 16.1055 12.1425C16.1055 12.1425 16.2107 12.3051 16.0221 12.3449H16.0257Z" fill="#759421"/><path d="M15.0975 12.1028C15.0975 12.1028 15.4239 12.0306 15.7611 12.0522C15.9279 12.0631 16.0947 12.0992 16.2108 12.1534C16.3268 12.2076 16.3921 12.2655 16.3921 12.2655C16.403 12.2727 16.403 12.2871 16.3957 12.298C16.3885 12.3088 16.374 12.3088 16.3631 12.3016C16.3631 12.3016 16.3014 12.2474 16.1926 12.1932C16.0839 12.139 15.9243 12.0992 15.7575 12.0848C15.4275 12.0522 15.1011 12.1173 15.1011 12.1173C15.0939 12.1101 15.0975 12.1065 15.1011 12.1065L15.0975 12.1028Z" fill="#62811D"/><path d="M16.0762 11.6765C16.0834 11.6259 16.0835 11.5753 16.0943 11.5283C16.098 11.5066 16.1052 11.4886 16.1088 11.4669C16.1161 11.4127 16.0798 11.3838 16.0581 11.391C16.0472 11.3946 16.0436 11.4127 16.0363 11.4127C16.0218 11.4163 16.0363 11.3729 16.0363 11.3512C16.0363 11.3187 16.0363 11.279 16.0109 11.2573C15.9747 11.2248 15.9638 11.2464 15.9638 11.1922C15.9638 11.1597 15.9348 11.1344 15.9203 11.1091C15.9021 11.0802 15.8586 11.0043 15.8441 10.8272C15.7208 10.9501 15.7462 11.138 15.7389 11.1705C15.7317 11.1995 15.7281 11.2356 15.7063 11.2537C15.6882 11.2681 15.6737 11.2826 15.6882 11.3115C15.6954 11.3296 15.7063 11.344 15.7063 11.3621C15.7063 11.3982 15.67 11.4199 15.6737 11.4596C15.6737 11.4958 15.7172 11.5319 15.7353 11.5572C15.7426 11.5681 15.7571 11.5861 15.7607 11.6006C15.7607 11.6259 15.7281 11.6006 15.7281 11.6259C15.7281 11.6476 15.7462 11.6692 15.7571 11.6801C15.7897 11.7126 15.8079 11.7668 15.8477 11.7777C15.8876 11.7921 15.884 11.7704 15.9166 11.7524C15.9166 11.7524 16.0544 11.8246 16.0762 11.6692V11.6765Z" fill="#759421"/><path d="M15.8151 10.9465C15.8151 10.9465 15.7862 11.2175 15.8404 11.4813C15.8621 11.6114 15.909 11.7379 15.9633 11.8246C16.0138 11.9078 16.0644 11.9511 16.0644 11.9511C16.0717 11.9584 16.0717 11.9692 16.0644 11.9764C16.0572 11.9836 16.0464 11.9836 16.0392 11.9764C16.0392 11.9764 15.9886 11.9258 15.9344 11.8391C15.8838 11.7488 15.8368 11.6187 15.8187 11.485C15.7753 11.2175 15.8079 10.9465 15.8079 10.9465C15.8151 10.9465 15.8187 10.9465 15.8151 10.9465Z" fill="#62811D"/><path d="M17.7988 13.8519C17.8569 13.8844 17.9221 13.9097 17.9765 13.9459C17.9983 13.9603 18.02 13.9784 18.0454 13.9928C18.1107 14.0254 18.1615 13.9965 18.1615 13.9675C18.1615 13.9495 18.1433 13.9386 18.1433 13.9314C18.1433 13.9133 18.1941 13.9495 18.2195 13.9603C18.2558 13.9784 18.3102 13.9965 18.3501 13.9748C18.4081 13.9459 18.3827 13.9206 18.4552 13.9459C18.4951 13.9603 18.5386 13.9386 18.5785 13.9314C18.622 13.9242 18.7381 13.9061 18.9665 13.9748C18.8722 13.7652 18.6257 13.7037 18.5894 13.6784C18.5568 13.6568 18.5132 13.6315 18.5024 13.5989C18.4915 13.57 18.4806 13.5484 18.4407 13.5484C18.4153 13.5484 18.3899 13.5556 18.3682 13.5484C18.321 13.5339 18.3138 13.4761 18.2666 13.4616C18.2231 13.4472 18.1579 13.4797 18.1143 13.4905C18.0962 13.4941 18.0672 13.505 18.0491 13.5014C18.0164 13.4905 18.0672 13.4652 18.0309 13.4508C18.0019 13.4399 17.9693 13.4508 17.9475 13.4616C17.8931 13.4833 17.817 13.4833 17.7807 13.5267C17.7444 13.57 17.7735 13.5736 17.7807 13.6206C17.7807 13.6206 17.6248 13.7579 17.8097 13.8555L17.7988 13.8519Z" fill="#759421"/><path d="M18.8286 13.8772C18.8286 13.8772 18.5058 13.7145 18.1541 13.6495C17.98 13.617 17.7987 13.6134 17.6718 13.635C17.5412 13.6603 17.4651 13.7001 17.4651 13.7001C17.4542 13.7073 17.4397 13.7001 17.4324 13.6893C17.4252 13.6784 17.4324 13.664 17.4433 13.6567C17.4433 13.6567 17.5303 13.617 17.6645 13.5953C17.7987 13.5736 17.9836 13.5808 18.1613 13.6206C18.5167 13.6929 18.8359 13.8663 18.8359 13.8663C18.8359 13.8772 18.8359 13.8772 18.8286 13.8772Z" fill="#62811D"/><path d="M17.2476 13.252C17.2983 13.2195 17.3455 13.1761 17.3962 13.1472C17.418 13.1363 17.4398 13.1255 17.4615 13.111C17.5159 13.0749 17.5123 13.0171 17.4869 13.0062C17.4724 12.999 17.4543 13.0062 17.4506 13.0062C17.4361 12.999 17.4869 12.9737 17.505 12.9593C17.534 12.9376 17.5703 12.9014 17.5703 12.8617C17.5703 12.8003 17.5413 12.8111 17.5921 12.7677C17.6211 12.7424 17.6211 12.6955 17.632 12.6629C17.6428 12.6268 17.6791 12.5256 17.8278 12.3666C17.6175 12.3558 17.4651 12.5292 17.4289 12.5509C17.3962 12.569 17.36 12.5943 17.3273 12.5907C17.2983 12.587 17.2766 12.587 17.2584 12.6196C17.2476 12.6413 17.2439 12.6629 17.2294 12.6774C17.1968 12.7099 17.146 12.6918 17.1134 12.7244C17.0844 12.7533 17.0807 12.8219 17.0735 12.8581C17.0735 12.8725 17.0662 12.9014 17.0554 12.9159C17.0336 12.9376 17.0336 12.8834 17.0082 12.9087C16.9901 12.9267 16.9828 12.9593 16.9828 12.9809C16.9792 13.0352 16.9466 13.0966 16.9683 13.1436C16.9901 13.1905 17.0046 13.1689 17.0445 13.1833C17.0445 13.1833 17.0916 13.3676 17.2476 13.2592V13.252Z" fill="#759421"/><path d="M17.701 12.4281C17.701 12.4281 17.4326 12.6197 17.2368 12.8798C17.1353 13.0063 17.0591 13.1509 17.0265 13.2665C16.9938 13.3822 16.9938 13.4617 16.9938 13.4617C16.9938 13.4725 16.9829 13.4833 16.9721 13.4833C16.9612 13.4833 16.9503 13.4725 16.9503 13.4617C16.9503 13.4617 16.9503 13.3749 16.9902 13.2557C17.0301 13.1364 17.1135 12.9919 17.2187 12.8654C17.4254 12.6088 17.6973 12.4209 17.6973 12.4209C17.7082 12.4245 17.7046 12.4281 17.7046 12.4281H17.701Z" fill="#62811D"/><path d="M16.6492 14.0832C16.602 14.047 16.5513 14.0073 16.5005 13.9784C16.4787 13.9675 16.457 13.9567 16.4352 13.9422C16.3808 13.9025 16.3844 13.8483 16.4098 13.8374C16.4243 13.8302 16.4425 13.8374 16.4461 13.8374C16.4606 13.8302 16.4098 13.8013 16.3917 13.7868C16.3627 13.7615 16.3264 13.729 16.3264 13.6893C16.3264 13.6278 16.3554 13.6387 16.3083 13.5917C16.2793 13.5664 16.2793 13.5194 16.272 13.4869C16.2611 13.4471 16.2285 13.3496 16.0798 13.1906C16.2901 13.1833 16.4388 13.3568 16.4751 13.3785C16.5077 13.3965 16.544 13.4218 16.5766 13.4182C16.6056 13.4182 16.6274 13.4146 16.6419 13.4471C16.6528 13.4688 16.6564 13.4905 16.6709 13.505C16.6999 13.5375 16.7543 13.5194 16.7833 13.5519C16.8124 13.5845 16.8124 13.6495 16.8196 13.6856C16.8196 13.7001 16.8269 13.729 16.8377 13.7435C16.8595 13.7651 16.8595 13.7109 16.8849 13.7362C16.903 13.7543 16.9103 13.7868 16.9103 13.8085C16.9103 13.8627 16.9429 13.9241 16.9248 13.9711C16.903 14.0181 16.8885 13.9964 16.8486 14.0109C16.8486 14.0109 16.8015 14.1952 16.6455 14.0832H16.6492Z" fill="#759421"/><path d="M16.2143 13.2448C16.2143 13.2448 16.4826 13.4364 16.6893 13.6929C16.7909 13.8194 16.8743 13.9676 16.9105 14.0868C16.9468 14.2061 16.9504 14.2928 16.9504 14.2928C16.9504 14.3037 16.9432 14.3145 16.9287 14.3145C16.9178 14.3145 16.9069 14.3073 16.9069 14.2928C16.9069 14.2928 16.9069 14.2133 16.8743 14.0977C16.8416 13.982 16.7655 13.8375 16.6676 13.711C16.4717 13.4508 16.2106 13.2521 16.2106 13.2521C16.2106 13.2412 16.2143 13.2412 16.2179 13.2448H16.2143Z" fill="#62811D"/><path d="M17.904 12.7713C17.8895 12.7279 17.8786 12.6774 17.8604 12.6376C17.8532 12.6195 17.8423 12.6051 17.8351 12.5834C17.8206 12.5328 17.8459 12.5003 17.8677 12.5039C17.8786 12.5039 17.8858 12.522 17.8931 12.522C17.9076 12.522 17.8858 12.4822 17.8822 12.4678C17.875 12.4388 17.8677 12.4027 17.8858 12.3774C17.9148 12.3413 17.9257 12.3593 17.9185 12.3088C17.9148 12.2798 17.933 12.2509 17.9439 12.2256C17.9547 12.1967 17.9801 12.1172 17.962 11.951C18.0998 12.0449 18.1107 12.222 18.1252 12.2509C18.1361 12.2762 18.1469 12.3088 18.1723 12.3232C18.1904 12.334 18.205 12.3449 18.2013 12.3738C18.2013 12.3919 18.1905 12.4063 18.1941 12.4244C18.1977 12.4605 18.2376 12.4714 18.2448 12.5075C18.2485 12.54 18.2195 12.5834 18.205 12.6087C18.2013 12.6195 18.1905 12.6412 18.1905 12.6521C18.1905 12.6737 18.2195 12.6412 18.2231 12.6701C18.2267 12.6918 18.2158 12.7135 18.205 12.7279C18.1832 12.7641 18.1723 12.8147 18.1397 12.8364C18.1034 12.858 18.1034 12.8364 18.0744 12.8255C18.0744 12.8255 17.9584 12.9195 17.9112 12.7785L17.904 12.7713Z" fill="#759421"/><path d="M18.0196 12.0414C18.0196 12.0414 18.1027 12.2835 18.11 12.5437C18.1172 12.6702 18.0991 12.8003 18.0666 12.8942C18.0341 12.9882 17.9943 13.0424 17.9943 13.0424C17.9907 13.0496 17.9799 13.0532 17.9726 13.046C17.9654 13.0424 17.9618 13.0315 17.969 13.0243C17.969 13.0243 18.0088 12.9737 18.0413 12.887C18.0738 12.8003 18.0919 12.6738 18.0919 12.5473C18.0919 12.2943 18.016 12.0486 18.016 12.0486C18.0196 12.0414 18.0232 12.045 18.0232 12.0486L18.0196 12.0414Z" fill="#62811D"/><path d="M15.1914 13.5158C15.1261 13.5122 15.0572 13.5013 14.9919 13.5049C14.9629 13.5049 14.9375 13.5122 14.9085 13.5085C14.836 13.5049 14.807 13.4507 14.8215 13.4254C14.8287 13.411 14.8541 13.411 14.8578 13.4038C14.8686 13.3857 14.8034 13.3929 14.778 13.3893C14.7381 13.3857 14.6837 13.3748 14.6619 13.3351C14.6293 13.2773 14.6619 13.2737 14.5858 13.2592C14.5423 13.252 14.5169 13.2086 14.4879 13.1833C14.4552 13.1544 14.3646 13.0821 14.1361 13.0207C14.3283 12.8906 14.5676 12.9665 14.6112 12.9629C14.6511 12.9629 14.7018 12.9629 14.7272 12.9412C14.7526 12.9231 14.7707 12.9087 14.807 12.9303C14.8287 12.9448 14.8469 12.9629 14.8686 12.9701C14.9158 12.9809 14.9557 12.9376 15.0028 12.9484C15.0463 12.9593 15.0862 13.0207 15.1189 13.0532C15.1297 13.0677 15.1515 13.0894 15.1696 13.0966C15.2023 13.1038 15.1696 13.0532 15.2095 13.0641C15.2385 13.0713 15.2603 13.0966 15.2748 13.1183C15.3111 13.1652 15.3727 13.205 15.3836 13.2592C15.3908 13.317 15.3655 13.3026 15.3364 13.3423C15.3364 13.3423 15.3981 13.5411 15.1914 13.5266V13.5158Z" fill="#759421"/><path d="M16.9467 15.0192C16.9467 15.0192 16.8596 14.8566 16.7073 14.6325C16.555 14.4085 16.3302 14.1194 16.0618 13.8737C15.7971 13.6243 15.4852 13.4255 15.235 13.3171C14.9848 13.2051 14.8071 13.1617 14.8071 13.1617C14.7998 13.1617 14.7962 13.1545 14.7998 13.1473C14.7998 13.1401 14.8071 13.1364 14.8143 13.1401C14.8143 13.1401 14.9957 13.1798 15.2495 13.2882C15.507 13.393 15.8261 13.5882 16.1017 13.8339C16.3809 14.076 16.6167 14.3651 16.7762 14.5892C16.9358 14.8168 17.0301 14.9722 17.0301 14.9722C17.0446 14.9975 17.0373 15.0264 17.0156 15.0409C16.9938 15.0553 16.9648 15.0445 16.9503 15.0228L16.9467 15.0192Z" fill="#62811D"/><path d="M15.4165 13.7869C15.3621 13.8266 15.304 13.8592 15.2533 13.9025C15.2315 13.9206 15.2134 13.9423 15.1916 13.9567C15.1336 14.0001 15.0756 13.9784 15.0719 13.9459C15.0719 13.9278 15.0864 13.9134 15.0864 13.9062C15.0864 13.8881 15.0393 13.9314 15.0175 13.9459C14.9813 13.9676 14.9341 13.9929 14.8906 13.9784C14.829 13.9567 14.8507 13.9314 14.7855 13.964C14.7492 13.982 14.702 13.964 14.6622 13.964C14.6186 13.964 14.5026 13.9604 14.285 14.0579C14.3539 13.8375 14.586 13.7471 14.6186 13.7146C14.6477 13.6893 14.6875 13.6604 14.6948 13.6243C14.702 13.5954 14.7093 13.5701 14.7492 13.5665C14.7746 13.5665 14.8 13.5665 14.8217 13.5556C14.8652 13.5339 14.8689 13.4761 14.9124 13.4544C14.9559 13.4364 15.0248 13.4544 15.0683 13.4617C15.0864 13.4617 15.1155 13.4689 15.1336 13.4617C15.1626 13.4472 15.1082 13.4291 15.1445 13.4075C15.1699 13.393 15.2061 13.4002 15.2279 13.4075C15.2859 13.4219 15.3584 13.4111 15.4019 13.4508C15.4455 13.4906 15.4128 13.4978 15.4165 13.5448C15.4165 13.5448 15.5905 13.6604 15.4165 13.7797V13.7869Z" fill="#759421"/><path d="M14.3899 13.9388C14.3899 13.9388 14.6837 13.7255 15.0246 13.6099C15.195 13.5485 15.3763 13.5159 15.5141 13.5196C15.6519 13.5232 15.7426 13.5521 15.7426 13.5521C15.7571 13.5521 15.7643 13.5702 15.7607 13.581C15.7571 13.5918 15.7426 13.6027 15.7317 13.5991C15.7317 13.5991 15.6483 13.5702 15.5141 13.5629C15.3836 13.5557 15.2059 13.581 15.0354 13.6388C14.6946 13.7472 14.3972 13.9496 14.3972 13.9496C14.3863 13.946 14.3863 13.9424 14.3899 13.9388Z" fill="#62811D"/><path d="M16.1052 14.4228C16.0508 14.4625 15.9928 14.4951 15.942 14.5384C15.9202 14.5565 15.9021 14.5782 15.8803 14.5926C15.8223 14.636 15.7643 14.6143 15.7607 14.5818C15.7607 14.5637 15.7752 14.5493 15.7752 14.542C15.7752 14.524 15.728 14.5673 15.7063 14.5818C15.67 14.6035 15.6229 14.6288 15.5793 14.6143C15.5177 14.5926 15.5395 14.5673 15.4742 14.5999C15.4379 14.6179 15.3908 14.5999 15.3509 14.5999C15.3074 14.5999 15.1913 14.5999 14.9737 14.6938C15.0426 14.4734 15.2747 14.383 15.3074 14.3505C15.3364 14.3252 15.3763 14.2963 15.3835 14.2602C15.3908 14.2313 15.398 14.206 15.4379 14.2024C15.4633 14.2024 15.4887 14.2024 15.5104 14.1915C15.554 14.1698 15.5576 14.112 15.6011 14.0903C15.6446 14.0723 15.7135 14.0903 15.757 14.0976C15.7752 14.0976 15.8042 14.1048 15.8223 14.0976C15.8513 14.0831 15.7969 14.065 15.8332 14.0433C15.8586 14.0289 15.8948 14.0361 15.9166 14.0433C15.9746 14.0578 16.0471 14.047 16.0907 14.0867C16.1342 14.1265 16.1015 14.1337 16.1052 14.1807C16.1052 14.1807 16.2792 14.2963 16.1052 14.4156V14.4228Z" fill="#759421"/><path d="M15.079 14.5746C15.079 14.5746 15.3727 14.3614 15.7136 14.2458C15.8841 14.1844 16.0654 14.1518 16.2032 14.1555C16.341 14.1591 16.4317 14.188 16.4317 14.188C16.4462 14.188 16.4534 14.206 16.4498 14.2169C16.4498 14.2313 16.4317 14.2386 16.4208 14.235C16.4208 14.235 16.3374 14.206 16.2032 14.1988C16.0726 14.1916 15.8949 14.2169 15.7245 14.2747C15.3836 14.3831 15.0863 14.5855 15.0863 14.5855C15.0754 14.5819 15.0754 14.5783 15.079 14.5746Z" fill="#62811D"/><path d="M15.9856 13.4147C15.9965 13.3605 16.0001 13.3063 16.0146 13.2521C16.0219 13.2304 16.0291 13.2087 16.0328 13.187C16.0436 13.1292 16.0074 13.0931 15.982 13.1003C15.9675 13.1039 15.9639 13.122 15.9566 13.122C15.9421 13.1256 15.9566 13.0786 15.9602 13.0569C15.9639 13.0244 15.9675 12.9774 15.9421 12.9521C15.9022 12.9124 15.8913 12.9377 15.895 12.8762C15.895 12.8401 15.8696 12.8112 15.8551 12.7823C15.8369 12.7498 15.797 12.663 15.7934 12.4679C15.652 12.5944 15.6629 12.8004 15.652 12.8365C15.6411 12.869 15.6339 12.9088 15.6085 12.9268C15.5867 12.9413 15.5722 12.9558 15.5831 12.9883C15.5903 13.0063 15.6012 13.0244 15.6012 13.0461C15.6012 13.0858 15.5577 13.1075 15.5577 13.1473C15.5577 13.187 15.5976 13.2304 15.6194 13.2593C15.6266 13.2701 15.6411 13.2918 15.6411 13.3099C15.6411 13.3352 15.6085 13.3027 15.6049 13.3352C15.6049 13.3605 15.6194 13.3822 15.6339 13.3966C15.6665 13.4328 15.6846 13.4942 15.7245 13.5123C15.768 13.5303 15.7644 13.505 15.8007 13.4906C15.8007 13.4906 15.9457 13.5809 15.9784 13.4111L15.9856 13.4147Z" fill="#759421"/><path d="M15.7535 12.598C15.7535 12.598 15.7029 12.8907 15.739 13.1798C15.7535 13.3244 15.7968 13.4653 15.8474 13.5629C15.898 13.6568 15.9486 13.711 15.9486 13.711C15.9558 13.7183 15.9558 13.7327 15.9486 13.7399C15.9414 13.7472 15.9269 13.7472 15.9197 13.7399C15.9197 13.7399 15.8655 13.6821 15.8149 13.5809C15.7643 13.4797 15.7282 13.3352 15.7137 13.187C15.6848 12.8907 15.7426 12.6016 15.7426 12.6016C15.7499 12.6016 15.7535 12.6016 15.7535 12.6016V12.598Z" fill="#62811D"/><path d="M17.11 11.3548C17.0882 11.3114 17.0701 11.2608 17.0447 11.221C17.0338 11.203 17.023 11.1885 17.0121 11.1705C16.9903 11.1235 17.0121 11.0837 17.0375 11.0837C17.052 11.0837 17.0592 11.0982 17.0628 11.0982C17.0774 11.0982 17.052 11.0584 17.0447 11.0404C17.0338 11.0115 17.0193 10.9717 17.0375 10.9428C17.0629 10.8994 17.0774 10.9211 17.0628 10.8669C17.052 10.838 17.0701 10.8055 17.0774 10.7766C17.0846 10.744 17.0991 10.6609 17.0592 10.4875C17.2115 10.567 17.2514 10.7476 17.2696 10.7766C17.2841 10.8019 17.3022 10.8344 17.3276 10.8452C17.3493 10.8524 17.3638 10.8633 17.3638 10.8922C17.3638 10.9103 17.3566 10.9283 17.3638 10.9464C17.3711 10.9825 17.4182 10.9898 17.4255 11.0259C17.4327 11.0584 17.4074 11.109 17.4001 11.1379C17.3965 11.1524 17.3856 11.1705 17.3892 11.1849C17.3965 11.2102 17.4182 11.1705 17.4255 11.1994C17.4327 11.221 17.4255 11.2463 17.4146 11.2608C17.3965 11.3006 17.3929 11.3548 17.3602 11.3837C17.3276 11.409 17.324 11.3837 17.2877 11.3837C17.2877 11.3837 17.1789 11.4957 17.1136 11.3548H17.11Z" fill="#759421"/><path d="M17.1315 10.5851C17.1315 10.5851 17.2508 10.8272 17.2905 11.0946C17.3122 11.2284 17.3122 11.3621 17.2905 11.4632C17.2689 11.5644 17.2363 11.6259 17.2363 11.6259C17.2327 11.6331 17.2219 11.6403 17.211 11.6331C17.2038 11.6295 17.1966 11.6186 17.2038 11.6078C17.2038 11.6078 17.2363 11.55 17.258 11.456C17.2797 11.3621 17.2833 11.2284 17.2652 11.0983C17.2291 10.8345 17.1207 10.5887 17.1207 10.5887C17.1243 10.5815 17.1279 10.5815 17.1279 10.5851H17.1315Z" fill="#62811D"/><path d="M17.284 9.51546C17.2623 9.4721 17.2441 9.42151 17.2188 9.38175C17.2079 9.36369 17.197 9.34923 17.1861 9.33116C17.1644 9.28418 17.1861 9.24443 17.2115 9.24443C17.226 9.24443 17.2333 9.25889 17.2369 9.25889C17.2514 9.25889 17.226 9.21914 17.2188 9.20107C17.2079 9.17216 17.1934 9.13241 17.2115 9.1035C17.2369 9.06013 17.2514 9.08181 17.2369 9.02761C17.226 8.9987 17.2441 8.96617 17.2514 8.93726C17.2587 8.90474 17.2731 8.82162 17.2333 8.64816C17.3856 8.72767 17.4255 8.90835 17.4436 8.93726C17.4581 8.96256 17.4762 8.99508 17.5016 9.00592C17.5234 9.01315 17.5379 9.02399 17.5379 9.0529C17.5379 9.07097 17.5306 9.08904 17.5379 9.10711C17.5451 9.14325 17.5923 9.15047 17.5995 9.18661C17.6068 9.21914 17.5814 9.26973 17.5741 9.29864C17.5705 9.31309 17.5596 9.33116 17.5633 9.34562C17.5705 9.37091 17.5923 9.33116 17.5995 9.36007C17.6068 9.38175 17.5995 9.40705 17.5887 9.42151C17.5705 9.46126 17.5669 9.51546 17.5343 9.54437C17.5016 9.56967 17.498 9.54437 17.4617 9.54437C17.4617 9.54437 17.3529 9.6564 17.2877 9.51546H17.284Z" fill="#759421"/><path d="M17.3056 8.74575C17.3056 8.74575 17.4248 8.98787 17.4646 9.25529C17.4863 9.389 17.4863 9.52271 17.4646 9.62389C17.4429 9.72508 17.4104 9.78651 17.4104 9.78651C17.4068 9.79374 17.3959 9.80097 17.3851 9.79374C17.3779 9.79013 17.3706 9.77928 17.3779 9.76844C17.3779 9.76844 17.4104 9.71062 17.4321 9.61667C17.4537 9.52271 17.4574 9.389 17.4393 9.2589C17.4031 8.9951 17.2947 8.74937 17.2947 8.74937C17.2984 8.74214 17.302 8.74214 17.302 8.74575H17.3056Z" fill="#62811D"/><path d="M16.3483 9.61662C16.3156 9.59494 16.283 9.56964 16.2504 9.54796C16.2359 9.54073 16.2214 9.53351 16.2069 9.52628C16.1706 9.50098 16.1706 9.46484 16.1887 9.45762C16.1996 9.454 16.2105 9.45762 16.2141 9.45762C16.225 9.45039 16.1887 9.43593 16.1778 9.42509C16.1597 9.41064 16.1343 9.38895 16.1343 9.36004C16.1343 9.32029 16.1525 9.32752 16.1198 9.29861C16.1017 9.28054 16.1017 9.25163 16.0944 9.22995C16.0872 9.20465 16.0654 9.13961 15.9639 9.03842C16.1017 9.03119 16.1996 9.14322 16.225 9.15406C16.2467 9.1649 16.2685 9.18297 16.2903 9.17936C16.3084 9.17936 16.3229 9.17936 16.3338 9.19743C16.341 9.21188 16.3447 9.22634 16.3555 9.23718C16.3773 9.25886 16.4099 9.24441 16.4317 9.26609C16.4498 9.28416 16.4535 9.32752 16.4571 9.35282C16.4571 9.36366 16.4607 9.38173 16.4716 9.38895C16.4861 9.40341 16.4861 9.36727 16.5042 9.38534C16.5187 9.39618 16.5187 9.41786 16.5224 9.43232C16.5224 9.46846 16.5477 9.50821 16.5332 9.53712C16.5187 9.56964 16.5079 9.55519 16.4825 9.56242C16.4825 9.56242 16.4534 9.68167 16.3519 9.61301L16.3483 9.61662Z" fill="#759421"/><path d="M16.8451 10.5418C16.8451 10.5418 16.8342 10.4443 16.7979 10.3069C16.7653 10.166 16.6964 9.98531 16.6057 9.81546C16.428 9.47216 16.1669 9.18306 16.1669 9.18306C16.1778 9.17583 16.4462 9.4577 16.6347 9.80101C16.729 9.97086 16.8016 10.1552 16.8414 10.2961C16.8813 10.437 16.8958 10.5346 16.8958 10.5346C16.8958 10.5527 16.8886 10.5635 16.8741 10.5671C16.8596 10.5671 16.8451 10.5599 16.8451 10.5454V10.5418Z" fill="#62811D"/><path d="M16.5262 10.1406C16.4826 10.1334 16.4355 10.1225 16.3884 10.1189C16.3702 10.1189 16.3521 10.1189 16.3303 10.1189C16.2796 10.1117 16.2651 10.0719 16.2759 10.0539C16.2832 10.043 16.2977 10.0466 16.3013 10.0394C16.3086 10.0286 16.265 10.0286 16.2469 10.025C16.2179 10.0177 16.1816 10.0069 16.1671 9.97799C16.149 9.93462 16.1671 9.93462 16.12 9.92017C16.091 9.91294 16.0765 9.88041 16.0583 9.85873C16.0366 9.83705 15.9822 9.77923 15.8263 9.72141C15.9677 9.64552 16.1309 9.71418 16.1599 9.71418C16.1889 9.71418 16.2215 9.72141 16.2433 9.70695C16.2614 9.69611 16.2759 9.68527 16.2977 9.70695C16.3122 9.7178 16.3231 9.73225 16.3376 9.73586C16.3702 9.74671 16.3992 9.7178 16.4319 9.72864C16.4609 9.73948 16.4863 9.78646 16.5044 9.80814C16.5117 9.81898 16.5225 9.83705 16.537 9.84066C16.5588 9.84789 16.5407 9.81175 16.5697 9.81898C16.5878 9.82621 16.6023 9.84428 16.6132 9.85873C16.6349 9.89487 16.6748 9.92739 16.6785 9.96353C16.6785 10.0033 16.6603 9.99244 16.6386 10.0177C16.6386 10.0177 16.6676 10.1587 16.5225 10.137L16.5262 10.1406Z" fill="#759421"/><path d="M15.9421 9.71432C15.9421 9.71432 16.1924 9.75408 16.4208 9.86249C16.5369 9.91308 16.642 9.98897 16.7073 10.0576C16.7726 10.1263 16.8052 10.1841 16.8052 10.1841C16.8089 10.1913 16.8052 10.2022 16.798 10.2058C16.7907 10.2094 16.7798 10.2058 16.7762 10.1986C16.7762 10.1986 16.7508 10.1444 16.6856 10.0757C16.6239 10.007 16.5224 9.93476 16.4099 9.88056C16.1887 9.76853 15.9385 9.72155 15.9385 9.72155C15.9385 9.71432 15.9385 9.71432 15.9385 9.71432H15.9421Z" fill="#62811D"/><path d="M16.8162 9.71786C16.8452 9.68895 16.8706 9.66004 16.8996 9.63474C16.9105 9.6239 16.925 9.61668 16.9359 9.60583C16.9649 9.57692 16.9576 9.54079 16.9395 9.53717C16.9286 9.53717 16.9178 9.54079 16.9141 9.54079C16.9032 9.54079 16.9323 9.51549 16.9431 9.50465C16.9613 9.48658 16.9794 9.46128 16.9721 9.43599C16.9649 9.39624 16.9468 9.40708 16.9721 9.37455C16.9866 9.35287 16.983 9.32758 16.983 9.30228C16.983 9.27698 16.9975 9.20832 17.0737 9.09268C16.9395 9.11075 16.8634 9.23723 16.8416 9.2553C16.8235 9.26976 16.8017 9.29144 16.7799 9.29144C16.7618 9.29144 16.7473 9.29144 16.7401 9.31673C16.7364 9.33119 16.7364 9.34565 16.7292 9.35649C16.7147 9.38178 16.6784 9.37455 16.6603 9.39985C16.6458 9.42153 16.653 9.4649 16.6494 9.49019C16.6494 9.50104 16.6494 9.51911 16.6421 9.52995C16.6313 9.5444 16.624 9.51188 16.6095 9.52995C16.5986 9.5444 16.5986 9.56608 16.6023 9.58054C16.6059 9.61668 16.5914 9.65643 16.6095 9.68534C16.6276 9.71425 16.6349 9.69618 16.6639 9.70341C16.6639 9.70341 16.7147 9.81543 16.8017 9.7287L16.8162 9.71786Z" fill="#759421"/><path d="M17.0046 9.14334C17.0046 9.14334 16.8596 9.29511 16.7616 9.48303C16.7145 9.57699 16.6819 9.67456 16.671 9.75045C16.6637 9.82633 16.671 9.87693 16.671 9.87693C16.671 9.88415 16.6674 9.89138 16.6601 9.895C16.6528 9.895 16.6456 9.89138 16.642 9.88416C16.642 9.88416 16.6347 9.82995 16.642 9.74683C16.6529 9.66733 16.6891 9.56615 16.7399 9.47219C16.8414 9.28427 16.9937 9.13611 16.9937 9.13611C17.001 9.13611 17.001 9.13611 16.9974 9.13972L17.0046 9.14334Z" fill="#62811D"/><path d="M16.2866 11.0078C16.2467 11.0078 16.2032 10.9969 16.1633 10.9969C16.1452 10.9969 16.1307 10.9969 16.1125 10.9969C16.069 10.9933 16.0509 10.9608 16.0618 10.9427C16.069 10.9319 16.0799 10.9319 16.0835 10.9283C16.0908 10.9174 16.0509 10.921 16.0364 10.9174C16.011 10.9174 15.9783 10.9066 15.9638 10.8813C15.9421 10.8452 15.9638 10.8415 15.9203 10.8307C15.8949 10.8235 15.8804 10.7982 15.8623 10.7801C15.8442 10.762 15.7898 10.7151 15.6447 10.6717C15.7644 10.5958 15.9131 10.6464 15.9421 10.6464C15.9675 10.6464 15.9965 10.6464 16.0146 10.6356C16.0291 10.6247 16.0436 10.6139 16.0654 10.6283C16.0763 10.6356 16.0871 10.65 16.1016 10.6536C16.1307 10.6609 16.156 10.6356 16.1851 10.6428C16.2141 10.65 16.2358 10.6898 16.254 10.7078C16.2612 10.7151 16.2721 10.7331 16.283 10.7331C16.3011 10.7404 16.283 10.7078 16.3084 10.7115C16.3265 10.7151 16.341 10.7331 16.3482 10.744C16.37 10.7765 16.4063 10.7982 16.4135 10.8343C16.4172 10.8705 16.399 10.8632 16.3809 10.8849C16.3809 10.8849 16.4171 11.0078 16.2866 10.9969V11.0078Z" fill="#759421"/><path d="M15.7394 10.6681C15.7394 10.6681 15.9642 10.6861 16.1709 10.7692C16.2761 10.809 16.374 10.8668 16.4356 10.921C16.4973 10.9788 16.5299 11.0294 16.5299 11.0294C16.5335 11.0367 16.5299 11.0439 16.5263 11.0511C16.519 11.0547 16.5118 11.0511 16.5045 11.0475C16.5045 11.0475 16.4755 11.0005 16.4175 10.9427C16.3595 10.8885 16.2652 10.8271 16.1636 10.7873C15.9606 10.7006 15.7357 10.6789 15.7357 10.6789C15.7357 10.6717 15.7357 10.6717 15.7357 10.6717L15.7394 10.6681Z" fill="#62811D"/><path d="M16.4138 12.2149C16.3848 12.1716 16.3558 12.121 16.3232 12.0776C16.3087 12.0595 16.2905 12.0451 16.2796 12.027C16.247 11.9764 16.2651 11.933 16.2905 11.9294C16.305 11.9294 16.3159 11.9403 16.3232 11.9403C16.3377 11.9403 16.305 11.9005 16.2941 11.8825C16.276 11.8535 16.2579 11.8138 16.2724 11.7777C16.2941 11.7271 16.3123 11.7451 16.2869 11.6909C16.2724 11.6584 16.2869 11.6223 16.2869 11.5897C16.2869 11.5536 16.2941 11.4596 16.2216 11.279C16.4029 11.3404 16.4718 11.5355 16.4936 11.5608C16.5154 11.5861 16.5371 11.6187 16.5661 11.6259C16.5915 11.6331 16.6096 11.6367 16.6133 11.6729C16.6133 11.6945 16.6133 11.7126 16.6205 11.7307C16.635 11.7668 16.6858 11.7704 16.7003 11.8066C16.7148 11.8427 16.693 11.8969 16.6894 11.9331C16.6894 11.9475 16.6822 11.9728 16.6894 11.9873C16.7003 12.0126 16.7184 11.9692 16.7329 11.9981C16.7438 12.0198 16.7366 12.0487 16.7329 12.0668C16.7184 12.1137 16.7257 12.1752 16.693 12.2077C16.6604 12.2402 16.6532 12.2149 16.6169 12.2149C16.6169 12.2149 16.519 12.3559 16.4211 12.2149H16.4138Z" fill="#759421"/><path d="M16.3117 11.3692C16.3117 11.3692 16.4779 11.6149 16.5646 11.9004C16.6116 12.0414 16.6333 12.1895 16.6261 12.3015C16.6188 12.4136 16.5935 12.4858 16.5935 12.4858C16.5935 12.4967 16.5791 12.5039 16.5682 12.5003C16.5574 12.4967 16.5538 12.4858 16.5538 12.475C16.5538 12.475 16.5791 12.4063 16.5899 12.2979C16.5972 12.1895 16.5827 12.045 16.5393 11.904C16.4598 11.6222 16.3008 11.3728 16.3008 11.3728C16.3044 11.3656 16.3081 11.3656 16.3081 11.3692H16.3117Z" fill="#62811D"/><path d="M15.5503 15.8649C15.4886 15.7891 13.233 13.2125 13.233 13.2125C13.233 13.2125 13.3164 9.14698 12.8196 8.31582C12.4388 7.67618 11.5504 7.5244 11.2095 8.76392C10.5132 11.2791 11.3255 13.8918 11.3654 14.0002C11.5431 14.2604 13.5159 16.4178 14.7561 17.0936C15.1187 17.2924 15.4669 16.837 15.6301 16.4504C15.7135 16.2588 15.7062 16.0673 15.5466 15.8686L15.5503 15.8649Z" fill="#EFEBE5"/><path opacity="0.6" d="M14.8468 16.2443C14.6401 16.5442 14.6074 16.9454 14.7851 17.0718C14.9628 17.1983 15.2783 16.9996 15.485 16.6996C15.6917 16.3997 15.7171 16.0564 15.543 15.9299C15.3654 15.8034 15.0571 15.9444 14.8504 16.2443H14.8468Z" fill="#C4BFB5"/><path d="M16.0142 16.2515C15.9526 16.2407 15.7894 16.2154 15.7531 16.1684C15.6661 16.0672 15.5573 15.9877 15.5211 15.9624C15.2817 15.7962 14.415 16.4358 14.832 17.0393C15.0641 17.332 15.2201 17.4549 15.5174 17.6536C15.6407 17.7367 15.9345 17.8307 16.25 17.8307H16.8229C16.8229 17.8307 16.2753 17.4693 16.2246 17.4043C15.9961 17.1152 15.7386 16.8044 15.8583 16.7502C16.0324 16.649 16.6779 16.808 16.725 16.5695C16.783 16.3021 16.2427 16.2876 16.0142 16.2515Z" fill="#F3BC97"/><defs><radialGradient id="paint0_radial_2155_2110" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.5793 7.54599) scale(3.48859 3.47643)"><stop stop-color="#D7D2CB"/><stop offset="0.25" stop-color="#E4E0D9"/><stop offset="0.53" stop-color="#ECE8E2"/><stop offset="1" stop-color="#EFEBE5"/></radialGradient><linearGradient id="paint1_linear_2155_2110" x1="12.6201" y1="12.7209" x2="15.7324" y2="9.82989" gradientUnits="userSpaceOnUse"><stop stop-color="#D7D2CB"/><stop offset="0.05" stop-color="#DAD5CF"/><stop offset="0.42" stop-color="#EEECE9"/><stop offset="0.74" stop-color="#FAFAF9"/><stop offset="1" stop-color="white"/></linearGradient></defs></svg>`} />

                }
            </ViewRowBetweenCenter>
        )
    }
}