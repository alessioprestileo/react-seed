import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
type BreadCrumbItem = {
  name : string;
  url : string;
};

class BreadCrumb extends React.Component <any>{
  renderList = (item:BreadCrumbItem) => {
    return(
        <span>
          <span className="bradcrumb-content"> > </span>
          <span className="bradcrumb-content">
            {item.url ?
            <Link to={item.url} className="breadcrumb-link">{item.name}</Link> :
             <span className="breadcrumb-link">{item.name}</span>
            }
          </span>
        </span>
    );
  }
  renderBreadcrumb = () => {
    console.log('this', this.props);
    const { breadcrumbList } = this.props;
    return(
        <div className="breadcrumb-container">
            <span className="bradcrumb-content">
                <Link to="/" className="breadcrumb-link">Home</Link>
            </span>
           {breadcrumbList.map(this.renderList)}
        </div>
    );
  }

  render() {
    return (
        <div className="breadcrumb-wrapper">
          {this.renderBreadcrumb()}
        </div>
    );
  }
}

export default BreadCrumb;
export { BreadCrumb };
