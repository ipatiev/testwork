import React, {Component} from 'react';

class PagePrevLink extends Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onPageChange(this.props.page - 1);
    }

    render() {
        if (this.props.page <= 1) {
            return null;
        }
        return <li className="page-item">
            <a className="page-link" href="javascript:void(0)" onClick={this.onClick}>
                &laquo;
            </a>
        </li>
    }
}

export default PagePrevLink;
