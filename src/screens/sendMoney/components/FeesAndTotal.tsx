import React from 'react';
import { View, Text } from 'react-native';

import Styles from 'config/Styles';
import FeesAndTotalStyles from 'styles/FeesAndTotalStyles';

const FeesAndTotal = ({ fee, total }: { fee: string; total: string }) => (
  <View style={FeesAndTotalStyles.container}>
    <View style={FeesAndTotalStyles.row}>
      <Text style={FeesAndTotalStyles.text}>Fees:</Text>
      <Text style={FeesAndTotalStyles.text}>{fee} DT</Text>
    </View>
    <View style={FeesAndTotalStyles.row}>
      <Text style={[FeesAndTotalStyles.text, Styles.bold]}>Total:</Text>
      <Text style={[FeesAndTotalStyles.text, FeesAndTotalStyles.totalAmount]}>
        {total} DT
      </Text>
    </View>
  </View>
);

/**
 * Export default fees and total
 */
export default FeesAndTotal;
