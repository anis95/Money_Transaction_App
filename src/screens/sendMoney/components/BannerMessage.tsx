import React from 'react';
import { View, Text } from 'react-native';
import Styles from 'config/Styles';

interface MessageBoxProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number;
  style?: object;
}

const BannerMessage: React.FC<MessageBoxProps> = ({
  text,
  backgroundColor,
  textColor,
  borderRadius = 5,
  style = {},
}) => {
  return (
    <View
      style={[
        Styles.width90Percent,
        Styles.alignSelfCenter,
        Styles.p5,
        { backgroundColor, borderRadius },
        style,
      ]}
    >
      <Text style={[Styles.smallRegularText, { color: textColor }]}>
        {text}
      </Text>
    </View>
  );
};

/**
 * Export default banner message
 */
export default BannerMessage;
