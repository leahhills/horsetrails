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
            <p>{this.props.trail.name}</p>
            <p>{this.props.trail.description}</p>
            <p>{this.props.trail.location}</p>
            </li>
        )
        return listItem;
    }
}


export default TrailListItem;