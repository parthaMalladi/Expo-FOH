import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      
      {/* Header Bar - Distinct height and layout to prevent clipping */}
      <View className="flex-row justify-between items-center px-8 h-16 w-full z-10">
        <TouchableOpacity 
          className="bg-gray-300 py-2 px-4 rounded-md" 
          onPress={() => router.replace('/')}
        >
          <Text className="text-base font-semibold text-gray-800">← Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="bg-gray-300 py-2 px-4 rounded-md" 
          onPress={() => console.log('Settings Clicked')}
        >
          <Text className="text-base font-semibold text-gray-800">⚙️ Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Grid Container - Handles vertical limits for tight landscape orientations */}
      <View className="flex-1 justify-center items-center px-8 pb-6">
        
        {/* Row 1 */}
        <View className="flex-row justify-center w-full gap-5 mb-5 h-[35%] max-h-36">
          <TouchableOpacity 
            className="flex-1 max-w-sm bg-blue-500 justify-center items-center rounded-xl shadow-sm" 
            onPress={() => router.push('/tactical')}
          >
            <Text className="text-white text-xl font-bold text-center">Tactical</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-1 max-w-sm bg-blue-500 justify-center items-center rounded-xl shadow-sm" 
            onPress={() => console.log('Operational/GM')}
          >
            <Text className="text-white text-xl font-bold text-center">Operational/GM</Text>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View className="flex-row justify-center w-full gap-5 h-[35%] max-h-36">
          <TouchableOpacity 
            className="flex-1 max-w-sm bg-blue-500 justify-center items-center rounded-xl shadow-sm" 
            onPress={() => console.log('Back of House')}
          >
            <Text className="text-white text-xl font-bold text-center">Back of House</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-1 max-w-sm bg-blue-500 justify-center items-center rounded-xl shadow-sm" 
            onPress={() => console.log('Reporting Dashboard')}
          >
            <Text className="text-white text-xl font-bold text-center">Reporting Dashboard</Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  );
}