import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../models/app.product.model";
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    product: Product[];
    constructor() {
        this.product = [];
    }
    transform(items: any[], searchText1: any, searchText2: any): any[] {
        // console.log("Items", items);
        console.log("searchText1", searchText1)
        console.log("searchText2", searchText2)
        if (!items) return [];

        for (let i = 0; i < items.length; i++) {

            if ((items[i].CategoryName == searchText1) && (items[i].ProductName == searchText2)) {
                this.product.push(items[i]);
            }
        }
        if (!this.product) {
            return items;
        }
        else {
            return this.product;
        }
    }
}