import React, { Component } from 'react';
import './NavBar.css'

import cardinal from './images/cardinal-icon.png';
import cat from './images/cat-icon.png';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <a className="navbar-brand" href="/"><i className="fa fa-home" aria-hidden="true"></i> Pine Meadow</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link"><img alt="cardinal camera logo" className="nav-img" height="25" src={cardinal}/>Cam</a>
                        </li>
                        <li className="nav-item disabled">
                            <a className="nav-link"><img alt="cat camera logo" style={{marginRight: '5px', marginBottom: '4px'}} className="nav-img" height="20" width="20" src={cat}/>Cam - Coming Soon</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;
