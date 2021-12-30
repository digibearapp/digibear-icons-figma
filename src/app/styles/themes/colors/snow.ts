import {ThemeColorScheme} from './color-scheme/theme-color-scheme';

const snowColors = {
    primary: {
        50: '#edf3f8',
        100: '#d6d9db',
        200: '#bdc0c2',
        300: '#a3a6a9',
        400: '#888c8f',
        500: '#6f7377',
        600: '#565a5d',
        700: '#3d4042',
        800: '#242729',
        900: '#070e13',

        dimmedBase: '#16181A',
        base: '#2E3235',
    },
    secondary: {
        50: '#dcf9ff',
        100: '#b2e9fd',
        200: '#87d8f7',
        300: '#59c9f2',
        400: '#31b9ee',
        500: '#1ba0d4',
        600: '#0d7ca6',
        700: '#005977',
        800: '#00364a',
        900: '#00141d',

        dimmedBase: '#3296BB',
        base: '#48C3F1',
    },
    background: {
        50: '#f2f2f2',
        100: '#d9d9d9',
        200: '#bfbfbf',
        300: '#a6a6a6',
        400: '#8c8c8c',
        500: '#737373',
        600: '#595959',
        700: '#404040',
        800: '#262626',
        900: '#0d0d0d',

        dimmedBase: '#F5F5F5',
        base: '#FFFFFF',
        // dimmedBase: '#FAFAFA',
        // base: '#FBFBFB',
    },
    onPrimary: {
        50: '#f8f0f2',
        100: '#d9d9d9',
        200: '#bfbfbf',
        300: '#a6a6a6',
        400: '#8c8c8c',
        500: '#737373',
        600: '#595959',
        700: '#404040',
        800: '#262626',
        900: '#120b0d',

        dimmedBase: '#B7B7B7',
        base: '#CFCFCF',
    },
    textColor: {
        50: '#edf3f8',
        100: '#d6d9db',
        200: '#bdc0c2',
        300: '#a3a6a9',
        400: '#888c8f',
        500: '#6f7377',
        600: '#565a5d',
        700: '#3d4042',
        800: '#242729',
        900: '#070e13',

        dimmedBase: '#202326',
        base: '#2E3235',
    },
    secondaryTextColor: {
        50: '#616262',
        100: '#646666',
        200: '#68696A',
        300: '#6B6D6D',
        400: '#6F7071',
        500: '#727475',
        600: '#767779',
        700: '#797B7C',
        800: '#7D7E80',
        900: '#808284',

        dimmedBase: '#616262',
        base: '#808284',
    },
    dividerColor: {
        50: '#f2f2f2',
        100: '#d9d9d9',
        200: '#bfbfbf',
        300: '#a6a6a6',
        400: '#8c8c8c',
        500: '#737373',
        600: '#595959',
        700: '#404040',
        800: '#262626',
        900: '#0d0d0d',

        dimmedBase: '#000000',
        base: '#000000',
    },
};

const snowColorSchemes: ThemeColorScheme = {
    primary: snowColors.primary,
    secondary: snowColors.secondary,
    surface: snowColors.background,
    background: snowColors.background,
    error: snowColors.secondary,
    onPrimary: snowColors.onPrimary,
    onSecondary: snowColors.background,
    onSurface: snowColors.primary,
    onBackground: snowColors.textColor,
    onError: snowColors.background,
    dividerColor: snowColors.dividerColor,
    textColor: snowColors.textColor,
    secondaryTextColor: snowColors.secondaryTextColor,
    // brightness: Brightness.light,
};

export default snowColorSchemes;