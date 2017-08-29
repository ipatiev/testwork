import React, {Component} from 'react';

class TrackTableFilters extends Component {

    constructor(props) {
        super(props);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
    }

    onChangeArtist(e) {
        this.props.onSelectArtist(e.target.value);
    }

    onChangeGenre(e) {
        this.props.onSelectGenre(e.target.value);
    }

    onChangeYear(e) {
        this.props.onSelectYear(e.target.value);
    }

    render() {

        let createOption = function (item) {
            return <option key={item} value={item}>{item}</option>;
        };

        return (
            <form>
                <select onChange={this.onChangeArtist}>
                    <option value="">Все</option>
                    {this.props.artists.map(createOption)}
                </select>
                <select onChange={this.onChangeGenre}>
                    <option value="">Все</option>
                    {this.props.genres.map(createOption)}
                </select>
                <select onChange={this.onChangeYear}>
                    <option value="">Все</option>
                    {this.props.years.map(createOption)}
                </select>
            </form>
        );
    }
}

export default TrackTableFilters;
