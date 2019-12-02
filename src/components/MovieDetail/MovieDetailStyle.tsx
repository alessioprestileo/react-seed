const MovieDetailStyle = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  titleContainer: {
    minHeight: 180,
    backgroundSize: 'cover' as 'cover',
    color: theme.palette.common.white,
    position: 'relative' as 'relative',
    padding: 0,
    '& img': {
      width: '100%',
    },
  },
  titleBar: {
    top: 0,
    left: 0,
    right: 0,
    height: 48,
    display: 'flex',
    position: 'absolute' as 'absolute',
    background: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    padding: '0 16px',
  },
  btnClose: {
    color: theme.palette.common.white,
  },
  loader: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.white,
    minHeight: 100,
    minWidth: 100,
  },
});

export default MovieDetailStyle;
