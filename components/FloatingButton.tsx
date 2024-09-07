import { View, TouchableWithoutFeedback, Animated } from 'react-native'
import React, { Component } from 'react'
import Icons from '../constants/icons'

export default class FloatingButton extends Component {
    animation = new Animated.Value(0);
    open: any;
    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;
        Animated.spring(this.animation, {
            toValue,
            friction: 5,
            useNativeDriver: true
        }).start();
        this.open = !this.open
    }
    render() {
        const cameraStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -100]
                    })
                }
            ]
        }
        const postStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -50]
                    })
                }
            ]
        }
        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }
        return (
            <View className='absolute flex-1 items-center bottom-14 right-9'>
                <View className='absolute'>
                    <TouchableWithoutFeedback className=''>
                        <Animated.View className='items-center justify-center bg-[#FFA006] rounded-3xl h-8 w-8 shadow-2xl' style={cameraStyle}>
                            <Icons.Camera color='white' />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
                <View className='absolute'>
                    <TouchableWithoutFeedback className=''>
                        <Animated.View className='items-center justify-center bg-[#FFA006] rounded-3xl h-8 w-8 shadow-2xl' style={postStyle}>
                            <Icons.Post color='white' />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
                <View className='absolute'>
                    <TouchableWithoutFeedback onPress={this.toggleMenu}>
                        <Animated.View className='items-center justify-center bg-[#FFA006] rounded-3xl h-10 w-10 shadow-2xl ${}' style={rotation}>
                            <Icons.Plus color='white' />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
};