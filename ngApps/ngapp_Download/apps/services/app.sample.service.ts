import { Injectable } from "@angular/core";
import { Product } from "../components/productcomponent/app.product.model";
@Injectable()
export class SampleService {
    getProducts(): Array<Product> {
        let products: Array<Product>;
        products = new Array<Product>();
        products.push(new Product(1001, "P1", "c1", 122, false));
        products.push(new Product(1002, "P2", "c2", 123, false));
        return products;
    }
}