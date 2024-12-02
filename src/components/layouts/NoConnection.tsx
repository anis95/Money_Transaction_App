import React from 'react';
import { Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import NoConnectionStyle from 'styles/NoConnectionStyles';
import Theme, { CustomTheme } from 'config/Theme';
import { StatusBar } from 'expo-status-bar';

type Props = {
  handleConnection: () => void;
};

const NoConnection: React.FC<Props> = (props) => {
  /**
   * Init props
   */
  const { handleConnection } = props;

  /**
   * Init theme colors hooks
   */
  const { colors } = Theme as CustomTheme;

  /**
   * Return tsx content
   */
  return (
    <View style={NoConnectionStyle.container}>
      <StatusBar style="auto" backgroundColor={colors.primary} />
      <Image
        source={require('../../../assets/images/icon-app.png')}
        resizeMode="contain"
        style={NoConnectionStyle.logo}
      />
      <View style={NoConnectionStyle.image}>
        <Image
          source={require('../../../assets/images/oups.png')}
          style={NoConnectionStyle.image}
        />
      </View>
      <Text style={NoConnectionStyle.text}>
        It seems that the internet connection has been interrupted.
      </Text>
      <Button
        buttonColor={colors.orange}
        mode="contained"
        onPress={handleConnection}
        style={NoConnectionStyle.button}
        labelStyle={NoConnectionStyle.label}
        uppercase={false}
      >
        Try Again
      </Button>
    </View>
  );
};

/**
 * Export NoConnection component
 */
export default NoConnection;
