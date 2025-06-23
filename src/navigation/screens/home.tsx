import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useAuthStore from "../../store/auth";

const tabs = ["Read", "Reading", "To Read"];

const HomeScreen = () => {

  const [activeTab, setActiveTab] = useState("Read");

  const { setLoggedIn } = useAuthStore();

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <View>
        <TouchableOpacity className="absolute top-5 right-5">
          <Text onPress={handleLogout} className="color-text text-lg font-bold">Logout</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center text-5xl font-bold mt-20 mb-5">
        <Text className="color-text">Book</Text>
        <Text className="color-primary">Track</Text>
      </Text>

      <View className="flex-1 p-5">
      <View className="flex-row justify-around mb-4">
        {tabs.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text
              className={`text-lg font-bold ${
                activeTab === tab ? "color-primary underline" : "color-secondary"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>
    </>
  );
};

export default HomeScreen;
