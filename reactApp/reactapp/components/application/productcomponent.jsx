import React, { Component } from 'react';

class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductId: 0,
            ProductName: "",
            Price: 0,
            CategoryName: "",
            Manufacturer: "",
            Products: [
                {
                    ProductId: 101,
                    ProductName: "Laptop",
                    Price: 120000,
                    CategoryName: "electronics",
                    Manufacturer: "AB Tech"
                }

            ],
            Categories: ["Electronics", "Electrical", "Food"],
            Manufacturers: ["AB Tech", "XY Tech", "CD Power", "Nestle"],
        };

    }

    // componentWillMount() {
    //     this.createHeader(this.state.Products);
    // }
    //e is an event-payload  raised on target element, we can read payload data using 'e'
    onChangeProductId(e) {
        this.setState({ ProductId: e.target.value });

    }
    onChangeProductName(e) {
        this.setState({ ProductName: e.target.value });

    }
    onChangePrice(e) {
        this.setState({ Price: e.target.value });

    }
    onChangeCategoryName(e) {
        this.setState({ CategoryName: e.target.value });

    }
    onChangeManufacturer(e) {
        this.setState({ Manufacturer: e.target.value });

    }
    onClickClear() {
        this.setState({ ProductId: 0 });
        this.setState({ ProductName: "" });
        this.setState({ Price: 0 });
        this.setState({ CategoryName: "" });
        this.setState({ Manufacturer: "" });
    }
    onClickSave() {
        alert(`${this.state.ProductId},${this.state.ProductName},${this.state.Price},${this.state.CategoryName},${this.state.Manufacturer}`);

        //1. get the copy of the Products array using slice()
        let tempArray = this.state.Products.slice();
        //2. push the new record in to the tempArray
        tempArray.push({
            ProductId: this.state.ProductId,
            ProductName: this.state.ProductName,
            Price: this.state.Price,
            CategoryName: this.state.CategoryName,
            Manufacturer: this.state.Manufacturer
        })
        this.setState({ Products: tempArray })
    }
    getSelectedProduct(p) {
        this.setState({
            ProductId: p.ProductId,
            ProductName: p.ProductName,
            Price: p.Price,
            CategoryName: p.CategoryName,
            Manufacturer: p.Manufacturer
        });
    }
    render() {
        return (
            <div className="container bg-light col-md-7">
                <h3 class="text-center">Register Component</h3>
                <hr></hr>
                <div class="form-group">
                    <label htmlFor="ProductId">PrductId</label>
                    <input type="text" className="form-control"
                        value={this.state.ProductId}
                        onChange={this.onChangeProductId.bind(this)}
                    ></input>
                </div>
                <div class="form-group">
                    <label htmlFor="ProductName">PrductName</label>
                    <input type="text" className="form-control"
                        value={this.state.ProductName}
                        onChange={this.onChangeProductName.bind(this)}
                    ></input>
                </div>
                <div class="form-group">
                    <label htmlFor="Price">Price</label>
                    <input type="text" className="form-control"
                        value={this.state.Price}
                        onChange={this.onChangePrice.bind(this)}
                    ></input>
                </div>
                <div class="form-group">
                    <label htmlFor="CategoryName">CategoryName</label>
                    <select className="form-control"
                        value={this.state.CategoryName}
                        onChange={this.onChangeCategoryName.bind(this)}>
                        {
                            this.state.Categories.map((c, i) => (
                                <Options key={i} data={c}></Options>
                            ))
                        }

                    </select>
                </div>
                <div class="form-group">
                    <label htmlFor="Manufacturer">Manufacturer</label>
                    <select className="form-control"
                        value={this.state.Manufacturer}
                        onChange={this.onChangeManufacturer.bind(this)}>
                        {
                            this.state.Manufacturers.map((c, i) => (
                                <Options key={i} data={c}></Options>
                            ))
                        }
                    </select>
                </div>
                <div class="form-group">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <td><input type="button" value="save" className="btn btn-danger"
                                    onClick={this.onClickSave.bind(this)}
                                ></input></td>
                                <td><input type="button" value="Clear" className="btn btn-primary"
                                    onClick={this.onClickClear.bind(this)}
                                ></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                {
                                    Object.keys(this.state.Products[0]).map((thead, idx) => (
                                        <th>{thead}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Products.map((prd, idx) => (
                                    <TableRow key={idx} row={prd}
                                        selected={this.getSelectedProduct.bind(this)} ></TableRow>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

//component that will render <option></option>
//this.props.data is data passed from the parent of this component
class Options extends Component {
    render() {
        return (
            <option value={this.props.data}>
                {this.props.data}
            </option>
        );
    }
}


class TableRow extends Component {
    constructor(props) {
        super(props)
    }
    onRowClick() {
        //alert (`Row clicked ${JSON.stringify(this.props.row)}`);
        // a new selected() method is used to passed received data
        this.props.selected(this.props.row);
    }
    render() {
        return (
            <tr onClick={this.onRowClick.bind(this)}>
                <td>{this.props.row.ProductId}</td>
                <td>{this.props.row.ProductName}</td>
                <td>{this.props.row.Price}</td>
                <td>{this.props.row.CategoryName}</td>
                <td>{this.props.row.Manufacturer}</td>
            </tr>
        );
    }
}

export default ProductComponent;