import React, {Component} from 'react';
import './App.css';
import Pagination from "./Pagination/Pagination";
import TrackTableFilters from "./TrackTableFilters";
import TrackTable from "./TrackTable";

class TracksPage extends Component {

    itemCountPerPage = 20;

    constructor(props) {
        super(props);

        this.state = {
            orderBy: '',
            artist: null,
            genre: null,
            year: null,
            page: 1
        };

        this.onSelectArtist = this.onSelectArtist.bind(this);
        this.onSelectGenre = this.onSelectGenre.bind(this);
        this.onSelectYear = this.onSelectYear.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
    }

    onSelectArtist(artist)
    {
        this.setState({
            artist: artist
        });
    }

    onSelectGenre(genre)
    {
        this.setState({
            genre: genre
        });
    }

    onSelectYear(year)
    {
        this.setState({
            year: year
        });
    }

    onPageChange(page)
    {
        this.setState({
            page: page
        });
    }

    render() {

        let tracks = this.props.tracks;

        // if (this.state) {
        //     if (this.state.artist) {
        //         tracks = this.props.tracks.filter((item) => item.artist === this.state.artist);
        //     }
        //     if (this.state.genre) {
        //         tracks = this.props.tracks.filter((item) => item.genre === this.state.genre);
        //     }
        //     if (this.state.year) {
        //         tracks = this.props.tracks.filter((item) => item.year === this.state.year);
        //     }
        // }

        let paginatedTracks = tracks.slice(
            this.itemCountPerPage * this.state.page,
            this.itemCountPerPage * this.state.page + this.itemCountPerPage
        );

        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-10">
                        <TrackTable tracks={paginatedTracks} />
                    </div>
                    <div className="col-md-2">
                        <TrackTableFilters
                            artists={this.props.artists}
                            onSelectArtist={this.onSelectArtist}
                            genres={this.props.genres}
                            onSelectGenre={this.onSelectGenre}
                            years={this.props.years}
                            onSelectYear={this.onSelectYear}/>
                    </div>
                </div>
                <Pagination itemCountPerPage={this.itemCountPerPage} totalCount={tracks.length}
                            currentPage={this.state.page} onPageChange={this.onPageChange} />
            </div>
        );
    }
}

export default TracksPage;
