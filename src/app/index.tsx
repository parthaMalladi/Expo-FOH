import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = () => {
    router.replace('/home');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 flex-row justify-center items-center">
      
      {/* Center Rectangle / Bubble */}
      <View className="w-[400px] p-8 rounded-xl bg-white items-center shadow-sm">
        
        <Text className="text-2xl font-bold mb-6 text-gray-800">Welcome</Text>

        {/* Email Input */}
        <TextInput
          className="w-full h-12 border border-gray-300 rounded-md px-4 mb-4 bg-gray-50 text-gray-800"
          placeholder="Email"
          placeholderTextColor="#9ca3af"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          className="w-full h-12 border border-gray-300 rounded-md px-4 mb-4 bg-gray-50 text-gray-800"
          placeholder="Password"
          placeholderTextColor="#9ca3af"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Sign In Button */}
        <TouchableOpacity 
          className="w-full h-12 bg-blue-500 justify-center items-center rounded-md mt-2 mb-4 shadow-sm active:bg-blue-600" 
          onPress={handleSignIn}
        >
          <Text className="text-white font-bold text-base">Sign In</Text>
        </TouchableOpacity>

        {/* Forgot Password Link */}
        <TouchableOpacity onPress={() => console.log('Forgot Password Clicked')}>
          <Text className="text-blue-500 text-sm font-medium">Forgot Password?</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}