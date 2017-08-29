import React, {Component} from 'react';

class PaginationPageNext extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.page+1);
    }

    render() {
        if (this.props.page >= this.props.maxPage) {
            return null;
        }
        return (<li><a href="javascript:void(0)" onClick={this.handleClick}>Next</a></li>)
    }
}

export default PaginationPageNext;
