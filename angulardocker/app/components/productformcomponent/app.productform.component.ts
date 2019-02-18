import { Component,OnInit } from "@angular/core";
import { FormGroup, FormControl} from "@angular/forms";
import {Product,Categories} from "./app.product.model";
import { ProductLogic} from "./app.product.logic"
@Component({
    selector : "app-productform-component",
    templateUrl: "./app.productform.view.html"
})
export class ProductFormComponent implements OnInit{
    // the OnInit is component LifeCycle interface
    //this provide ngOnInit() method.
    product: Product;
    private logic:ProductLogic;
    products:Array<Product>;
    issaved:boolean;
    //categories locally
    categories = Categories;
    tableHeaders:Array<string>;
    
    //define FromGroup
    frmProduct: FormGroup;

    constructor(){
        this.product = new Product(0,"","",0);
        this.logic = new ProductLogic();
        this.products = new Array<Product>();
        this.tableHeaders = new Array<string>();
        this.issaved = false;
        //define instance of FormGroup and map property of model class 
        //i.e product class with FormControl
        this.frmProduct = new FormGroup({
            ProductId:new FormControl(this.product.ProductId),
            ProductName:new FormControl(this.product.ProductName),
            CategoryName:new FormControl(this.product.CategoryName),
            Price:new FormControl(this.product.Price)
        });
    }
    //the method will be invoked immediately invoked after ctor
    ngOnInit():void{

        //read all properties of product class and push them in table headers array
        for(let p in this.product){
            this.tableHeaders.push(p);
        }
        this.products = this.logic.getProducts();
    }

    clear():void{
        this.product = new Product(0,"","",0);
    }
    save():void{
        //read form values using "FormControlName" under formGroup
        this.product = this.frmProduct.value;
        this.products = this.logic.saveProduct(this.product);
        this.issaved =false;
    }
    loadForm():void{
        this.product = new Product(0,"","",0);
        this.issaved = true;
    }
    getselectedrow(p:Product):void {
        //1. Create a deep copy of the selected product
        //2.assign that copy to this.product
        this.product = Object.assign({},p);
    }
}