import React, {Component} from 'react';

class TrackTableRow extends Component {
    render() {

        return (
            <tr>
                <td>{this.props.track.artist}</td>
                <td>{this.props.track.name}</td>
                <td>{this.props.track.genre}</td>
                <td>{this.props.track.year}</td>
            </tr>
        );
    }
}

export default TrackTableRow;
