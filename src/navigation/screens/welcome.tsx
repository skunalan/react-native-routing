import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Image
        className="mx-auto mt-16"
        source={require("../../../assets/images/logo.png")}
      />
      <Text className="text-center text-7xl font-bold mt-20 mb-5">
        <Text className="color-text">Book</Text>
        <Text className="color-primary">Track</Text>
      </Text>
      <Text className="color-text text-center text-xl font-semibold mt-16 mx-3">
        Keep track of your books you've read, are currently reading, and want to
        read-all in one place
      </Text>
      <View className="flex-row justify-center mt-20 gap-8">
        <TouchableOpacity className="bg-muted w-40 py-3 border-2 border-primary rounded-xl items-center justify-center">
        <Text className="color-primary font-bold text-xl" onPress={() => navigation.navigate("Login")}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-primary w-40 py-3 border-2 border-primary rounded-xl items-center justify-center">
        <Text className="color-muted font-bold text-xl" onPress={() => navigation.navigate("Signup")}>Sign up</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

export default WelcomeScreen;
