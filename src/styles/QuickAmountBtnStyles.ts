import Theme, { CustomTheme } from 'config/Theme';
import { StyleSheet } from 'react-native';

const { colors } = Theme as CustomTheme;

const QuickAmountBtnStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    width: '70%',
  },
  containerBloc: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  selectedBtn: {
    backgroundColor: colors.orangeOpacity,
    borderWidth: 1,
    borderColor: colors.orange,
  },
  buttonText: {
    fontFamily: 'UbuntuDisplayBold',
    fontSize: 14,
  },
});

export default QuickAmountBtnStyles;
