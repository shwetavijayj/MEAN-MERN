import { Component, OnInit } from "@angular/core";
import { SampleService } from "./../../services/app.sample.service";
@Component({
    selector: "app-sampleservice-component",
    templateUrl: "./app.sampleservice.component.html"
})

export class SampleServiceComponent implements OnInit {
    constructor(private serv: SampleService) {

    }
    ngOnInit() { }
    getData(): void {
        let data = this.serv.getProducts();
        console.log(JSON.stringify(data));
    };

}