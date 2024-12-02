import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

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
        <Animated.View style={[styles.notificationBar, { opacity: fadeAnim }]}>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <Icon name="closecircle" size={30} color={'#BD0F1B'} />
          <Text style={styles.notificationText}>{message}</Text>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Icon name="close" size={15} color={'grey'} />
          </TouchableOpacity>
        </Animated.View>
      )}
    </NotificationContext.Provider>
  );
};

const styles = StyleSheet.create({
  notificationBar: {
    width: '90%',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 60,
    zIndex: 1000,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  notificationText: {
    color: '#000000',
    fontSize: 14,
    flex: 1,
    fontFamily: 'UbuntuDisplayBold',
    marginLeft: 10,
  },
});
