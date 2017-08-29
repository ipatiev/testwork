import React, {Component} from 'react';
import TrackTableCountPerPageLink from "./TrackTableCountPerPageLink";

class TrackTableCountPerPage extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(count) {
        this.props.onChange(count);
    }

    render() {

        return (
            <ul className="count-per-page">
                <TrackTableCountPerPageLink count="10" onClick={this.onClick} active={this.props.active}/>
                <TrackTableCountPerPageLink count="25" onClick={this.onClick} active={this.props.active}/>
                <TrackTableCountPerPageLink count="50" onClick={this.onClick} active={this.props.active}/>
                <TrackTableCountPerPageLink count="100" onClick={this.onClick} active={this.props.active}/>
            </ul>
        );
    }
}

export default TrackTableCountPerPage;
