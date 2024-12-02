import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';

import Styles from 'config/Styles';
import { sendMoneyConstant } from 'constant/sendMoney';
import {
  formatNumberWithStyles,
  generateTransactionId,
} from 'utils/numberUtils';
import CardTransactionStyles from 'styles/CardTransactionStyles';
import UserProfileCard from './UserInfoCard';

interface Props {
  receiverName: string;
  amount: string;
  fee: string;
  total: string;
}

const CardTransactionDetails = ({
  receiverName,
  amount,
  fee,
  total,
}: Props) => {
  /**
   * Format the amount for display
   */
  const formattedAmountNumber = formatNumberWithStyles(amount);

  /**
   * Render a row with label and value or formatted number
   * @param label
   * @param number
   * @param value
   */
  const renderRow = (
    label: string,
    number?: { mainPart: string; decimalPart: string },
    value?: string,
  ) => (
    <View style={CardTransactionStyles.row}>
      <Text style={CardTransactionStyles.label}>{label}</Text>
      {value ? (
        <Text style={CardTransactionStyles.value}>{value}</Text>
      ) : (
        number && (
          <View style={CardTransactionStyles.numberRow}>
            <Text style={CardTransactionStyles.mainAmount}>-</Text>
            <Image
              source={require('../../../assets/images/currency-black.png')}
              style={CardTransactionStyles.currencyIconSmall}
            />
            <Text style={CardTransactionStyles.mainAmount}>
              {number.mainPart}
            </Text>
            <Text style={CardTransactionStyles.decimalAmount}>
              {'.' + number.decimalPart}
            </Text>
          </View>
        )
      )}
    </View>
  );

  return (
    <View style={CardTransactionStyles.card}>
      {/* Header Section */}
      <View
        style={[CardTransactionStyles.section, CardTransactionStyles.header]}
      >
        <UserProfileCard
          user={sendMoneyConstant.userInformation}
          showInformation={false}
          style={Styles.p10}
        />
        <View style={CardTransactionStyles.amountRow}>
          <Image
            source={require('../../../assets/images/currency-black.png')}
            style={CardTransactionStyles.currencyIcon}
          />
          <Text style={CardTransactionStyles.amount}>
            <Text style={[CardTransactionStyles.mainAmount, { fontSize: 25 }]}>
              {formattedAmountNumber.mainPart}
            </Text>
            <Text
              style={[CardTransactionStyles.decimalAmount, { fontSize: 23 }]}
            >
              {'.' + formattedAmountNumber.decimalPart}
            </Text>
          </Text>
        </View>
        <Text style={CardTransactionStyles.subtext}>Money sent</Text>
      </View>

      {/* Content Section */}
      <View
        style={[CardTransactionStyles.section, CardTransactionStyles.content]}
      >
        {renderRow('Receiver', undefined, receiverName)}
        {renderRow('Amount', formatNumberWithStyles(amount))}
        {renderRow('Fee', formatNumberWithStyles(fee))}
        {renderRow('Total', formatNumberWithStyles(total))}
      </View>

      {/* Footer Section */}
      <View
        style={[CardTransactionStyles.section, CardTransactionStyles.footer]}
      >
        {renderRow('Transaction ID', undefined, generateTransactionId())}
      </View>
    </View>
  );
};

export default CardTransactionDetails;
