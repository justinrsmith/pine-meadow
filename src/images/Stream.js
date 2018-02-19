import React, { Component } from 'react';

class Stream extends Component {
    render () {
        return (
            <div class="col">
                <ul id="stream-status" class="list-inline" style={{marginBottom: '0px'}}>
                    <li class="list-inline-item"><img class="tab-img" height="25" src={cardinal}/>Cam</li>
                    <li style={{marginTop: '5px'}} class="list-inline-item pull-right"><span class="badge badge-danger"><i class="fa fa-video-camera" aria-hidden="true"></i> Live</span></li>
                </ul>
                <img class="img-fluid" src="http://73.74.197.134:48461/" alt=""/>
            </div>
        )
    }
}

export default Stream;
