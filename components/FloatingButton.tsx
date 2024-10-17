import { View, TouchableWithoutFeedback, Animated } from 'react-native'
import React, { Component } from 'react'
import Icons from '../constants/icons'
import { router } from 'expo-router';

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
    openPost = () => {
        router.navigate('create-post')
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
            <View className='flex items-center self-end absolute p-8 bottom-0 right-2'>
                <View className='absolute'>
                    <TouchableWithoutFeedback className=''>
                        <Animated.View className='items-center justify-center bg-[#FFA006] rounded-full h-8 w-8 shadow-md shadow-black' style={cameraStyle}>
                            <Icons.Camera color='white' />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
                <View className='absolute bg-transparent rounded-full shadow-md shadow-black'>
                    <TouchableWithoutFeedback className='' onPress={this.openPost}>
                        <Animated.View className='items-center justify-center bg-[#FFA006] rounded-full h-8 w-8 shadow-md shadow-black' style={postStyle}>
                            <Icons.Post color='white' />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
                <View className='absolute'>
                    <TouchableWithoutFeedback onPress={this.toggleMenu}>
                        <Animated.View className='items-center justify-center bg-[#FFA006] rounded-full h-10 w-10 shadow-lg shadow-black ${}' style={rotation}>
                            <Icons.Plus color='white' />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
};