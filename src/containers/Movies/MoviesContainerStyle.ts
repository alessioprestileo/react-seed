const MoviesContainerStyle = (theme: any) => ({
  root: {
    flexGrow: 1,
    position: 'relative' as 'relative',
  },
  loadingContainer: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.common.white,
  },
  loader: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.white,
    height: '100vh',
  },
});

export default MoviesContainerStyle;
