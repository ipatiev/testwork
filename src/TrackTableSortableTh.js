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
                    <th><a href="javascript:void(0);" onClick={this.onClick}>{this.props.title} <img src="img/sort_asc.png" /></a></th>
                );
            } else {
                return (
                    <th><a href="javascript:void(0);" onClick={this.onClick}>{this.props.title} <img src="img/sort_desc.png" /></a></th>
                );
            }
        }
        return (
            <th><a href="javascript:void(0);" onClick={this.onClick}>{this.props.title}</a> <img src="img/sort_both.png" /></th>
        );
    }
}

export default TrackTableSortableTh;
