import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Text, StatusBar, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LayoutStyle from 'styles/LayoutStyle';

interface NotificationContextProps {
  showNotification: (message: string, duration?: number) => void;
}

/**
 * Create a context for notifications
 */
const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined,
);

/**
 * Custom hook to use the notification
 * @returns
 */
export const useNotification = (): NotificationContextProps => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    );
  }
  return context;
};

/**
 * Provider component to wrap the application
 */
export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  /**
   * Init states
   */
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  /**
   * Function to display a notification and auto-hide it after the specified duration
   * @param {string} msg
   * @param {string} duration
   */
  const showNotification = (msg: string, duration: number = 3000) => {
    setMessage(msg);
    setVisible(true);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setVisible(false));
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {visible && (
        <Animated.View
          style={[LayoutStyle.notificationBar, { opacity: fadeAnim }]}
        >
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <Icon name="closecircle" size={32} color={'#BD0F1B'} />
          <Text style={LayoutStyle.notificationText}>{message}</Text>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Icon name="close" size={15} color={'#818283'} />
          </TouchableOpacity>
        </Animated.View>
      )}
    </NotificationContext.Provider>
  );
};
