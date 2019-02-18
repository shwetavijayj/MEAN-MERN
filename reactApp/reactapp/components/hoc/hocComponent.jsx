import React, { Component } from 'react';

export default function HoC(DataComponent, data) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }
        render() {
            return <DataComponent data={this.state.data} {...this.props} />;
        }
    }
}