import React, {Component} from 'react';

class PageNextLink extends Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onPageChange(this.props.page + 1);
    }

    render() {
        if (this.props.page >= this.props.maxPage) {
            return null;
        }
        return <li className="page-item">
            <a className="page-link" href="javascript:void(0)" onClick={this.onClick}>
                &raquo;
            </a>
        </li>
    }
}

export default PageNextLink;
