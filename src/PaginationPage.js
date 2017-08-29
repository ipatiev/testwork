import React, {Component} from 'react';

class PaginationPage extends Component {

    constructor() {
        super();
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange() {
        this.props.onPageChange(this.props.page);
    }

    render() {
        if (this.props.isActive) {
            return (
                <li><a href="javascript:void(0)" onClick={this.handlePageChange}><b>{this.props.page}</b></a></li>
            )
        } else {
            return (
                <li><a href="javascript:void(0)" onClick={this.handlePageChange}>{this.props.page}</a></li>
            )
        }
    }
}

export default PaginationPage;
