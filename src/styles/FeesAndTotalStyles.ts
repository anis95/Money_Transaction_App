import { StyleSheet } from 'react-native';

const FeesAndTotalStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
  },
  text: {
    fontSize: 15,
  },
  totalAmount: {
    fontFamily: 'UbuntuDisplayBold',
    fontSize: 17,
  },
});

export default FeesAndTotalStyles;
