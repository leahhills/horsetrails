import React, {Component} from 'react';
import TrailListItem from '../TrailListItem/TrailListItem';
import HorseTrailRepository from '../../mockApi/HorseTrailRepository';


class TrailList extends Component {
    constructor(){
        super();

        this.trailRepo = HorseTrailRepository();

        this.state = {
            searchValue: '',
            trailList: this.trailRepo.getTrailList()
        }
        this.updateSearchValue = this.updateSearchValue.bind(this);
        this.searchTrails = this.searchTrails.bind(this);
        this.resetTrails = this.resetTrails.bind(this);
    }

    searchTrails = function() {
        this.setState({
            trailList: this.matchingTrail()
        });
    }
//matching trail should be able to take your current search value and return the index of matching trails in the trail list array.
    matchingTrail(){
        return this.state.trailList.filter((trail) => {
            return trail.name.toLowerCase()
                .includes(this.state.searchValue.toLowerCase());
        });
    }

    updateSearchValue(event) {
        this.setState({
            searchValue: event.target.value,
        });
    }

    resetTrails() {
        this.setState({
            searchValue: '',
            trailList: this.trailRepo.getTrailList()
        });
    }


render(){
        var trails = this.state.trailList.map((trail) => {
            return <TrailListItem key={trail.id} trail={trail} />
        });
        return (
            <div>
                <div>
                    <input className="smallMargin" value={this.state.searchValue} onChange={this.updateSearchValue} className="trailSearch" type="text"/>
                    <button className="smallMargin btn btn-info" onClick={this.searchTrails}>Search</button>
                    <button  className="smalMargin btn btn-danger" onClick={this.resetTrails}>Reset List</button>
                </div>
                <ul className="trailList">
                    {trails}
                </ul>
            </div>
        )
    }
}
export default TrailList;

