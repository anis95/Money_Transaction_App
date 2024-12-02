import Theme, { CustomTheme } from 'config/Theme';
import { StyleSheet } from 'react-native';

const { colors } = Theme as CustomTheme;

const LayoutStyle = StyleSheet.create({
  appBarSurface: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(230, 230, 230, 1)',
    elevation: 0,
  },
  arrowBackHeader: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHeader: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LayoutStyle;
