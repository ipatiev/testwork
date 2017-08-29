import React, {Component} from 'react';

class TrackTableNoResults extends Component {

    render() {
        return <tr>
            <td colSpan="4">
                <div className="alert alert-warning">
                    Нет результатов
                </div>
            </td>
        </tr>
    }
}

export default TrackTableNoResults;
