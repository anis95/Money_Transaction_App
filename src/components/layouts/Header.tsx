import React from 'react';
import { Appbar, Text } from 'react-native-paper';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';

import { CustomColors } from 'config/Theme';
import LayoutStyle from 'styles/LayoutStyle';

/**
 * Props type
 */
type Props = {
  title: string;
  goBack: boolean;
  colors: MD3Colors & CustomColors;
  onPress?: () => void;
};

/**
 *
 * @param props
 * @returns TSX content
 */
const Header = (props: Props) => {
  /**
   * Init props
   */
  const { title, goBack, colors, onPress } = props;

  /**
   * Init navigation
   */
  const navigation = useNavigation();

  /**
   * GoBack function
   */
  const goBackFunction = () => {
    onPress ? onPress() : navigation.goBack();
  };

  return (
    <Appbar.Header style={LayoutStyle.appBarSurface}>
      <View style={LayoutStyle.arrowBackHeader}>
        {goBack && (
          <Icon
            name="keyboard-arrow-left"
            size={30}
            suppressHighlighting={true}
            color={colors.secondary}
            onPress={goBackFunction}
          />
        )}
      </View>
      <View style={LayoutStyle.containerTitle}>
        <Text style={LayoutStyle.titleHeader}>{title}</Text>
      </View>
      <View style={LayoutStyle.arrowBackHeader} />
    </Appbar.Header>
  );
};

/**
 * Export default header
 */
export default Header;
