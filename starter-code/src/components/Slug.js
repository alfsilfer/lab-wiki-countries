import React from 'react';
//import './Slug.css';
import { Link } from 'react-router-dom';

class Slug extends React.Component {

    render() {
        return (
            <div className="slug list-group-item list-group-item-action">
                <Link to={`/countrydetail/${this.props.cca3}`} style={{textDecoration:'none'}} style={{color:'black'}}>
                    <div className="slug-container">
                        <span className="mr-4" >{this.props.flag}</span>
                        {this.props.name.common}
                    </div>

                </Link>
            </div>
        )
    }
}

export default Slug;