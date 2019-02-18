import React, { Component } from 'react'
import ProductService from "./../services/service"
class ProductUIComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductId: 0,
            ProductName: "",
            price: 0,
            CategoryName: "Electrical",
            manufacturer: "AB Tech",
            criteriaSelected: "ProductId",
            ProductsFromServer: [],
            sortChecked: true,
            reverseChecked: false,
            Criterias: ["ProductId", "ProductName", "Price", "CategoryName", "Manufacturer"],
            ProductHead: ["ProductId", "ProductName", "Price", "CategoryName", "Manufacturer"],
            Products: [
                // { ProductId: 101, ProductName: "Burger", Price: 100, CategoryName: "Food", Manufacturer: "EF Beverages" },
                // { ProductId: 102, ProductName: "Fan", Price: 1000, CategoryName: "Electronics", Manufacturer: "AB Tech" },
                // { ProductId: 103, ProductName: "Desktop", Price: 10000, CategoryName: "Electronics", Manufacturer: "CD Power" },
                // { ProductId: 105, ProductName: "Burger", Price: 100000, CategoryName: "Food", Manufacturer: "EF Beverages" },
                // { ProductId: 106, ProductName: "Burger", Price: 1000000, CategoryName: "Food", Manufacturer: "EF Beverages" }
            ],
            Categories: ["Electrical", "Electronics", "Food"],
            ManufacturerArray: ["AB Tech", "CD Power", "EF Beverages", "ASUS", "Dell", "MI"],
        };
        this.serv = new ProductService();
    }

    //e is an event-payload raised on target element
    //we can read the payload data using 'e'
    onChangeProduct(e) {

        this.setState({ [e.target.name]: e.target.value })


    }

    onClickClear() {
        this.setState({
            price: 0, ProductId: 0, ProductName: "",
            manufacturer: "", CategoryName: ""
        });
    }
    onClickSave() {
        let prd = {
            ProductId: this.state.ProductId,
            ProductName: this.state.ProductName,
            price: this.state.price,
            CategoryName: this.state.CategoryName,
            manufacturer: this.state.manufacturer
        }
        this.serv.updateData(prd)
            .then(res => res.json()).
            then(resp => resp.data)
            .catch(error => console.log(error.status))
    }


    onClickNew() {
        let prd = {
            ProductId: this.state.ProductId,
            ProductName: this.state.ProductName,
            price: this.state.price,
            CategoryName: this.state.CategoryName,
            manufacturer: this.state.manufacturer
        }
        this.serv.postData(prd)
            .then(res => res.json()).
            then(resp => resp.data)
            .catch(error => console.log(error.status))
    }

    getSelectedProduct(p) {
        this.setState({
            price: p.price,
            ProductId: p.ProductId,
            ProductName: p.ProductName,
            manufacturer: p.manufacturer,
            CategoryName: p.CategoryName
        });
    }

    //method will be executed immediately after the render() completes its job
    componentDidMount() {
        let prds = this.serv.getData()
            .then(data => data.json())
            .then(value => {
                console.log(JSON.stringify(value.data));
                this.setState({ Products: value.data });
            }).catch(error => {
                console.log(`Error Occured ${error.status}`);
            });
        //console.log(prds);
        // console.log("this.state.Products", this.state.Products)
        this.sortSelected();
    }
    sortSelected() {
        if (this.state.sortChecked == false) {
            this.setState({ sortChecked: true, reverseChecked: false });
            this.forceUpdate();
            if (this.state.criteriaSelected == "ProductId") {
                this.state.Products.sort(function (a, b) {
                    return a.ProductId - b.ProductId;

                });
                this.forceUpdate();
            } else if (this.state.criteriaSelected == "ProductName") {
                this.state.Products.sort(function (a, b) {

                    return (a.ProductName) - b.ProductName;
                });
                this.forceUpdate();
            } else if (this.state.criteriaSelected == "Price") {
                this.state.Products.sort(function (a, b) {
                    return a.price - b.price;
                });
                this.forceUpdate();
            } else if (this.state.criteriaSelected == "Manufacturer") {
                this.state.Products.sort(function (a, b) {
                    return a.manufacturer - b.manufacturer;
                });
                this.forceUpdate();
            }
            else if (this.state.criteriaSelected === "CategoryName") {
                this.state.Products.sort(function (a, b) {
                    return a.CategoryName - b.CategoryName;
                });
                this.forceUpdate();
            } else {

            }

        } else {
        }
    }
    reverseSelected() {
        if (this.state.reverseChecked == false) {
            this.setState({ reverseChecked: true, sortChecked: false });
            this.state.Products.reverse();

        }

    }
    render() {
        return (
            <div className='container'>
                <div className="form-group">
                    <label htmlFor="ProductId">ProductId</label>
                    <input type="text" className="form-control"
                        value={this.state.ProductId} name="ProductId"
                        onChange={this.onChangeProduct.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="ProductName">ProductName</label>
                    <input type="text" className="form-control"
                        value={this.state.ProductName} name="ProductName"
                        onChange={this.onChangeProduct.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Price">Price</label>
                    <input type="text" className="form-control"
                        value={this.state.price} name="price"
                        onChange={this.onChangeProduct.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="CategoryName">CategoryName</label>
                    <select className="form-control"
                        value={this.state.CategoryName} name="CategoryName"
                        onChange={this.onChangeProduct.bind(this)} >
                        {
                            this.state.Categories.map((c, i) => (
                                <Options key={i} data={c}></Options>
                            ))
                        }</select>
                </div>
                <div className="form-group">
                    <label htmlFor="Manufacturer">Manufacturer</label>
                    <select className="form-control"
                        value={this.state.manufacturer} name="manufacturer"
                        onChange={this.onChangeProduct.bind(this)} >
                        {
                            this.state.ManufacturerArray.map((c, i) => (
                                <Options key={i} data={c}></Options>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td>
                                    <input type="button" value="Add New Record" className="btn btn-success" onClick={this.onClickNew.bind(this)} />
                                </td>
                                <td>
                                    <input type="button" value="Update Record" className="btn btn-success" onClick={this.onClickSave.bind(this)} />
                                </td>
                                <td>
                                    <input type="button" value="Clear" className="btn btn-default" onClick={this.onClickClear.bind(this)} />
                                </td>
                            </tr>
                            <br />


                            <tr>

                                <td>
                                    <label htmlFor="Criteria">Sort</label>&nbsp;  &nbsp;

                                    <input type="radio" name="Sort" checked={this.state.sortChecked} onChange={this.onChangeProduct.bind(this)}
                                        onClick={this.sortSelected.bind(this)} />
                                </td>

                                <td>
                                    <label htmlFor="Criteria">Reverse</label> &nbsp;  &nbsp;
                                    <input type="radio" name="Reverse" checked={this.state.reverseChecked} onChange={this.onChangeProduct.bind(this)}
                                        onClick={this.reverseSelected.bind(this)} />
                                </td>

                            </tr>

                            {this.state.sortChecked == true &&
                                <tr>
                                    <td>
                                        <label htmlFor="Criteria">Sort By</label>
                                    </td>
                                    <td>
                                        <select className="form-control"
                                            value={this.state.criteriaSelected} name="criteriaSelected"
                                            onChange={this.onChangeProduct.bind(this)} >
                                            {

                                                this.state.Criterias.map((c, i) => (

                                                    <Options key={i} data={c}></Options>
                                                ))
                                            }
                                        </select>
                                    </td>
                                </tr>
                            }

                        </tbody>
                    </table>
                </div>
                {this.state.Products.length > 1 &&
                    <div className="container">
                        <table className="table table-bordered table-striped">
                            <thead>
                                {Object.keys(this.state.Products[0]).map((p, i) => (
                                    <th> {p} </th>

                                ))}


                                {/* <tr>
                                {this.state.ProductHead.map(function (name, index) {
                                    return <th key={index}>{name}</th>
                                })}
                            </tr> */}

                            </thead>

                            <tbody>
                                {this.state.Products.map((prd, idx) => (
                                    <TableRow key={idx} row={prd} products={this.state.Products}
                                        selected={this.getSelectedProduct.bind(this)} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div >
        );
    }
}

//component that will render <option>
//the props.data is the data passed from the parent of this component

class Options extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <option value={this.props.data}>{this.props.data}</option>
        );
    }

}
class TableRow extends Component {
    constructor(props) {
        super(props)
        this.serv = new ProductService();
    }
    onUpdate() {
        let prds = this.serv.updateData(this.props.row)
            .then(data => data.json())
            .then(value => {
                console.log(JSON.stringify(value.data));
                // this.setState({ Products: value.data });
            }).catch(error => {
                console.log(`Error Occured ${error.status}`);
            });
    }

    onDelete() {

        let prds = this.serv.deteteData(this.props.row.ProductId)
            .then(data => data.json())
            .then(value => {
                console.log(JSON.stringify(value.data));
                // this.setState({ Products: value.data });
            }).catch(error => {
                console.log(`Error Occured ${error.status}`);
            });


    }
    onRowClick(d) {
        //a new "selected" method is used to pass received data
        this.props.selected(this.props.row);
    }
    render() {
        return (
            <tr onClick={this.onRowClick.bind(this)}>
                {
                    Object.keys(this.props.products[0]).map((p, i) => (
                        <td> {this.props.row[p]}</td>
                    ))
                }
                <div> <input className="btn btn-danger" style={{ justifyContent: 'center', alignItems: 'center' }}
                    type="button" onClick={this.onDelete.bind(this)} value="delete" /></div>

            </tr>
            // <tr onClick={this.onRowClick.bind(this)}>
            //     <td>{this.props.row.ProductId}</td>
            //     <td>{this.props.row.ProductName}</td>
            //     <td>{this.props.row.Price}</td>
            //     <td>{this.props.row.CategoryName}</td>
            //     <td>{this.props.row.Manufacturer}</td>
            // </tr>
        );
    }

}
class TableHead extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        <tr>
            <th>
                <td>{this.props.row}</td>
            </th>
        </tr>

    }
}
export default ProductUIComponent;