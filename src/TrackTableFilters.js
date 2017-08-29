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
                <div className="form-group">
                    <label>Исполнитель:</label>
                    <select onChange={this.onChangeArtist} className="form-control">
                        <option value="">Все</option>
                        {this.props.artists.map(createOption)}
                    </select>
                </div>
                <div className="form-group">
                    <label>Жанр:</label>
                    <select onChange={this.onChangeGenre} className="form-control">
                        <option value="">Все</option>
                        {this.props.genres.map(createOption)}
                    </select>
                </div>
                <div className="form-group">
                    <label>Год:</label>
                    <select onChange={this.onChangeYear} className="form-control">
                        <option value="">Все</option>
                        {this.props.years.map(createOption)}
                    </select>
                </div>
            </form>
        );
    }
}

export default TrackTableFilters;
