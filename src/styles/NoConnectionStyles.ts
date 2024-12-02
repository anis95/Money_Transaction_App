import Theme, { CustomTheme } from 'config/Theme';
import { StyleSheet } from 'react-native';

const { colors } = Theme as CustomTheme;

const NoConnectionStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 70,
    height: 60,
  },
  image: {
    width: 270,
    height: 400,
    elevation: 0,
  },
  text: {
    color: colors.secondary,
    textAlign: 'center',
    marginTop: 10,
    width: '80%',
    fontSize: 17,
  },
  label: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  button: {
    borderRadius: 10,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default NoConnectionStyle;
