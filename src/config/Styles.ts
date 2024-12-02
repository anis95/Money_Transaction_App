import { StyleSheet } from 'react-native';
import Theme from 'config/Theme';
import { CustomTheme } from 'config/Theme';

const { colors } = Theme as CustomTheme;

const Helpers = StyleSheet.create({
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt80: {
    marginTop: 80,
  },
  mb5: {
    marginBottom: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  p10: {
    padding: 10,
  },
  p5: {
    padding: 5,
  },
});

const Texts = StyleSheet.create({
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'UbuntuDisplayBold',
    color: colors.primary,
  },
  blackBoldBig: {
    fontFamily: 'UbuntuDisplayBold',
    fontSize: 24,
  },
  mediumBoldText: {
    fontSize: 16,
    fontFamily: 'UbuntuDisplayBold',
  },
  mediumRegularText: {
    fontSize: 16,
    fontFamily: 'UbuntuDisplayRegular',
  },
  smallRegularText: {
    fontSize: 12,
    fontFamily: 'UbuntuDisplayRegular',
    textAlign: 'center',
  },
});

const Paper = StyleSheet.create({
  input: {
    width: '90%',
    height: 70,
    borderColor: colors.grey,
    borderWidth: 2,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingLeft: 50,
    marginBottom: 10,
    textAlign: 'right',
    backgroundColor: colors.primary,
    fontWeight: 'bold',
    fontFamily: 'UbuntuDisplayRegular',
    fontSize: 30,
  },
});

const Buttons = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

const fonts = StyleSheet.create({
  normal: {
    fontFamily: 'UbuntuDisplayRegular',
  },
  bold: {
    fontFamily: 'UbuntuDisplayBold',
  },
});

const Styles = StyleSheet.create({
  ...Helpers,
  ...Texts,
  ...Buttons,
  ...Paper,
  ...fonts,
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  centeredItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    width: '90%',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  columnDirectionCentered: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  width100Percent: {
    width: '100%',
  },
  width90Percent: {
    width: '90%',
  },
  flexCenter: {
    alignItems: 'center',
    flex: 1,
  },
  fullWidthCenter: {
    width: '100%',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Styles;
