import React, {Component} from 'react';
import PageLink           from "./PageLink";
import PagePrevLink       from "./PagePrevLink";
import PageNextLink       from "./PageNextLink";

class Pagination extends Component {

    constructor() {
        super();
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e) {
        this.props.onPageChange(e);
    }

    render() {

        let currentPage = this.props.currentPage,
            pages = [],
            page = 1,
            maxPage = 0;

        for (let i = 0; i < this.props.totalCount; i += this.props.itemCountPerPage) {
            pages.push(page);
            maxPage = page;
            page++;
        }

        let pageLinks = pages.map((page) =>
            <PageLink
                key={page}
                page={page}
                isActive={currentPage === page}
                onPageChange={this.handlePageChange}/>)

        if (pages.length <= 1) {
            return null;
        }
        return <ul className="pagination">
            <PagePrevLink page={currentPage} onPageChange={this.handlePageChange}/>
            {pageLinks}
            <PageNextLink page={currentPage} maxPage={maxPage} onPageChange={this.handlePageChange}/>
        </ul>
    }
}

export default Pagination;
