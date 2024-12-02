import { DefaultTheme, MD3Theme } from 'react-native-paper';

// Define your own color structure
export interface CustomColors {
  red: string;
  green?: string;
  greenOpacity?: string;
  grey?: string;
  lightGrey?: string;
  orange?: string;
  orangeOpacity?: string;
}

// Extend the default theme with your custom colors
export type CustomTheme = MD3Theme & {
  colors: CustomColors;
};

// Create the custom theme
const Theme: CustomTheme = {
  ...DefaultTheme,
  dark: false,
  mode: 'exact',
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffffff',
    secondary: '#000000',
    red: 'rgba(235, 101, 74, 1)',
    green: 'rgba(14, 170, 126, 1)',
    greenOpacity: 'rgba(209, 239, 230, 0.38)',
    grey: 'rgba(180, 181, 182, 1)',
    lightGrey: '#EFEFEF',
    orange: 'rgba(246, 142, 33, 1)',
    orangeOpacity: 'rgba(254, 244, 233, 1)',
  },
};

export default Theme;
