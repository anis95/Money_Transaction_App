import React, { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { useNetInfo } from '@react-native-community/netinfo';
import * as Font from 'expo-font';

import Theme from './src/config/Theme';
import { AppNavigator } from './src/navigation';
import NoConnection from './src/components/layouts/NoConnection';
import { NotificationProvider } from './src/components/layouts/NotificationBar';

export default function App() {
  /**
   * Init net Info
   */
  const netInfo = useNetInfo();

  /**
   * Init app fonts
   */
  const [loaded] = Font.useFonts({
    UbuntuDisplayBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
    UbuntuDisplayRegular: require('./assets/fonts/Ubuntu-Regular.ttf'),
  });

  /**
   * Init state
   */
  const [isConnected, setIsConnected] = useState(netInfo.isConnected);

  /**
   * Handle connection
   */
  const handleConnection = () => {
    setIsConnected(netInfo.isConnected);
  };

  return (
    <PaperProvider theme={Theme}>
      <NotificationProvider>
        {loaded &&
          (isConnected == false ? (
            <NoConnection handleConnection={handleConnection} />
          ) : (
            <AppNavigator />
          ))}
      </NotificationProvider>
    </PaperProvider>
  );
}
