import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export default function TacticalScreen() {
  const router = useRouter();
  const [pendingCount, setPendingCount] = useState(5);

  const handleVerificationPress = () => {
    if (pendingCount > 0) {
      setPendingCount(pendingCount - 1);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      
      {/* Header Bar */}
      <View className="flex-row justify-between items-center px-8 h-16 w-full">
        <TouchableOpacity 
          className="bg-gray-300 py-2 px-4 rounded w-20 items-center" 
          onPress={() => router.replace('/home')}
        >
          <Text className="text-base font-semibold text-gray-800">← Home</Text>
        </TouchableOpacity>
        
        <Text className="text-xl font-bold text-gray-800">Tactical Dashboard</Text>
        
        {/* Invisible Balance Spacer */}
        <View className="w-20" />
      </View>

      {/* 3 Region Split Screen */}
      <View className="flex-1 flex-row p-5 gap-5">
        
        {/* Left Region */}
        <View className="flex-1 justify-center items-center">
          <TouchableOpacity 
            className="w-full h-5/6 bg-blue-500 justify-center items-center rounded-xl p-5 shadow-sm" 
            onPress={() => console.log('Open New Tab')}
          >
            <Text className="text-white text-2xl font-bold text-center">Open New Tab</Text>
          </TouchableOpacity>
        </View>

        {/* Middle Region */}
        <View className="flex-1 justify-center items-center">
          <TouchableOpacity 
            className="w-full h-5/6 bg-blue-500 justify-center items-center rounded-xl p-5 shadow-sm" 
            onPress={() => console.log('View / Close Tab')}
          >
            <Text className="text-white text-2xl font-bold text-center">View / Close Tab</Text>
          </TouchableOpacity>
        </View>

        {/* Right Region (Stacked Buttons) */}
        <View className="flex-1 justify-between h-5/6 self-center">
          <TouchableOpacity 
            className="w-full h-[30%] bg-blue-500 justify-center items-center rounded-xl p-2 shadow-sm" 
            onPress={() => console.log('Add Ounces')}
          >
            <Text className="text-white text-lg font-bold text-center">Add Ounces</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="w-full h-[30%] bg-blue-500 justify-center items-center rounded-xl p-2 shadow-sm" 
            onPress={() => console.log('Start / View Event')}
          >
            <Text className="text-white text-lg font-bold text-center">Start / View Event</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="w-full h-[30%] bg-red-500 justify-center items-center rounded-xl p-2 shadow-sm" 
            onPress={handleVerificationPress}
          >
            <Text className="text-white text-lg font-bold text-center">
              Verification Pending {pendingCount > 0 ? `(${pendingCount})` : ''}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}