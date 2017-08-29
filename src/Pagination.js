import React, {Component} from 'react';
import PaginationPage from "./PaginationPage";

class Pagination extends Component {


    constructor() {
        super();
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e)
    {
        console.log(e);
    }

    render() {

        let totalCount = this.props.totalCount,
            itemCountPerPage = this.props.itemCountPerPage,
            pages = [],
            page = 1;

        for (let i = 0; i < totalCount; i += itemCountPerPage) {
            pages.push(page++);
        }

        let liArray = pages.map((page) =>
            (<PaginationPage key={page} page={page} onPageChange={this.handlePageChange}/>));

        return (
            <ul>{liArray}</ul>
        );
    }
}

export default Pagination;
