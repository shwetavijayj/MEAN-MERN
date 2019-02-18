import { Component } from "@angular/core";
import { componentFactoryName } from "@angular/compiler";

@Component({
    selector:'app-simple-component',
    template:`
    <div class="container"><h2>Calculator</h2></div>
    <table>
    <tr><td colspan="2"><input type=number [(ngModel)]="val1"></td></tr>
    <tr><td colspan="2"><input type=number [(ngModel)]="val2"></td></tr>
    <tr><td colspan="2"><input type=number [(ngModel)]="answer"></td></tr>
    <tr><td><button class="btn btn-success" (click)=add()>Add</button></td>
    <td><button class="btn btn-success" (click)=sub()>Subtract</button></td></tr>
    <tr><td><button class="btn btn-success" (click)=mult()>Multiply</button></td>
    <td><button class="btn btn-success" (click)=divide()>Divide</button></td></tr>
    </table>
    `
})
export class SimpleComponent{
    val1:number;
    val2:number;
    answer:number;
    constructor(){
        this.val1=0;
        this.val2=0;
        this.answer=0
    }
    // print():void{
    //     this.message = "hey!!Button is clicked.."
    // }
    add():void{
        this.answer = this.val1 + this.val2;
    }
    sub():void{
        this.answer = this.val1 - this.val2;
    }
    mult():void{
        this.answer = this.val1 * this.val2;
    }
    divide():void{
        this.answer = this.val1 / this.val2;
    }
}