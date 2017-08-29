import React, {Component} from 'react';
import TrackListRow from "./TrackListRow";
import TrackTableNoResults from "./NoResults";

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

        let rows = this.props.tracks.map((track) => {
            return (<TrackListRow key={track.id} track={track}/>);
        });

        if (!rows.length) {
            rows = (<TrackTableNoResults/>);
        }
        return (

            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th><a href="javascript:void(0);" onClick={this.orderByArtist}>Исполнитель</a></th>
                    <th><a href="javascript:void(0);" onClick={this.orderByName}>Песня</a></th>
                    <th><a href="javascript:void(0);" onClick={this.orderByGenre}>Жанр</a></th>
                    <th><a href="javascript:void(0);" onClick={this.orderByYear}>Год</a></th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default TrackTable;
