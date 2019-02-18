import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "./../../models/app.product.model";
@Injectable()
export class ProductService {
    url: string;

    constructor(private http: Http) {
        this.url = "http://localhost:4070";
    }
    getData(): Observable<Response> {
        let resp: Observable<Response>;
        let header: Headers = new Headers({ 'Content-Type': "application/json", 'authorization': sessionStorage.getItem("authorization") });
        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.get(`${this.url}/api/products`, options);
        return resp;
    }
    postData(prd: Product): Observable<Response> {
        let resp: Observable<Response>;
        //1. define reuest header
        let header: Headers = new Headers({ 'Content-Type': "application/json", 'authorization': sessionStorage.getItem("authorization") });
        // header.append("AUTHORIZATION","Basic Username:password");
        //2. define request options for header collection of header values
        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}/api/products`, JSON.stringify(prd), options);
        return resp;
    }
    putData(id: any, prd: Product): Observable<Response> {
        let resp: Observable<Response>;
        let header: Headers = new Headers({ 'Content-Type': "application/json", 'authorization': sessionStorage.getItem("authorization") });
        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        console.log("id: " + id + " prd " + prd);
        resp = this.http.put(`${this.url}/api/products/${id}`, JSON.stringify(prd), options);
        return resp;
    }
    deleteData(id: any): Observable<Response> {
        let resp: Observable<Response>;
        let header: Headers = new Headers({ 'Content-Type': "application/json", 'authorization': sessionStorage.getItem("authorization") });
        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.delete(`${this.url}/api/products/${id}`, options);
        return resp;
    }

}