import React, {Component} from 'react';
import PaginationPage from "./PaginationPage";

class Pagination extends Component {


    constructor() {
        super();
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e)
    {
        this.props.onPageChange = e;
    }

    render() {

        let totalCount = this.props.totalCount,
            itemCountPerPage = this.props.itemCountPerPage,
            currentPage = this.props.currentPage,
            pages = [],
            page = 1,
            maxPage = 0;

        for (let i = 0; i < totalCount; i += itemCountPerPage) {
            pages.push(page++);
            maxPage = page;
        }

        let liArray = pages.map((page) =>
            (<PaginationPage key={page} page={page} onPageChange={this.handlePageChange} currentPage={currentPage}/>));

        return (
            <ul>
                {currentPage > 1 && <li><a href="javascript:void(0)">Prev</a></li>}
                {liArray}
                {currentPage < maxPage && <li><a href="javascript:void(0)">Next</a></li>}
            </ul>
        );
    }
}

export default Pagination;
