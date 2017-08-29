import React, {Component} from 'react';

class PageLink extends Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onPageChange(this.props.page);
    }

    render() {
        if (this.props.isActive) {
            return (
                <li className="page-item">
                    <a className="page-link" href="javascript:void(0)" onClick={this.onClick}>
                        <b>{this.props.page}</b>
                    </a>
                </li>
            )
        } else {
            return (
                <li className="page-item">
                    <a className="page-link" href="javascript:void(0)" onClick={this.onClick}>
                        {this.props.page}
                    </a>
                </li>
            )
        }
    }
}

export default PageLink;
