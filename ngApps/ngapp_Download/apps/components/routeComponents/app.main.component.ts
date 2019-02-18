import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-componnet',
    template: `
    <table class="table table-bordered table-striped">
    <tr>
    </tr>
    </table>
    <hr>
    <router-outlet></router-outlet>
    `
})
export class MainComponent implements OnInit {
    message: string;
    id: number;
    constructor() {
        this.message = "I am About component";
        this.id = 1000;
    }

    ngOnInit(): void { }
}