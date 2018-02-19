import React, { Component } from 'react';

import cardinal from './images/cardinal-icon.png';

class StreamStatus extends Component {
    constructor(props) {
        super(props);
        this.state = { status: true };
    }
    componentDidMount() {
        var that = this;
        var url = 'https://fvjhtu2lzd.execute-api.us-east-1.amazonaws.com/dev/streamstatus';
        fetch(url).then(
            function(response) {
                response.json().then(function(data) {
                    that.setState({online: data.online});
            });
        }).catch(function(object) {
            console.log('error')
        })
    }

    render() {
        let status = null;
        if(this.state.online)
            status = <span className="badge badge-danger"><i className="fa fa-video-camera" aria-hidden="true"></i> Live</span>
        else
            status =  <span className="badge badge-danger">Offline</span>

        return (
            <ul id="stream-status" className="list-inline" style={{marginBottom: '0px'}}>
                <li className="list-inline-item"><img className="tab-img" height="25" src={cardinal}/>Cam</li>
                <li style={{marginTop: '5px'}} className="list-inline-item pull-right">{status}</li>
            </ul>
        )
    }
}

export default StreamStatus;
