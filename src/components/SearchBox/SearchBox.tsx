import React, { FC } from 'react';
import { withStyles, Grid, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import SearchBoxStyle from './SearchBoxStyle';

interface SearchBoxProps {
  classes: any;
  onChange: any;
}

const SearchBox: FC<SearchBoxProps> = (props) => {
  const { classes, onChange } = props;
  return (
    <Grid className={classes.search}>
      <Grid className={classes.searchIcon}>
        <Search />
      </Grid>
      <InputBase onChange={(event) => {
        onChange(event.target.value);
      }}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Grid>
  );
};

export default withStyles(SearchBoxStyle)(SearchBox);
