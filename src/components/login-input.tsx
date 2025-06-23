import { View, TextInput } from "react-native";
import React from "react";
import { Controller, Control } from "react-hook-form";

type LoginInputProps = {
  label: string;
  name: string;
  control: Control;
  secureTextEntry?: boolean;
};

const LoginInput = ({
  label,
  name,
  control,
  secureTextEntry,
}: LoginInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View className="bg-muted py-4 px-3 rounded-lg mt-7">
          <TextInput
            className="placeholder:text-placeholder placeholder:text-xl placeholder:font-medium"
            placeholder={label}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
          />
        </View>
      )}
    />
  );
};

export default LoginInput;
