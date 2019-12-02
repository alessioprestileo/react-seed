const HeaderStyle = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    textAlign: 'left' as 'left',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  '@global': {
    '*::-webkit-scrollbar': {
      height: 5,
      backgroundColor: '#EDF2F4',
      width: 6,
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#9EAEB4',
      borderRadius: 3,
    },
  },
});

export default HeaderStyle;
