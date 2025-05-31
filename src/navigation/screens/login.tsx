import { View, Text } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
      <Text className='color-text font-bold text-2xl'>Welcome back </Text>
      <View>
        <Text className='color-text font-bold text-2xl'>to Book<Text className='color-primary'>Track</Text> !</Text>
      </View>
    </View>
  )
}

export default LoginScreen