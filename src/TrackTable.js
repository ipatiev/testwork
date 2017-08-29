import React, {Component}   from 'react';
import TrackTableNoResults  from "./TrackTableNoResults";
import TrackTableRow        from "./TrackTableRow";
import TrackTableSortableTh from "./TrackTableSortableTh";

class TrackTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderBy: null,
            orderDirection: false
        };
        this.orderBy = this.orderBy.bind(this);
    }

    orderBy(name) {
        this.setState((prevState) => {

            let orderDirection = (prevState.orderBy === name)
                ? !prevState.orderDirection
                : false;

            this.props.onChangeOrder(name, orderDirection);

            return {
                orderBy: name,
                orderDirection: orderDirection
            };
        });
    }

    render() {

        let rows = this.props.tracks.map((track) => {
            return <TrackTableRow key={track.id} track={track}/>
        });

        if (!rows.length) {
            rows = <TrackTableNoResults/>
        }
        return <table className="table table-bordered table-striped">
            <thead>
            <tr>
                <TrackTableSortableTh name="artist" title="Исполнитель" onClick={this.orderBy}
                                      currentOrderBy={this.state.orderBy}
                                      currentOrderDirection={this.state.orderDirection}/>

                <TrackTableSortableTh name="name" title="Песня" onClick={this.orderBy}
                                      currentOrderBy={this.state.orderBy}
                                      currentOrderDirection={this.state.orderDirection}/>

                <TrackTableSortableTh name="genre" title="Жанр" onClick={this.orderBy}
                                      currentOrderBy={this.state.orderBy}
                                      currentOrderDirection={this.state.orderDirection}/>

                <TrackTableSortableTh name="year" title="Год" onClick={this.orderBy}
                                      currentOrderBy={this.state.orderBy}
                                      currentOrderDirection={this.state.orderDirection}/>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    }
}

export default TrackTable;
