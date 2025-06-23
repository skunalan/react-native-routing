import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import LoginInput from "../../components/login-input";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useForm } from "react-hook-form";

const iconStyle = { width: 22, height: 22 };

const SignupScreen = () => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  const handleTermsPress = () => {};
  const handlePrivacyPress = () => {};

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute left-4 top-2 z-10"
      >
        <Ionicons name="arrow-back" size={28} color="#000" />
      </TouchableOpacity>

      <View className="mt-14">
        <Text className="color-text font-bold text-2xl">
          Begin your journey with
        </Text>
        <View>
          <Text className="color-text font-bold text-2xl">
            Book<Text className="color-primary">Track</Text> !
          </Text>
        </View>
        <LoginInput label="Name" name="name" control={control} />
        <LoginInput label="E-mail" name="email" control={control} />
        <LoginInput
          label="Password"
          name="password"
          control={control}
          secureTextEntry={true}
        />
        <LoginInput
          label="Re-enter password"
          name="repassword"
          control={control}
          secureTextEntry={true}
        />

        <TouchableOpacity className="bg-primary py-4 border-2 border-primary rounded-xl items-center justify-center mt-5">
          <Text className="color-muted font-bold text-xl">Enter</Text>
        </TouchableOpacity>

        <View className="w-full flex-row items-center py-2 mt-10">
          <View className="bg-secondary h-[0.4px] flex-1" />
          <Text className="text-foreground px-3 font-bold">Or</Text>
          <View className="bg-secondary h-[0.4px] flex-1" />
        </View>

        <View className="flex-row justify-center gap-5 mt-5">
          <TouchableOpacity className="bg-muted p-3 rounded-full">
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png",
              }}
              style={iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-muted p-3 rounded-full">
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
              }}
              style={iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-muted p-3 rounded-full">
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
              }}
              style={iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text className="color-secondary text-xl font-semibold text-center mt-24">
            By using this app, you agree to our{" "}
            <Text
              className="font-bold color-foreground"
              onPress={handleTermsPress}
            >
              Terms of Use
            </Text>{" "}
            and{" "}
            <Text
              className="font-bold color-foreground"
              onPress={handlePrivacyPress}
            >
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
      </View>
    </>
  );
};

export default SignupScreen;
