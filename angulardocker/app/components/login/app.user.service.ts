import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { User } from './app.user.model';
import { map } from 'rxjs/operators';
@Injectable()
export class userService {
    url: string;

    constructor(private http: Http) {
        this.url = "http://localhost:4070";
    }
    postData(usr: User): Observable<Response> {
        let resp: Observable<Response>;
        //1. define reuest header
        let header: Headers = new Headers({ 'Content-Type': "application/json" });
        // header.append("AUTHORIZATION","Basic Username:password");
        //2. define request options for header collection of header values
        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}/api/user/auth`, JSON.stringify(usr), options);
        return resp;
    }
    postDataNew(usr: User): Observable<Response> {
        let resp: Observable<Response>;
        //1. define reuest header
        let header: Headers = new Headers({ 'Content-Type': "application/json" });
        // header.append("AUTHORIZATION","Basic Username:password");
        //2. define request options for header collection of header values
        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}/api/users`, JSON.stringify(usr), options);
        return resp;
    }
    getData(): Observable<Response> {
        let resp: Observable<Response>;
        resp = this.http.get(`${this.url}/api/users`);
        return resp;
    }



}