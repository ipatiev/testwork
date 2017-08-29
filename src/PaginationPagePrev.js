import React, {Component} from 'react';

class PaginationPagePrev extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.page-1);
    }

    render() {
        if (this.props.page <= 1) {
            return null;
        }
        return (<li><a href="javascript:void(0)" onClick={this.handleClick}>Prev</a></li>)
    }
}

export default PaginationPagePrev;
