import React, {Component} from 'react';

class TrackTableSortableTh extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.name);
    }

    render() {

        if (this.props.currentOrderBy === this.props.name) {
            if (this.props.currentOrderDirection) {
                return (
                    <th><a href="javascript:void(0);" onClick={this.onClick}>{this.props.title} (+)</a></th>
                );
            } else {
                return (
                    <th><a href="javascript:void(0);" onClick={this.onClick}>{this.props.title} (-)</a></th>
                );
            }
        }
        return (
            <th><a href="javascript:void(0);" onClick={this.onClick}>{this.props.title}</a></th>
        );
    }
}

export default TrackTableSortableTh;
