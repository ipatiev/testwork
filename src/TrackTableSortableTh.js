import React, {Component} from 'react';

class TrackTableRow extends Component {
    render() {

        return (
            <th><a href="javascript:void(0);" onClick={this.orderByArtist}>{this.props.title}</a></th>
        );
    }
}

export default TrackTableRow;
