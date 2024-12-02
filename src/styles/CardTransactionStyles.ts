import Theme, { CustomTheme } from 'config/Theme';
import { StyleSheet } from 'react-native';

const { colors } = Theme as CustomTheme;

const CardTransactionStyles = StyleSheet.create({
  card: {
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.primary,
    width: '90%',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  section: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  header: {
    alignItems: 'center',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  content: {
    justifyContent: 'center',
  },
  footer: {
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
  },
  numberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyIconSmall: {
    width: 10,
    height: 10,
    marginHorizontal: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontFamily: 'UbuntuDisplayBold',
    fontSize: 14,
    color: '#7A7A7A',
  },
  value: {
    fontFamily: 'UbuntuDisplayBold',
    fontSize: 16,
    color: '#000000',
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  currencyIcon: {
    height: 17,
    width: 17,
    marginRight: 5,
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  mainAmount: {
    fontFamily: 'UbuntuDisplayBold',
    fontSize: 16,
  },
  decimalAmount: {
    fontFamily: 'UbuntuDisplayRegular',
    fontSize: 14,
  },
  subtext: {
    fontFamily: 'UbuntuDisplayRegular',
    fontSize: 14,
    color: '#989FA3',
    paddingBottom: 10,
  },
});

export default CardTransactionStyles;
