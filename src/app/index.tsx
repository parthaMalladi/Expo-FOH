import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
// Assuming you have expo-crypto or react-native-vector-icons, or a simple feather icon package installed:
import { Feather } from '@expo/vector-icons';
import Logo from '../../assets/logo.svg';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSignIn = () => {
    router.replace('/home');
  };

  return (
    // Background color matching the deep beige tone
    <SafeAreaView className="flex-1 bg-[#b59e85] items-center justify-between py-8">
      
      {/* Top Logo Section */}
      <View className="items-center mt-6">
        <Logo width={120} height={60} />
      </View>

      {/* Center Card Container */}
      {/* We use max-w-md and explicit width handling so it stays sharp and responsive */}
      <View className="w-[90%] max-w-[420px] p-10 rounded-[40px] bg-[#dfd3c3] items-center shadow-2xl">
        
        {/* Header Text */}
        <Text className="text-4xl font-serif font-semibold text-[#1e2229] mb-2 text-center">
          Welcome Back
        </Text>
        <Text className="text-sm font-medium text-[#655d53] mb-8 text-center">
          Sign in to manage your store tabs and events.
        </Text>

        {/* Email Input Field */}
        <View className="w-full mb-5">
          <Text className="text-xs font-bold text-[#5c544a] tracking-wider uppercase mb-2 ml-1">
            Email Address
          </Text>
          <TextInput
            className="w-full h-12 bg-white rounded-xl px-4 text-[#1e2229] shadow-sm text-base"
            placeholder="name@company.com"
            placeholderTextColor="#b0a89f"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input Field */}
        <View className="w-full mb-8">
          <Text className="text-xs font-bold text-[#5c544a] tracking-wider uppercase mb-2 ml-1">
            Password
          </Text>
          <View className="w-full h-12 bg-white rounded-xl px-4 flex-row items-center justify-between shadow-sm">
            <TextInput
              className="flex-1 h-full text-[#1e2229] text-base"
              placeholder="••••••••••••"
              placeholderTextColor="#b0a89f"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            {/* Password visibility toggle */}
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather 
                name={showPassword ? "eye" : "eye-off"} 
                size={20} 
                color="#a0988f" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign In Button */}
        {/* Vibrant Orange Gradient/Solid color with strong rounded corner matching the Figma pill button */}
        <TouchableOpacity 
          className="w-full h-14 bg-[#e05315] justify-center items-center rounded-2xl shadow-md active:opacity-90" 
          onPress={handleSignIn}
        >
          <Text className="text-white font-semibold text-lg">Sign In</Text>
        </TouchableOpacity>

        {/* Forgot Password Link */}
        <TouchableOpacity 
          className="mt-6" 
          onPress={() => console.log('Forgot Password Clicked')}
        >
          <Text className="text-[#655d53] text-sm font-medium underline">
            Forgot password?
          </Text>
        </TouchableOpacity>
        
      </View>

      {/* Footer Branding */}
      <View className="mb-4">
        <Text className="text-xs text-[#ebdcd0]/70 font-light">
          Powered By <Text className="font-semibold">iPourIt</Text>
        </Text>
      </View>

    </SafeAreaView>
  );
}