import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { SendMoneyScreen } from 'screens';
import { TransactionSuccessScreen } from 'screens';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SendMoneyScreen" component={SendMoneyScreen} />
      <Stack.Screen
        name="TransactionSuccess"
        component={TransactionSuccessScreen}
      />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigator />
    </NavigationContainer>
  );
};

/**
 * Export default app navigator
 */
export default AppNavigator;
