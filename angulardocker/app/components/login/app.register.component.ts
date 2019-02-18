import { Component, OnInit } from '@angular/core';
import { User } from './app.user.model';
import { userService } from './app.user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
    selector: 'app-register-name',
    templateUrl: './register.html'
})
export class RegisterComponent implements OnInit {
    user: User;
    users: Array<User>;
    cpassword: string;
    constructor(private serv1: userService, private router: Router, private act: ActivatedRoute) {
        this.user = new User("", "");
    }

    ngOnInit(): void {
        let temp;
        this.serv1.getData().pipe(map(data => {
            console.log("data", data.json());
            temp = data.json();
            console.log("final", temp.data);
            //new feature of html5 session storage

            this.users = data.json().data;
            console.log("received data", this.users);
        })).subscribe();

    }
    clear(): void {
        this.user = new User("", "");
    }
    signup(): void {
        let temp;
        this.serv1.postDataNew(this.user).pipe(map(data => {
            console.log("data", data.json());
            temp = data.json();
            console.log("final", temp.data);
            //new feature of html5 session storage
            if (temp.message1) {
                this.router.navigate(['error']);
            } else {

                this.router.navigate(['login']);
            }
        })).subscribe();
    }
    checkUser() {
        console.log("username", this.user.UserName);
        console.log("users", this.users);
        for (let i = 0; i < (this.users.length); i++) {
            if (this.users[i].UserName == this.user.UserName) {
                alert("Username already exist");
                location.reload();
            }
        }
    }
}
