import { CustomTheme } from 'config/Theme';
import { useTheme } from 'react-native-paper';

export function useThemeColors() {
  /**
   * Init colors from theme
   */
  const { colors } = useTheme() as CustomTheme;

  return colors;
}
