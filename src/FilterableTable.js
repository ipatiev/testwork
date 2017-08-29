import React, {Component} from 'react';
import './App.css';
import TrackListTable from "./TrackListTable";
import FilterForm from "./FilterForm";
import Pagination from "./Pagination";

class FilterableTable extends Component {

    itemCountPerPage = 5;

    constructor(props) {
        super(props);
        this.onArtistChange = this.onArtistChange.bind(this);
        this.onGenreChange = this.onGenreChange.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
    }

    onArtistChange(artist)
    {
        this.setState({
            artist: artist
        });
    }

    onGenreChange(genre)
    {
        this.setState({
            genre: genre
        });
    }

    onYearChange(year)
    {
        this.setState({
            year: year
        });
    }

    render() {

        let tracks = this.props.tracks;

        if (this.state) {
            if (this.state.artist) {
                tracks = this.props.tracks.filter((item) => item.artist === this.state.artist);
            }
            if (this.state.genre) {
                tracks = this.props.tracks.filter((item) => item.genre === this.state.genre);
            }
            if (this.state.year) {
                tracks = this.props.tracks.filter((item) => item.year === this.state.year);
            }
        }

        let artistList = ['Test 1', 'Test 2'],
            genreList = ['Test 1', 'Test 2'],
            yearList = ['Test 1', 'Test 2'];

        return (
            <div className="App">
                <FilterForm
                    artistList={artistList}
                    onArtistChange={this.onArtistChange}
                    genreList={genreList}
                    onGenreChange={this.onGenreChange}
                    yearList={yearList}
                    onYearChange={this.onYearChange}/>
                <TrackListTable tracks={tracks} />
                <Pagination itemCountPerPage={this.itemCountPerPage} totalCount={tracks.length} />
            </div>
        );
    }
}

export default FilterableTable;
