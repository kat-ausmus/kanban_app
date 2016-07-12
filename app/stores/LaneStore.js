import uuid from 'node-uuid';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';

class LaneStore {
  constructor() {
    this.bindActions(LaneActions);
    
    this.lanes = [];
  }

  create( lane ) {
    const lanes = this.lanes;

    lane.id = uuid.v4();

    // If `notes` aren't privided for some reason;
    // default is empty array
    lane.notes = lane.notes || [];

    this.setState({
      lanes: lanes.concat(lane)
    });
  }
}

export default alt.createStore(LaneStore, 'LaneStore');
