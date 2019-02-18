import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmpData, states } from "./app.emp.model";

@Component({
    selector: "app-empdetails-component",
    templateUrl: "./app.empdetails.view.html"
})
export class EmpFormComponent {
    // empdata: EmpData;
    // empdata1: Array<EmpData>;
    // frmCustomer: FormGroup;
    // constructor() {
    //     this.empdata = new EmpData("", "", "", 0, "", "", "", 0, "");
    //     this.empdata1 = new Array<EmpData>();
    //     this.frmCustomer = new FormGroup({
    //         firstName: new FormControl(this.empdata.firstName),
    //         lastName: new FormControl(this.empdata.lastName),
    //         email: new FormControl(this.empdata.email),
    //         phone: new FormControl(this.empdata.phone,
    //             Validators.compose([
    //                 Validators.required,
    //                 Validators.pattern('[0-9 ]+'),
    //                 Validators.minLength(10)
    //             ])
    //         ),
    //         address: new FormControl(this.empdata.address),
    //         city: new FormControl(this.empdata.city),
    //         state: new FormControl(this.empdata.state),
    //         zipCode: new FormControl(this.empdata.zipCode),
    //         comment: new FormControl(this.empdata.comment)
    //     })
    // }
    states: string[] = ['Maharashtra', 'Gujrat', 'Uttar Pradesh', 'Bihar']
}