import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../react-assets/assets/sb-admin-2.min.css';
import { Link } from 'react-router-dom';

interface MyComponentProps {  }
interface MyComponentState { is_loading : Boolean; users: []; }

class ListView extends React.Component<MyComponentProps, MyComponentState> {

  constructor(props: any) {
    super(props);
    this.state = {
      is_loading: true,
      users: [],
    };
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result =>
      this.setState({ users: result, is_loading: false }),
    );
  }

  componentWillMount() {
    this.setState({ users: [], is_loading: true });
  }

  render() {
    return (<div className="Container">
    <h2>User List</h2>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Sl.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
          <th>Website</th>
          <th>Company</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          this.state.users.length > 0 ? this.state.users.map((user : any, index : number) =>

            <tr key={ `${index}_${user.name}` }>
              <td>{ index + 1 }</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>
                <Link to={ `/user-detail/${user.id}` } className="btn btn-success btn-circle">
                <i className="fa fa-eye"></i>
                </Link>
              </td>
            </tr>,
          ) : <tr>
              <td style={{ textAlign: 'center' }} colSpan={7}>Loading...</td>
            </tr>
        }
      </tbody>
    </table>
  </div>);
  }
}

export default ListView;
