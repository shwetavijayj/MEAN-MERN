import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-componnet',
    template: `
    <div>
    <h2>Contact component</h2>
     {{message}}
     <a [routerLink]="['product']">Product</a>
     <router-outlet></router-outlet>
    </div>
    `
})
export class ContactComponent implements OnInit {
    message: string;

    constructor() {
        this.message = "I am Contact component";
    }

    ngOnInit(): void { }
}