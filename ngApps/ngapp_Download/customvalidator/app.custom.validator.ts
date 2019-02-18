import { AbstractControl } from "@angular/forms";
import { Product } from "../apps/components/productcustomvalcomponent/app.product.model";
import { ProductCustomComponent } from "./../apps/components/productcustomvalcomponent/app.productcustom.component"
export class alphalencase {

    static checkVal(name: AbstractControl): any {
        let val = name.value.split(' ');
        if (val.length > 2) {
            return { invalid: true };
        } else {
            return null;
        }
    }

    static isRequired(category: AbstractControl): any {
        if (category.value === "") {
            return { invalid: true }
        }
        else {
            return null;
        }
    }

    static validProdId(prodId: AbstractControl): any {
        console.log("hello");
        let obj = new ProductCustomComponent();
        let ans = obj.isValidId();
        if (ans === true) {
            return { invalid: true };
        }
        else {
            return null;
        }

    }
}

