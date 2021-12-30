import {ColorScheme} from './color-scheme';

export interface ThemeColorScheme {
    primary: ColorScheme;
    secondary: ColorScheme;
    surface: ColorScheme;
    background: ColorScheme;
    error: ColorScheme;
    onPrimary: ColorScheme;
    onSecondary: ColorScheme;
    onSurface: ColorScheme;
    onBackground: ColorScheme;
    onError: ColorScheme;
    dividerColor: ColorScheme;
    textColor: ColorScheme;
    secondaryTextColor: ColorScheme;
}
