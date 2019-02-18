import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-component",
  template: `
    <h2>Hello World!!!@@!</h2>
  `
})
export class SimpleComponent implements OnInit {
  constructor() {
    console.log("CTOR");
  }

  ngOnInit(): void {
    console.log("INIT");
  }
}
