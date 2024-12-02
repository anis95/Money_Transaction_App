import Styles from 'config/Styles';
import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';

const TransactionSuccessHeader = () => {
  return (
    <View style={[Styles.columnDirectionCentered, Styles.mt80]}>
      <Image
        source={require('../../../../assets/images/success.gif')}
        style={{
          width: 156,
          height: 156,
        }}
      />
      <Text style={Styles.blackBoldBig}>Transaction completed</Text>
    </View>
  );
};

/**
 * Export default transaction success header
 */
export default TransactionSuccessHeader;
