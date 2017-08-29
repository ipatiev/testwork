import React, {Component} from 'react';

class TrackTableCountPerPageLink extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.count);
    }

    render() {

        if (this.props.count === this.props.active) {
            return (
                <li><a className="btn btn-secondary" href="javascript:void(0)" onClick={this.onClick}><b>{this.props.count}</b></a></li>
            );
        }

        return (
            <li><a className="btn btn-secondary" href="javascript:void(0)" onClick={this.onClick}>{this.props.count}</a></li>
        );
    }
}

export default TrackTableCountPerPageLink;
