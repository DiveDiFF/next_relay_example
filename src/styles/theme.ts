import { createTheme } from '@mui/material/styles';

export const Colors = {
  grey: {
    50: "#f3f3f3",
    100: "#e6e6e6",
    300: "#bfbfbf",
    500: "#9e9e9e",
    700: "#666666",
    900: "#212121",
  },
  white: "#ffffff",
  black: "#000000",
  blue: {
    400: "#8183ff",
    500: "#4c4fff",
    600: "#3537b3",
  },
  red: {
    400: "#ff6d78",
    500: "#ff2f3e",
    600: "#cc2632",
    800: "#E20787",
  },
  yellow: {
    400: "#fcd63c",
    500: "#fbc400",
    600: "#d6a700",
  },
  green: {
    400: "#5aebb3",
    500: "#14e293",
    600: "#10b576",
  },
  chip: {
    1: "#E20787",
    2: "#AE348F",
    3: "#69217E",
    4: "#393B8F",
    5: "#0061AC",
    6: "#0590C6",
    7: "#34B7E8",
    8: "#119AAC",
    9: "#02A886",
    10: "#7BBE3E",
    11: "#D4D012",
    12: "#FABA26",
    13: "#F6943E",
    14: "#DD5F36",
    15: "#E83737",
    16: "#BA0E50",
    17: "#F06C94",
    18: "#A290CC",
    19: "#001C56",
    20: "#094854",
    21: "#546C11",
    22: "#897D6D",
    23: "#C3B9B6",
    24: "#42513C",
    25: "#07B3C6",
    26: "#7C4201",
  },
};
const theme = createTheme({
  palette: {
    background: { default: Colors.grey["50"], paper: Colors.white },
    primary: {
      dark: Colors.blue["600"],
      main: Colors.blue["500"],
      light: Colors.blue["400"],
      contrastText: Colors.white,
    },
    secondary: {
      dark: Colors.green["600"],
      main: Colors.green["500"],
      light: Colors.green["400"],
      contrastText: Colors.white,
    },
    grey: Colors.grey,
    text: {
      primary: Colors.grey["900"],
      secondary: Colors.grey["700"],
      disabled: Colors.grey["700"],
    },
    error: {
      dark: Colors.red["600"],
      main: Colors.red["500"],
      light: Colors.red["400"],
    },
    warning: {
      dark: Colors.yellow["600"],
      main: Colors.yellow["500"],
      light: Colors.yellow["400"],
    },
    divider: Colors.grey["300"],
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: 96,
      fontWeight: 300,
      letterSpacing: "-1.5px",
      lineHeight: "112px",
    },
    h2: {
      fontSize: 60,
      fontWeight: 300,
      letterSpacing: "-0.5px",
      lineHeight: "72px",
    },
    h3: {
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: "0px",
      lineHeight: "56px",
    },
    h4: {
      fontSize: 25,
      fontWeight: 800,
      letterSpacing: "0.25px",
      lineHeight: "31px",
    },
    h5: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: "0px",
      lineHeight: "27px",
    },
    h6: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "0.15px",
      lineHeight: "29px",
    },
    subtitle1: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "0.15px",
      lineHeight: "26px",
    },
    subtitle2: {
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: "0.15px",
      lineHeight: "24px",
    },
    body1: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: "0.15px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: "0.15px",
      lineHeight: "21px",
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: "0.4px",
      lineHeight: "24px",
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: "0.4px",
      lineHeight: "20px",
    },
    overline: {
      fontSize: 10,
      fontWeight: 400,
      letterSpacing: "1px",
      lineHeight: "14px",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: "large" },
          style: {
            height: "42px",
            fontSize: "15px",
            fontWeight: 600,
            lineHeight: "26px",
            letterSpacing: "0.46px",
          },
        },
        {
          props: { size: "medium" },
          style: {
            height: "36px",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "0.4px",
          },
        },
        {
          props: { size: "small" },
          style: {
            height: "30px",
            fontSize: "13px",
            fontWeight: 600,
            lineHeight: "22px",
            letterSpacing: "0.46px",
          },
        },
      ],
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          minHeight: 80,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "15px",
          fontWeight: 400,
        },
        notchedOutline: {
          borderColor: Colors.grey["300"],
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "15px",
          fontWeight: 400,
        },
      },
    },
    MuiInputLabel: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            color: Colors.grey["500"],
            fontSize: "15px",
            fontWeight: 400,
          },
        },
        {
          props: { variant: "standard" },
          style: {
            fontSize: "14px",
            fontWeight: 600,
            color: Colors.grey["300"],
            // transform: 'translate(0px, -6px) scale(1)',
          },
        },
      ],
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: "8px",
          paddingBottom: "8px",
          fontSize: "14px",
          fontWeight: 400,
          letterSpacing: "0.17px",
          lineHeight: "20px",
          color: Colors.grey["900"],
        },
      },
    },
  },
});

export default theme;
