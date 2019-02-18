import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-componnet',
    template: `
    <h2>Home component</h2>
    <div class="container"> {{message}}</div>
    `

})
export class HomeComponent implements OnInit {
    message: string;

    constructor() {
        this.message = "I am Home component";
    }

    ngOnInit(): void { }
}