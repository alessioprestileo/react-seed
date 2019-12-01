import { createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#F44436',
      dark: '#82AEC1',
      light: '#ddd',
    },
    secondary: {
      main: '#EDF2F4',
      dark: '#82AEC1',
      light: '#ddd',
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: 13,
      },
    },
    MuiTypography: {
      root: {
        fontSize: 13,
      },
      overline: {
        lineHeight: 1.5,
      },
    },
    MuiDialog: {
      paperWidthSm: {
        minWidth: 600,
        minHeight: 500,
      },
    },
    MuiDialogContent: {
      root: {
        padding: 16,
        paddingTop: 0,
      },
    },
    MuiTableCell: {
      root: {
        border: 'none !important',
        padding: 8,
        '& p': {
          textAlign: 'justify' as 'justify',
        },
      },
    },
  },
});

export default appTheme;
