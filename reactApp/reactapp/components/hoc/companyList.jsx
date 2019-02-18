import React, { Component } from 'react';
import { TableRowComponent } from './tableRowComponent.jsx';

class CompanyListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((v, i) => (
                            <TableRowComponent key={i} rec={v} />
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default CompanyListComponent;