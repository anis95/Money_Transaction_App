import React from 'react';
import { View } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';

import Theme, { CustomTheme } from 'config/Theme';
import TransactionSuccessHeader from './components/TransactionSuccessHeader';
import CustomButton from 'components/layouts/CustomButton';
import CardTransactionDetails from 'components/layouts/CardTransactionDetails';
import { RootStackParamList } from 'types/transactionSuccess';
import Styles from 'config/Styles';

/**
 * Init screen props
 */
type TransactionSuccessScreenRouteProp = RouteProp<
  RootStackParamList,
  'TransactionSuccessScreen'
>;
const TransactionSuccessScreen = ({
  route,
}: {
  route: TransactionSuccessScreenRouteProp;
}) => {
  /**
   * Init route params
   */
  const { receiverName, amount, fee, total } = route.params;

  /**
   * Init theme colors
   */
  const { colors } = Theme as CustomTheme;

  /**
   * Init navigation
   */
  const navigation: any = useNavigation();

  /**
   * Handle on press button
   */
  const handleOnPressButton = () => {
    navigation.navigate('SendMoneyScreen');
  };

  return (
    <View style={Styles.container}>
      <TransactionSuccessHeader />
      <View style={[Styles.container, Styles.centeredItem]}>
        <CardTransactionDetails
          amount={amount}
          total={total}
          fee={fee}
          receiverName={receiverName}
        />
      </View>
      <View style={[Styles.footer, Styles.alignSelfCenter, { flex: 0.2 }]}>
        <CustomButton
          buttonColor={colors.red}
          buttonStyle={[Styles.button]}
          labelStyle={Styles.buttonLabel}
          onPress={handleOnPressButton}
          buttonText="Done"
        />
      </View>
    </View>
  );
};
/**
 * Export default transaction success screen
 */
export default TransactionSuccessScreen;
