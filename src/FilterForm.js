import React, {Component} from 'react';

class FilterForm extends Component {

    constructor(props) {
        super(props);
        this.handleFilterArtist = this.handleFilterArtist.bind(this);
        this.handleFilterGenre = this.handleFilterGenre.bind(this);
        this.handleFilterYear = this.handleFilterYear.bind(this);
    }

    handleFilterArtist(e) {
        this.props.onArtistChange(e.target.value);
    }

    handleFilterGenre(e) {
        this.props.onGenreChange(e.target.value);
    }

    handleFilterYear(e) {
        this.props.onYearChange(e.target.value);
    }

    render() {

        let createOption = function (item) {
            return <option key={item} value={item}>{item}</option>;
        };

        return (
            <form>
                <select onChange={this.handleFilterArtist}>
                    <option value="">Все</option>
                    {this.props.artistList.map(createOption)}
                </select>
                <select onChange={this.handleFilterGenre}>
                    <option value="">Все</option>
                    {this.props.genreList.map(createOption)}
                </select>
                <select onChange={this.handleFilterYear}>
                    <option value="">Все</option>
                    {this.props.yearList.map(createOption)}
                </select>
            </form>
        );
    }
}

export default FilterForm;
