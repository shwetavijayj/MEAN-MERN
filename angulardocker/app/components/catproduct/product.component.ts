import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, Products } from './product.model';
// import { EventEmitter } from 'events';
@Component({
    selector: 'product-data',
    templateUrl: './product.html'
})
export class ProductComponent1 implements OnInit {
    products = Products
    _filterProduct: Array<Product>;
    _categoryName: string;
    cnt: number = 0;
    @Input()
    set categoryName(cname: string) {
        console.log(cname);
        this._categoryName = (cname && cname.trim()) || 'No Category Selected';
    }
    get categoryName() {
        return this._categoryName;
    }

    @Output()
    // fire: EventEmitter<number>;
    fire = new EventEmitter();

    constructor() {
        this._filterProduct = new Array<Product>();
        console.log('Product');
    }

    get filterProducts() {
        this._filterProduct = new Array<Product>();
        for (let e of Products) {
            if (e.categoryName == this._categoryName) {
                this.cnt++;
                this._filterProduct.push(e);
                this.recordCnt();
            }
        }
        return this._filterProduct;
    }

    recordCnt() {
        let x = this._filterProduct.length;
        this.fire.emit(x);
    }

    ngOnInit() { }
}