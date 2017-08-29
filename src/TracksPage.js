import React, {Component} from 'react';
import './App.css';
import Pagination from "./Pagination/Pagination";
import TrackTableFilters from "./TrackTableFilters";
import TrackTable from "./TrackTable";

class TracksPage extends Component {

    itemCountPerPage = 10;

    sortMethod = {
        name: "alphabetically",
        artist: "alphabetically",
        genre: "alphabetically",
        year: "numeric"
    };

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
        this.onChangeOrder = this.onChangeOrder.bind(this);
    }

    onSelectArtist(artist) {
        this.setState({
            artist: artist,
            page: 1
        });
    }

    onSelectGenre(genre) {
        this.setState({
            genre: genre,
            page: 1
        });
    }

    onSelectYear(year) {
        this.setState({
            year: year,
            page: 1
        });
    }

    onPageChange(page) {
        this.setState({
            page: page
        });
    }

    onChangeOrder(name, direction)
    {
        this.setState({
            orderBy: name,
            orderDirection: direction
        });
    }

    render() {

        let tracks = this.props.tracks;

        if (this.state) {
            if (this.state.artist) {
                tracks = tracks.filter((item) => item.artist === this.state.artist);
            }
            if (this.state.genre) {
                tracks = tracks.filter((item) => item.genre === this.state.genre);
            }
            if (this.state.year) {
                tracks = tracks.filter((item) => item.year === this.state.year);
            }
        }

        if (this.state.orderBy) {
            tracks = this.sortArrayBy(
                tracks,
                this.state.orderBy,
                this.state.orderDirection,
                (this.sortMethod[this.state.orderBy] === 'numeric'));
        }

        let paginatedTracks = tracks.slice(
            this.itemCountPerPage * this.state.page - this.itemCountPerPage,
            this.itemCountPerPage * this.state.page
        );

        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-10">
                        <TrackTable tracks={paginatedTracks} onChangeOrder={this.onChangeOrder}/>
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
                            currentPage={this.state.page} onPageChange={this.onPageChange}/>
            </div>
        );
    }

    /**
     * Sort array by key
     * @param {Array} array
     * @param {String} key
     * @param {Boolean} isReverse
     * @param {Boolean} isNumeric (or alphabetically)
     * @returns {Array}
     */
    sortArrayBy(array, key, isReverse, isNumeric) {
        if (isNumeric) {
            array = array.sort((a, b) => (a.year - b.year))
        } else {
            array = array.sort((a, b) => {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            })
        }
        return (isReverse) ? array.reverse() : array;
    }
}

export default TracksPage;
