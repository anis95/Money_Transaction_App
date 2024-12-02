import React from 'react';
import { View, Text, Image } from 'react-native';
import BalanceStyles from 'styles/BalanceStyles';

const BalanceInfo = ({ currentBalance }: { currentBalance: string }) => (
  <View style={BalanceStyles.container}>
    <View style={BalanceStyles.balanceCard}>
      <View style={BalanceStyles.balanceInfo}>
        <Image
          source={require('../../../../assets/images/walletIcon.png')}
          style={BalanceStyles.icon}
        />
        <Text style={BalanceStyles.balanceLabel}>Balance:</Text>
      </View>
      <Text style={BalanceStyles.balanceAmount}>{currentBalance} DT</Text>
    </View>
  </View>
);

/**
 * Export default balance info
 */
export default BalanceInfo;
