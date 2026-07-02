import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import Logo from '../../assets/logo.svg';

export default function HomeScreen() {
  const router = useRouter();

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
          onPress={() => router.replace('/')}
        >
          <Feather name="log-out" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Grid Container - Switched to flex-1 layouts with flex-row instead of hard heights */}
      <View className="flex-1 justify-center items-center px-10 py-6">
        
        {/* Row 1 */}
        <View className="flex-1 flex-row justify-center w-full gap-6 mb-6 max-h-48">
          <TouchableOpacity 
            className="flex-1 max-w-xl bg-[#dfd3c3] justify-center items-center rounded-[32px] shadow-xl active:opacity-90 px-6 py-4" 
            onPress={() => router.push('/tactical')}
          >
            <Text className="text-[#1e2229] text-3xl font-serif font-semibold text-center tracking-wide">
              Tactical
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-1 max-w-xl bg-[#dfd3c3] justify-center items-center rounded-[32px] shadow-xl active:opacity-90 px-6 py-4" 
            onPress={() => console.log('Operational/GM')}
          >
            <Text className="text-[#1e2229] text-3xl font-serif font-semibold text-center tracking-wide">
              Operational/GM
            </Text>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View className="flex-1 flex-row justify-center w-full gap-6 max-h-48">
          <TouchableOpacity 
            className="flex-1 max-w-xl bg-[#dfd3c3] justify-center items-center rounded-[32px] shadow-xl active:opacity-90 px-6 py-4" 
            onPress={() => console.log('Back of House')}
          >
            <Text className="text-[#1e2229] text-3xl font-serif font-semibold text-center tracking-wide">
              Back of House
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-1 max-w-xl bg-[#dfd3c3] justify-center items-center rounded-[32px] shadow-xl active:opacity-90 px-6 py-4" 
            onPress={() => console.log('Reporting Dashboard')}
          >
            {/* Removed tight leading restriction to let native text engine handle the wrap */}
            <Text className="text-[#1e2229] text-3xl font-serif font-semibold text-center tracking-wide">
              Reporting{"\n"}Dashboard
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