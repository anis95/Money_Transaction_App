import React from 'react';
import { View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  Control,
  Controller,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';

import { useNotification } from 'components/layouts/NotificationBar';
import { CustomColors } from 'config/Theme';
import Styles from 'config/Styles';
import { sendMoneyConstant } from 'constant/sendMoney';
import { allowOnlyNumbersAndDots, formatNumber } from 'utils/numberUtils';
import { FormType } from 'types/senMoney';

interface Props {
  colors: MD3Colors & CustomColors;
  inputFocused: boolean;
  control: Control<FormType, any>;
  reset: UseFormReset<FormType>;
  setValue: UseFormSetValue<FormType>;
  setCurrentBalance: (currentBalance: number) => void;
  handleFocus: () => void;
  handleBlur: () => void;
  handleAmountChange: (enteredAmount: number) => void;
  calculateFee: (enteredAmount: number) => number;
}

const AmountInput = ({
  colors,
  inputFocused,
  control,
  reset,
  setCurrentBalance,
  setValue,
  handleBlur,
  handleFocus,
  handleAmountChange,
  calculateFee,
}: Props) => {
  const { showNotification } = useNotification();

  /**
   * Handles changes in the amount input field
   * @param {string} text
   */
  const handleInputChange = (text: string) => {
    const numericValue = allowOnlyNumbersAndDots(text);

    if (numericValue === '0' || !numericValue) {
      resetToDefaultValues();
    } else {
      processInput(numericValue);
    }
  };

  /**
   * Resets the form to default values and restores the initial balance
   */
  const resetToDefaultValues = () => {
    reset(sendMoneyConstant.defaultValueForm);
    setCurrentBalance(sendMoneyConstant.INITIAL_BALANCE);
  };

  /**
   * Processes the sanitized input and updates the state
   * @param {string} numericValue
   */
  const processInput = (numericValue: string) => {
    const enteredAmount = parseFloat(numericValue) * 1000;

    if (!isNaN(enteredAmount)) {
      const fee = calculateFee(enteredAmount);
      const total = enteredAmount + fee;

      if (isExceedingBalance(total)) {
        handleExceedingBalance(fee);
      } else {
        updateValues(numericValue, enteredAmount, fee);
      }
    }
  };

  /**
   * Checks if the entered total exceeds the balance
   * @param {number} total
   * @returns {boolean}
   */
  const isExceedingBalance = (total: number): boolean =>
    total > sendMoneyConstant.INITIAL_BALANCE;

  /**
   * Handles the case where the total exceeds the balance
   * @param {number} fee
   */
  const handleExceedingBalance = (fee: number) => {
    const maxAmount = sendMoneyConstant.INITIAL_BALANCE - fee;
    setValue('amount', formatNumber(maxAmount));
    setCurrentBalance(maxAmount);
    handleAmountChange(maxAmount);
    showNotification('Insufficient funds', 5000);
  };

  /**
   * Updates form values and current balance
   * @param {string} numericValue
   * @param {number} enteredAmount
   * @param {number} fee
   */
  const updateValues = (
    numericValue: string,
    enteredAmount: number,
    fee: number,
  ) => {
    setValue('amount', numericValue.toString());
    setCurrentBalance(sendMoneyConstant.INITIAL_BALANCE - enteredAmount - fee);
    handleAmountChange(enteredAmount);
  };

  return (
    <View style={Styles.fullWidthCenter}>
      <Controller
        control={control}
        name="amount"
        defaultValue=""
        rules={{
          required: 'Amount is required',
        }}
        render={({ field: { value } }) => (
          <TextInput
            style={[
              Styles.input,
              inputFocused && { borderColor: colors.orange },
            ]}
            keyboardType="number-pad"
            placeholder="0.000"
            value={value}
            underlineStyle={{ width: 0 }}
            cursorColor={colors.grey}
            placeholderTextColor={colors.grey}
            onChangeText={handleInputChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            left={
              <TextInput.Icon
                icon={() => (
                  <Image
                    source={require('../../../../assets/images/Currency.png')}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                )}
              />
            }
          />
        )}
      />
    </View>
  );
};

/**
 * Export default amount input
 */
export default AmountInput;
