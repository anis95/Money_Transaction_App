import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import Theme, { CustomTheme } from 'config/Theme';
import Styles from 'config/Styles';
import { allowOnlyNumbersAndDots, formatNumber } from 'utils/numberUtils';
import { FormType } from 'types/senMoney';
import { sendMoneyConstant } from 'constant/sendMoney';
import Header from 'components/layouts/Header';
import UserProfileCard from 'components/layouts/UserInfoCard';
import BalanceInfo from './components/BalanceInfo';
import AmountInput from './components/AmountInput';
import FeesAndTotal from './components/FeesAndTotal';
import QuickAmountButtons from './components/QuickAmountButtons';
import BannerMessage from './components/BannerMessage';
import CustomButton from 'components/layouts/CustomButton';

const SendMoneyScreen = () => {
  /**
   * Init navigation
   */
  const navigation: any = useNavigation();

  /**
   * Init theme colors
   */
  const { colors } = Theme as CustomTheme;

  /**
   * Init states
   */
  const [inputFocused, setInputFocused] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(
    sendMoneyConstant.INITIAL_BALANCE,
  );

  /**
   * Init react hook form properties
   */
  const { control, handleSubmit, setValue, watch, reset } = useForm<FormType>({
    defaultValues: sendMoneyConstant.defaultValueForm,
    mode: 'all',
  });

  /**
   * Init constant
   *
   */
  const feeValue = watch('fee');
  const totalValue = watch('total');
  const enteredAmount = watch('amount');

  /**
   * Handle focused input
   * @returns
   */
  const handleFocus = () => setInputFocused(true);

  /**
   * Handle blur input
   */
  const handleBlur = () => {
    setInputFocused(false);

    const amountValue = enteredAmount || '0';

    // Strip commas before parsing
    const amountParsed = amountValue.replace(/,/g, '');

    const parsedAmount = parseFloat(amountParsed);

    if (parsedAmount === 0 || !parsedAmount) {
      reset(sendMoneyConstant.defaultValueForm);
    } else {
      setValue('amount', formatNumber(parsedAmount * 1000));
    }
  };

  /**
   *  Handle calculated fee and update balance
   * @param {number} enteredAmount
   * @returns
   */
  const calculateFee = (enteredAmount: number) => {
    let calculatedFee = enteredAmount * 0.01; // 1% fee

    if (calculatedFee > 3000) calculatedFee = 3000; // Cap at 3 TND
    if (enteredAmount <= 20000) {
      calculatedFee = 5; // Discounted fee for amounts < 20 TND
    }

    const newBalance =
      sendMoneyConstant.INITIAL_BALANCE - enteredAmount - calculatedFee;
    if (newBalance >= 0) {
      setCurrentBalance(newBalance);
    }
    return calculatedFee;
  };

  /**
   * handle real time calculation when amount change
   * @param {number} amount
   */
  const handleAmountChange = (amount: number) => {
    const fee = calculateFee(amount);
    const total = amount + fee;

    setValue('fee', fee);
    setValue('total', total);
  };

  /**
   * Handle show discount banner
   */
  const showDiscountBanner =
    Number(enteredAmount) > 0 && Number(enteredAmount) <= 20;

  /**
   * Handle disabled submit button
   */
  const disabledSubmitBtn = Number(enteredAmount) === 0 || !enteredAmount;

  /**
   * Handle submit form
   */
  const handleSendMoney = (data: FormType) => {
    const { amount, fee, total } = data;

    const amountFormatted = allowOnlyNumbersAndDots(amount);

    navigation.navigate('TransactionSuccess', {
      receiverName: 'Foulen Fouleni',
      amount: formatNumber(parseFloat(amountFormatted) * 1000),
      fee: formatNumber(fee),
      total: formatNumber(total),
    });
  };

  return (
    <View style={Styles.container}>
      <Header title="Send money" goBack={true} colors={colors} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[Styles.flexCenter, Styles.mt10]}>
            <UserProfileCard
              user={sendMoneyConstant.userInformation}
              style={Styles.p10}
            />
            <BalanceInfo currentBalance={formatNumber(currentBalance) || '0'} />
            <AmountInput
              colors={colors}
              inputFocused={inputFocused}
              control={control}
              reset={reset}
              setValue={setValue}
              setCurrentBalance={setCurrentBalance}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              handleAmountChange={handleAmountChange}
              calculateFee={calculateFee}
            />
            {showDiscountBanner && (
              <BannerMessage
                text="Enjoy your first 20 DT of the day with a fee of 5 millimes."
                backgroundColor={colors.greenOpacity}
                textColor={colors.green}
              />
            )}
            <FeesAndTotal
              fee={formatNumber(feeValue) || '0.000'}
              total={formatNumber(totalValue) || '0.000'}
            />
            {!inputFocused && (
              <QuickAmountButtons
                colors={colors}
                amountValue={enteredAmount}
                setValue={setValue}
                handleAmountChange={handleAmountChange}
              />
            )}
            <View
              style={[
                Styles.footer,
                inputFocused ? { flex: 1 } : { flex: 0.5 },
              ]}
            >
              <CustomButton
                buttonColor={colors.red}
                disabled={disabledSubmitBtn}
                buttonStyle={Styles.button}
                labelStyle={Styles.buttonLabel}
                onPress={handleSubmit(handleSendMoney)}
                buttonText="Send money"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

/**
 * Export default send money screen
 */
export default SendMoneyScreen;
