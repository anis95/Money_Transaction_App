import Styles from 'config/Styles';
import { useThemeColors } from 'hooks/useThemeColors';
import React from 'react';
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface CustomButtonProps {
  buttonColor?: string;
  textColor?: string;
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  buttonText: string;
  buttonStyle?: object;
  labelStyle?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonColor,
  textColor,
  disabled = false,
  onPress,
  buttonText,
  buttonStyle,
  labelStyle,
}) => {
  /**
   * Init theme colors
   */
  const colors = useThemeColors();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        Styles.button,
        { backgroundColor: disabled ? colors.grey : buttonColor },
        buttonStyle,
      ]}
    >
      <Text style={[Styles.buttonLabel, { color: textColor }, labelStyle]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

/**
 * Export custom button
 */
export default CustomButton;
