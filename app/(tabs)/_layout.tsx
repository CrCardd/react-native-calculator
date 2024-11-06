import { Tabs } from 'expo-router';
import React from 'react';
import Button from '@/components/Button'
import { Text } from 'react-native';

export default function TabLayout() {

  return (
    <>
      {/* <Button onPress={() => {console.log('batata')}} text={'batata'}/> */}
      <>
      <Tabs>
        <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () => (<Text>🐱‍🐉</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='calculator' options={{headerShown: false, tabBarIcon: () => (<Text>🎰</Text>)}}></Tabs.Screen>
      </Tabs>
    </>
    </>
  );
}
