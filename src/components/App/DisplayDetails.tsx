import * as React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

interface Props {
  showModal:boolean;
  movieDetails:object;
  handleClose: Function;
}

interface State {
  openModal : boolean;
}

export default class DisplayDetails extends React.Component<Props, State> {

  state: State = {
    openModal:true,
  };

  render () {
    return (
      <div>
        <Dialog  scroll={'body'} fullWidth={true} onClose={this.props.handleClose} 
        aria-labelledby="simple-dialog-title"
         open={this.props.showModal}>
          <DialogTitle id="simple-dialog-title">Movie Details</DialogTitle>
          <span><label>Director</label>:{this.props.movieDetails.Director}</span>
          <span><label>Actors</label>:{this.props.movieDetails.Actors}</span>
          <span><label>Release Year</label>:{this.props.movieDetails.Year}</span>
        </Dialog>
      </div>
    );
  }
}
