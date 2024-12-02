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
  notificationBar: {
    width: '90%',
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 60,
    zIndex: 1000,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  notificationText: {
    color: colors.secondary,
    fontSize: 14,
    flex: 1,
    fontFamily: 'UbuntuDisplayBold',
    marginLeft: 10,
  },
});

export default LayoutStyle;
