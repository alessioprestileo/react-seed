import React, { FC } from 'react';
import { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import HeaderStyle from './HeaderStyle';
import SearchBox from '../SearchBox/SearchBox';

interface HeaderProps {
  classes: any;
  searchKey: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { classes } = props;
  return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    Movies List
                    </Typography>
                <SearchBox onChange={() => { }} />
            </Toolbar>
        </AppBar>
  );
};

export default withStyles(HeaderStyle)(Header);
