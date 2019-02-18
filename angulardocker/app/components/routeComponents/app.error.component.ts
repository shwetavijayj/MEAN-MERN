import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error-name',
    template: `
    <h2>Sorry, You are not authenticated user..Please signup</h2>
    <td><a [routerLink]="['register']">Sign up</a></td>
    <router-outlet></router-outlet>
    `
})
export class errorComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
