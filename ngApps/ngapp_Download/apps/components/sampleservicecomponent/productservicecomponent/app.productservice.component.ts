import { Component, OnInit } from "@angular/core";
import { Categories } from "./app.product.model";
import { Product } from "./../../../models/app.product.model";
import { SampleService } from "./../../../services/app.sample.service";
import { Response } from "@angular/http";
import { ProductService } from "./../../sampleservicecomponent/app.product.service";
import { map } from 'rxjs/operators';
@Component({
    selector: "app-productservice-component",
    templateUrl: "./app.product.view.html"
})

export class ProductServiceComponent implements OnInit {
    // the OnInit is component LifeCycle interface
    //this provide ngOnInit() method.
    product: Product;
    issaved: boolean;

    searchContentProduct: string;
    searchContentCategory: string;


    products: Array<Product>;
    //categories locally
    categories = Categories;
    tableHeaders: Array<string>;

    constructor(private serv: ProductService) {
        this.product = new Product("", 0, "", "", "", 0, "", false, false, false);
        this.issaved = false;
        this.products = new Array<Product>();
        this.tableHeaders = new Array<string>();
    }
    //the method will be invoked immediately invoked after ctor
    ngOnInit(): void {

        //read all properties of product class and push them in table headers array
        for (let p in this.product) {
            this.tableHeaders.push(p);
        }
        //make call to REST API and 
        let temp;
        // this.serv.getData().subscribe((resp: Response) => {
        //     this.products = resp.json().data;
        //     console.log(resp.json());
        // })
        this.serv.getData().pipe(map(data => {
            console.log("data", data.json());
            temp = data.json();
            console.log("final", temp.data);
            //new feature of html5 session storage

            this.products = data.json().data;
            console.log("received data", this.products);
        })).subscribe();
    }

    clear(): void {
        this.product = new Product("", 0, "", "", "", 0, "", false, false, false);
    }
    save(): void {
        this.serv.postData(this.product).subscribe(
            (resp: Response) => {
                this.products.push(resp.json().data);
                console.log(resp.json().data);
            },
            error => {
                console.log(`Error occured ${error}`);
            }
        )
    }

    update(): void {
        console.log(this.product);
        this.serv.putData(this.product.ProductId, this.product).subscribe(
            (resp: Response) => {
                this.products.push(resp.json().data);
                console.log(resp.json().data);
            },
            error => {
                console.log(`Error is here ${error}`);
            }

        )

    }

    delete(): void {
        console.log(this.product);
        this.serv.deleteData(this.product.ProductId).subscribe(
            (resp: Response) => {
                this.products.push(resp.json().data);
                console.log(resp.json().data);
            },
            error => {
                console.log(`Error is here ${error}`);
            }

        )
    }
    search() {
        console.log(this.product.checkCatName);
        console.log(this.product.checkMan);
        console.log(this.product.checkProdName);
        if (this.product.checkCatName || this.product.checkMan || this.product.checkProdName) {
            console.log(this.searchContentProduct);
            console.log(this.searchContentCategory);
            // //pipe method call
        }

    }
    searchIn(): void {
        this.issaved = true

    }
    searchOut(): void {
        this.issaved = false;
    }
    getselectedrow(p: Product): void {
        //1. Create a deep copy of the selected product
        //2.assign that copy to this.product
        this.product = Object.assign({}, p);
    }
}