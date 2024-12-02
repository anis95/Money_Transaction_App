import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';
import { UseFormSetValue } from 'react-hook-form';

import { FormType } from 'types/senMoney';

import { CustomColors } from 'config/Theme';
import { sendMoneyConstant } from 'constant/sendMoney';
import { formatNumber } from 'utils/numberUtils';
import QuickAmountBtnStyles from 'styles/QuickAmountBtnStyles';

interface Props {
  amountValue: string;
  colors: MD3Colors & CustomColors;
  setValue: UseFormSetValue<FormType>;
  handleAmountChange: (amount: number) => void;
}
const QuickAmountButtons = (props: Props) => {
  /**
   * Init props
   */
  const { amountValue, colors, setValue, handleAmountChange } = props;

  /**
   * Handle on press button
   */
  const handleOnPressBtn = (value: string) => {
    const enteredAmount = parseFloat(value) * 1000;
    setValue('amount', formatNumber(enteredAmount));
    if (!isNaN(enteredAmount)) {
      handleAmountChange(enteredAmount);
    }
  };

  return (
    <View style={QuickAmountBtnStyles.container}>
      <View style={QuickAmountBtnStyles.containerBloc}>
        {sendMoneyConstant.amountButton.map((amount, index) => (
          <TouchableOpacity
            key={index}
            style={[
              QuickAmountBtnStyles.button,
              amountValue === amount.value
                ? QuickAmountBtnStyles.selectedBtn
                : {},
            ]}
            onPress={() => handleOnPressBtn(amount.value)}
          >
            <Text
              style={[
                QuickAmountBtnStyles.buttonText,
                amountValue === amount.value ? { color: colors.orange } : {},
              ]}
            >
              {amount.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

/**
 * Export default quick amount buttons
 */
export default QuickAmountButtons;
