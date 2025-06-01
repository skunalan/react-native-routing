import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import LoginInput from "../../components/login-input";
import { useNavigation } from "@react-navigation/native";

const iconStyle = { width: 22, height: 22};

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="mt-14">
      <Text className="color-text font-bold text-2xl">Welcome back </Text>
      <View>
        <Text className="color-text font-bold text-2xl">
          to Book<Text className="color-primary">Track</Text> !
        </Text>
      </View>
      <LoginInput label="E-mail" />
      <LoginInput label="Password" />

      <TouchableOpacity className="bg-primary py-4 border-2 border-primary rounded-xl items-center justify-center mt-5">
        <Text className="color-muted font-bold text-xl">Enter</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center mt-7 gap-1">
        <Text className="color-secondary text-lg font-semibold">
        Don't have an account?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Text className="color-foreground font-bold text-lg">Register now</Text></TouchableOpacity>
      </View>

      <View className="w-full flex-row items-center py-2 mt-10">
        <View className="bg-secondary h-[0.4px] flex-1" />
        <Text className="text-foreground px-3 font-bold">Or</Text>
        <View className="bg-secondary h-[0.4px] flex-1" />
      </View>

      <View className="flex-row justify-center gap-5 mt-5">
        <TouchableOpacity className="bg-muted p-3 rounded-full">
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png' }}
          style={iconStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity className="bg-muted p-3 rounded-full">
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' }}
          style={iconStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity className="bg-muted p-3 rounded-full">
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png' }}
          style={iconStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
      </View>
    </View>

  );
};

export default LoginScreen;