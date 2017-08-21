import React, {Component} from 'react'

class TrailListItem extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    
    render(){
        var listItem = (
            <li className="trailListItem">
            <p>Trail Name: {this.props.trail.name}</p>
            <p>Trail Description: {this.props.trail.description}</p>
            <p>Trail Location: {this.props.trail.location}</p>
            </li>
        )
        return listItem;
    }
}


export default TrailListItem;