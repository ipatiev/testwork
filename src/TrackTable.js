import React, {Component} from 'react';
import TrackListRow from "./TrackListRow";

class TrackTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderBy: '',
            artist: null,
            genre: null,
            year: null
        };

        this.orderByArtist = this.orderByArtist.bind(this);
        this.orderByName = this.orderByName.bind(this);
        this.orderByGenre = this.orderByGenre.bind(this);
        this.orderByYear = this.orderByYear.bind(this);
    }

    orderByArtist() {
        this.setState((prev) => ({orderBy: 'artist', orderByA: prev}))
    }

    orderByName() {
        this.setState({orderBy: 'name'})
    }

    orderByGenre() {
        this.setState({orderBy: 'genre'})
    }

    orderByYear() {
        this.setState({orderBy: 'year'})
    }

    render() {

        let tracks = this.props.tracks;

        if (this.state.orderBy) {
            if (this.state.orderBy === 'year') {
                tracks = tracks.sort((a, b) => (a.year - b.year))
            } else {
                let key = this.state.orderBy;
                tracks = tracks.sort((a, b) => {
                    if (a[key] < b[key]) return -1;
                    if (a[key] > b[key]) return 1;
                    return 0;
                })
            }
        }

        let rows = tracks.map((track) => {
            return (<TrackListRow key={track.id} track={track}/>);
        });

        return (

            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th><a href="javascript:void(0);" onClick={ this.orderByArtist }>Исполнитель</a></th>
                    <th><a href="javascript:void(0);" onClick={ this.orderByName }>Песня</a></th>
                    <th><a href="javascript:void(0);" onClick={ this.orderByGenre }>Жанр</a></th>
                    <th><a href="javascript:void(0);" onClick={ this.orderByYear }>Год</a></th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default TrackTable;
