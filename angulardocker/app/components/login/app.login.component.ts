import { Component, OnInit } from '@angular/core';
import { User } from './app.user.model';
import { userService } from './app.user.service';
import { Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-login-name',
    templateUrl: './login.html'
})
export class LoginComponent implements OnInit {

    user: User;
    users: Array<User>;
    constructor(private serv1: userService, private router: Router, private act: ActivatedRoute) {
        this.user = new User("", "");
    }

    ngOnInit(): void { }
    clear(): void {
        this.user = new User("", "");
    }

    login(): void {
        let temp: any;
        let flag: boolean = false;
        console.log("User data", this.user);
        this.serv1.postData(this.user).pipe(map(data => {
            console.log("data", data.json());
            temp = data.json();
            console.log("final", temp.data);
            //new feature of html5 session storage
            if (temp.data) {
                sessionStorage.setItem("authorization", `bearer ${temp.data}`);

                this.router.navigate(['product']);
            } else {

                this.router.navigate(['register']);
            }
        })).subscribe();
    }
}
