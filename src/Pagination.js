import React, {Component} from 'react';
import PaginationPage from "./PaginationPage";
import PaginationPagePrev from "./PaginationPagePrev";
import PaginationPageNext from "./PaginationPageNext";

class Pagination extends Component {


    constructor() {
        super();
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e)
    {
        this.props.onPageChange(e);
    }

    handleNext(e)
    {
        this.props.onPageChange(1);
    }

    handlePrev(e)
    {
        this.props.onPageChange(e);
    }

    render() {

        let totalCount = this.props.totalCount,
            itemCountPerPage = this.props.itemCountPerPage,
            currentPage = this.props.currentPage,
            pages = [],
            page = 1,
            maxPage = 0;

        for (let i = 0; i < totalCount; i += itemCountPerPage) {
            pages.push(page);
            maxPage = page;
            page++;
        }

        let liArray = pages.map((page) =>
            (<PaginationPage key={page} page={page} onPageChange={this.handlePageChange} isActive={currentPage === page}/>));

        return (
            <ul>
                <PaginationPagePrev page={currentPage} onClick={this.handlePageChange} />
                {liArray}
                <PaginationPageNext page={currentPage} maxPage={maxPage} onClick={this.handlePageChange}/>
            </ul>
        );
    }
}

export default Pagination;
