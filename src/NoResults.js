import React, {Component} from 'react';

class TrackTableNoResults extends Component {

    render() {
        return (
            <tr>
                <td colSpan="4">Нет результатов</td>
            </tr>
        );
    }
}

export default TrackTableNoResults;
