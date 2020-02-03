import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

interface MyComponentProps {
  /* declare your component's props here */
}
interface MyComponentState {
  is_loading: Boolean;
  id: Number;
  user: {
    name: String,
    email: String,
    phone: String,
    website: String,
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
    },
    company: {
      name: String,
      catchPhrase: String,
      bs: String,
    },
  };
}

class ListView extends React.Component<MyComponentProps, MyComponentState> {
  constructor(props: any) {
    super(props);

    const QueryParam = location.pathname.split('/');

    this.state = {
      is_loading: true,
      user: {
        name: '',
        email: '',
        phone: '',
        website: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
        },
        company: {
          name: '',
          catchPhrase: '',
          bs: '',
        },
      },
      id: parseInt(QueryParam[QueryParam.length - 1], 20),
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(response => response.json())
      .then(result => this.setState({ user: result, is_loading: false }));
  }

  componentWillMount() {
    this.setState({
      user: {
        name: '',
        email: '',
        phone: '',
        website: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
        },
        company: {
          name: '',
          catchPhrase: '',
          bs: '',
        },
      },
      is_loading: true,
    });
  }

  render() {
    return (
      <div className="Container-fluid">
        <div className="col-md-6 offset-md-3">
          <div className="card mb-4">
            <div className="card-header">
              User Detail
              <Link
                to="/"
                className="btn btn-success btn-icon-split custom-button"
                style={{ float: 'right' }}
              >
                <span className="icon text-white-50">
                  <i className="fa fa-arrow-left" />
                </span>
                <span className="text">Go Back</span>
              </Link>
            </div>
            <div className="card-body">
              <h2 className="card-title" />
              {!this.state.is_loading ? (
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <img
                      src="../../react-assets/assets/avatar.png"
                      alt=""
                      className="img-rounded img-responsive"
                    />
                  </div>
                  <div className="col-sm-6 col-md-8">
                    <h4>{this.state.user.name}</h4>
                    <small>
                      <cite>
                        {`${this.state.user.address.street}, ${
                          this.state.user.address.suite
                        }, ${this.state.user.address.city}, ${
                          this.state.user.address.zipcode
                        }`}
                        <i className="glyphicon glyphicon-map-marker" />
                      </cite>
                    </small>
                    <p>
                      <i className="glyphicon glyphicon-envelope" />
                      {this.state.user.email}
                      <br />
                      <i className="glyphicon glyphicon-globe" />
                      <a target="_blank" href={`${this.state.user.website}`}>
                        {this.state.user.website}
                      </a>
                      <br />
                      <i className="glyphicon glyphicon-phone" />
                      {this.state.user.phone}
                      <br />
                      <b>Company Name: </b>
                      {this.state.user.company.name}
                      <br />
                      <b>Catch Pharse: </b>
                      {this.state.user.company.catchPhrase}
                      <br />
                      <b>BS: </b>
                      {this.state.user.company.bs}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <img
                      src="../../react-assets/assets/avatar.png"
                      alt=""
                      className="img-rounded img-responsive"
                    />
                  </div>
                  <div className="col-sm-6 col-md-8">
                    <h4>Loading...</h4>
                    <small>
                      <cite title="Loading...">
                        Loading...
                        <i className="glyphicon glyphicon-map-marker" />
                      </cite>
                    </small>
                    <p>
                      <i className="glyphicon glyphicon-envelope" />Loading...
                      <br />
                      <i className="glyphicon glyphicon-globe" />
                      <a href="Loading...">Loading...</a>
                      <br />
                      <i className="glyphicon glyphicon-phone" />Loading...
                      <br />
                      <b>Company Name: </b>Loading...
                      <br />
                      <b>Catch Pharse: </b>Loading...
                      <br />
                      <b>BS: </b>Loading...
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListView;
