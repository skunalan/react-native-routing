import { View, Text, TextInput } from 'react-native'
import React from 'react'


const LoginInput = (props:{label: string}) => {
  return (
    <View className='bg-muted py-4 px-3 rounded-lg mt-7'>
      <TextInput className='placeholder:text-placeholder placeholder:text-xl placeholder:font-medium'
      placeholder={props.label}/>
    </View>
  )
}

export default LoginInput