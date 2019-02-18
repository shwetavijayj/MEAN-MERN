import { Product,Products} from "./app.product.model"; 
export class ProductLogic{
    private products:Array<Product>;
    constructor(){
        this.products = Products;
    }
    getProducts():Array<Product>{
        return this.products;
    }
    saveProduct(p:Product):Array<Product>{
        this.products.push(p);
        return this.products;
    }
}