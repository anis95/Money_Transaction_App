import { StyleSheet } from 'react-native';

const BalanceStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  balanceCard: {
    backgroundColor: 'rgba(245, 245, 245, 1)',
    borderRadius: 20,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    paddingRight: 10,
  },
  balanceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 13,
    width: 14,
  },
  balanceLabel: {
    fontSize: 12,
    fontFamily: 'UbuntuDisplayRegular',
    color: 'rgba(80, 82, 83, 1)',
    marginLeft: 5,
    marginRight: 10,
  },
  balanceAmount: {
    fontSize: 12,
    fontFamily: 'UbuntuDisplayBold',
  },
});

export default BalanceStyles;
