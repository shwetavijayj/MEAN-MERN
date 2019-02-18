import React, { Component } from 'react';
import ProductService from "./../../services/service.js"
class ProductUIComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            ProductId: 0,
            ProductName: "",
            price: 0,
            CategoryName: "",
            manufacturer: "",
            criteria1: "",
            Products: [
                {
                    ProductId: 101,
                    ProductName: "Laptop",
                    price: 120000,
                    CategoryName: "electronics",
                    manufacturer: "AB Tech"
                }

            ],
            Categories: ["Electronics", "Electrical", "Food"],
            Manufacturers: ["AB Tech", "XY Tech", "CD Power", "Nestle"],
            criteria: ["Product Name", "Category Name"],
            retValrev: false,
            retValsort: true
        };
        this.serv = new ProductService();
    }


    // method will be executed immediately after the render() completes its job
    componentDidMount() {
        let prds = this.serv.getData()
            .then((data) => data.json())
            .then((value) => {
                this.setState({ Products: value.data });
                console.log(JSON.stringify(value));
            })
            .catch(error => {
                console.log(`Error occured ${error.status}`);
            });
    }
    //e is an event-payload  raised on target element, we can read payload data using 'e'
    onChangeProduct(e) {
        this.setState({ [e.target.name]: e.target.value });

    }

    onClickClear() {
        this.setState({ ProductId: 0 });
        this.setState({ ProductName: "" });
        this.setState({ price: 0 });
        this.setState({ CategoryName: "" });
        this.setState({ manufacturer: "" });
    }
    onClickUpdate() {
        let prd = {
            ProductId: this.state.ProductId,
            ProductName: this.state.ProductName,
            price: this.state.price,
            CategoryName: this.state.CategoryName,
            manufacturer: this.state.manufacturer
        };
        this.serv
            .updateData(prd)
            .then(res => res.json())
            .then(resp => resp.data)
            .catch(error => console.log(error.status));
    }
    onClickSave() {
        alert(`${this.state.ProductId},${this.state.ProductName},${this.state.price},${this.state.CategoryName},${this.state.manufacturer}`);

        //1. get the copy of the Products array using slice()
        // let tempArray = this.state.Products.slice();
        //2. push the new record in to the tempArray
        // tempArray.push({
        //     ProductId: this.state.ProductId,
        //     ProductName: this.state.ProductName,
        //     Price: this.state.Price,
        //     CategoryName: this.state.CategoryName,
        //     Manufacturer: this.state.manufacturer
        // })
        // this.setState({ Products: tempArray })
        let prd = {
            ProductId: this.state.ProductId,
            ProductName: this.state.ProductName,
            price: this.state.price,
            CategoryName: this.state.CategoryName,
            manufacturer: this.state.manufacturer
        };
        this.serv
            .postData(prd)
            .then(res => res.json())
            .then(resp => resp.data)
            .catch(error => console.log(error.status));
    }
    getSelectedProduct(p) {
        this.setState({
            ProductId: p.ProductId,
            ProductName: p.ProductName,
            price: p.price,
            CategoryName: p.CategoryName,
            manufacturer: p.manufacturer
        });
    }
    deleterow(p) {
        console.log("pid", p)
        this.serv
            .deleteData(p)
            .then(res => res.json())
            .then(resp => resp.data)
            .catch(error => console.log(error.status))
        // let tempArray = this.state.Products.slice();
        // //2. push the new record in to the tempArray
        // tempArray.push({
        //     ProductId: p.ProductId,
        //     ProductName: p.ProductName,
        //     Price: p.Price,
        //     CategoryName: p.CategoryName,
        //     Manufacturer: p.manufacturer
        // })
        // console.log("temp", tempArray);
    }
    render() {
        return (
            <div className="container bg-light">
                <h3 class="text-center">Register Component</h3>
                <hr></hr>
                <div class="form-group">
                    <label htmlFor="ProductId">PrductId</label>
                    <input type="text" className="form-control"
                        name="ProductId"
                        value={this.state.ProductId}
                        onChange={this.onChangeProduct.bind(this)}
                    ></input>
                </div>
                <div class="form-group">
                    <label htmlFor="ProductName">PrductName</label>
                    <input type="text" className="form-control"
                        name="ProductName"
                        value={this.state.ProductName}
                        onChange={this.onChangeProduct.bind(this)}
                    ></input>
                </div>
                <div class="form-group">
                    <label htmlFor="Price">Price</label>
                    <input type="text" className="form-control"
                        name="price"
                        value={this.state.price}
                        onChange={this.onChangeProduct.bind(this)}
                    ></input>
                </div>
                <div class="form-group">
                    <label htmlFor="CategoryName">CategoryName</label>
                    <select className="form-control"
                        name="CategoryName"
                        value={this.state.CategoryName}
                        onChange={this.onChangeProduct.bind(this)}>
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
                        name="manufacturer"
                        value={this.state.manufacturer}
                        onChange={this.onChangeProduct.bind(this)}>
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
                                ></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="button" value="Update" className="btn btn-success"
                                        onClick={this.onClickUpdate.bind(this)}
                                    ></input>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container">
                    <div className="container">
                        <input type="radio" name="sort" value="sort" checked={this.state.retValsort} />&nbsp;Sort
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="rev" value="rev" checked={this.state.retValrev} />&nbsp;Reverse

                        <br />
                        <hr />
                        <label htmlFor="Criteria">Criteria</label>
                        <select className="form-control"
                            name="criteria1"
                            value={this.state.criteria1}
                            onChange={this.onChangeProduct.bind(this)}>
                            {
                                this.state.criteria.map((c, i) => (
                                    <Options key={i} data={c}></Options>
                                ))
                            }
                        </select>
                    </div>
                    <br />
                    <hr></hr>
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
                                        selected={this.getSelectedProduct.bind(this)}
                                        delete={this.deleterow.bind(this)} ></TableRow>
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
        super(props);
    }
    onRowClick() {
        //alert (`Row clicked ${JSON.stringify(this.props.row)}`);
        // a new selected() method is used to passed received data
        this.props.selected(this.props.row);
    }
    onClickDelete() {
        console.log(this.props.row);
        this.props.delete(this.props.row.ProductId);

    }

    render() {
        return (
            <tr onClick={this.onRowClick.bind(this)}>
                <td></td>
                <td>{this.props.row.ProductId}</td>
                <td>{this.props.row.ProductName}</td>
                <td>{this.props.row.CategoryName}</td>
                <td>{this.props.row.manufacturer}</td>
                <td>{this.props.row.price}</td>
                <td><input type="button" className="btn btn-danger" value="Delete"
                    onClick={this.onClickDelete.bind(this)}>
                </input></td>
            </tr>
        );
    }
}

export default ProductUIComponent;