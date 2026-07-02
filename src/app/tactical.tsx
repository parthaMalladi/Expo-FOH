import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import Logo from '../../assets/logo.svg';

export default function TacticalScreen() {
  const router = useRouter();
  const [pendingCount, setPendingCount] = useState(5);

  const handleVerificationPress = () => {
    if (pendingCount > 0) {
      setPendingCount(pendingCount - 1);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#b59e85] justify-between py-6">
      
      {/* Header Bar */}
      <View className="flex-row justify-between items-center px-10 h-16 w-full z-10">
        <TouchableOpacity 
          className="w-11 h-11 bg-white/20 items-center justify-center rounded-full active:bg-white/30" 
          onPress={() => console.log('Settings Clicked')}
        >
          <Feather name="settings" size={20} color="white" />
        </TouchableOpacity>

        <View className="items-center">
          <Logo width={110} height={50} />
        </View>
        
        <TouchableOpacity 
          className="w-11 h-11 bg-white/20 items-center justify-center rounded-full active:bg-white/30" 
          onPress={() => router.replace('/home')}
        >
          <Feather name="log-out" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* 3 Region Split Screen Layout */}
      <View className="flex-1 flex-row px-10 py-6 gap-6 items-stretch justify-center max-h-[500px]">
        
        {/* Left Region */}
        <View className="flex-1">
          <TouchableOpacity 
            className="w-full h-full bg-[#e05315] justify-center items-center rounded-[32px] shadow-xl active:opacity-90 px-6 py-4" 
            onPress={() => console.log('Open New Tab')}
          >
            <Text className="text-white text-4xl font-serif font-semibold text-center tracking-wide">
              Open New{"\n"}Tab
            </Text>
          </TouchableOpacity>
        </View>

        {/* Middle Region */}
        <View className="flex-1">
          <TouchableOpacity 
            className="w-full h-full bg-[#dfd3c3] justify-center items-center rounded-[32px] shadow-xl active:opacity-90 px-6 py-4" 
            onPress={() => console.log('View / Close Tab')}
          >
            <Text className="text-[#1e2229] text-4xl font-serif font-semibold text-center tracking-wide">
              View / Close{"\n"}Tab
            </Text>
          </TouchableOpacity>
        </View>

        {/* Right Region */}
        <View className="flex-1 justify-between gap-4">
          
          <TouchableOpacity 
            className="w-full flex-1 bg-[#dfd3c3] justify-center items-center rounded-[24px] shadow-lg active:opacity-90 px-4 py-2" 
            onPress={() => console.log('Add Ounces')}
          >
            <Text className="text-[#1e2229] text-2xl font-serif font-semibold text-center tracking-wide">
              Add Ounces
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="w-full flex-1 bg-[#dfd3c3] justify-center items-center rounded-[24px] shadow-lg active:opacity-90 px-4 py-2" 
            onPress={() => console.log('Start / View Event')}
          >
            <Text className="text-[#1e2229] text-2xl font-serif font-semibold text-center tracking-wide">
              Start / View{"\n"}Event
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="w-full flex-1 bg-[#c63527] justify-center items-center rounded-[24px] shadow-lg active:opacity-90 px-4 py-2" 
            onPress={handleVerificationPress}
          >
            <Text className="text-white text-2xl font-serif font-semibold text-center tracking-wide">
              Verification{"\n"}Pending {pendingCount > 0 ? `(${pendingCount})` : ''}
            </Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* Footer Branding */}
      <View className="items-center mb-2">
        <Text className="text-xs text-[#ebdcd0]/70 font-light">
          Powered By <Text className="font-semibold">iPourIt</Text>
        </Text>
      </View>

    </SafeAreaView>
  );
}