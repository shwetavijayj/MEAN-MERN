import { Component, OnInit } from '@angular/core';
import { Product } from '../productcomponent/app.product.model';
@Component({
    selector: 'app-piped-name',
    template: `
    <div class="container">
    <strong>The Angular Pipes</strong>
    </div>
    <br/>
    <div class="container">
    <span>{{name}}</span>
    <br>
    <span>{{name | uppercase}}</span>
    </div><br/>
    <div class="container">
    <span>{{dob | date:'short'}}</span><br>
    <span>{{dob | date:'medium'}}</span><br>
    <span>{{dob | date:'full'}}</span><br>
    <span>{{dob | date:'dd/MM/yyyy'}}</span><br>
    </div><br/>
    <div class="container">
    <span>{{salary | currency}}</span><br>
    <span>{{salary | currency:"INR"}}</span><br>
    <span>{{salary}}</span><br>
    <span>{{salary}}</span><br>
    <span>{{salary}}</span><br>
    </div>
    <div class="container">
    {{prd | json}}
    </div>
    `
})
export class PipedComponent implements OnInit {
    name: string;
    dob: Date;
    salary: number;
    prd: Product;
    constructor() {
        this.name = "Harbinger systems..";
        this.dob = new Date(2019, 1, 2);
        this.salary = 200000;
        this.prd = new Product(123, "Desktop", "Ele", 70000, false);
    }

    ngOnInit(): void { }
}
