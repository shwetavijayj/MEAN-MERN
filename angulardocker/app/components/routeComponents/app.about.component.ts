import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-about-componnet',
    template: `
    <h2>About component</h2>
    <div class="container"> {{message}}</div>
    <div class="container">Value is: {{value}}</div>
    <input type="button" value="Navigate Contact" (click)="navigateToContact()"/>
    `
})
export class AboutComponent implements OnInit {
    message: string;
    value: number;

    // the injection of router and ActivatedRoute will fetch router object from RouterModel imported in ngModule using "routing"
    constructor(private router: Router, private act: ActivatedRoute) {
        this.message = "I am About component";
    }
    //explicitely routed to contact
    navigateToContact(): void {
        this.router.navigate(['contact']);
    }

    //susribe to parameters from ActivatedRoute object 

    ngOnInit(): void {
        this.act.params.subscribe((params) => {
            console.log(params.id);
            this.value = params.id;
        })
    }
}

//querystrings(?key:value) and queryparameters(../../../)
//open id connect