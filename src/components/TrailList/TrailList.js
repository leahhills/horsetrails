import React, {Component} from 'react';
import TrailListItem from "../TrailListItem/TrailListItem"

class TrailList extends Component {
    constructor(){
        super();

        this.state = {
            trailList: [
                {
                    id: 1,
                    name:"trail",
                    description:"Easy",
                    location:"Zions National Park"
                },
                {
                    id: 2,
                    name:"Awesome Trail",
                    description:"Medium",
                    location:"Antelope Island"
                    
                }
            ] 
        }
       
    }




render(){
        var trails = this.state.trailList.map((trail) => {
            return <TrailListItem key={trail.id} trail={trail} />
        });
        return <ul className="trailList">{trails}</ul>
    }
}
export default TrailList;

