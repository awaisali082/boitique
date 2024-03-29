import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Customer } from './../models/customer';
import { CustomerResponse } from './../models/customerResponse';

@Injectable()
export class CustomerService {

   // private _addCustomerURL = 'http://localhost:3100/customers/addCustomer';
    private _addCustomerURL = "https://ssbotique.herokuapp.com/customers/addCustomer";
    private _getAllCustomersURL = 'https://ssbotique.herokuapp.com/customers/getAllCustomers';
    private getCustomersByContactNumberURL = 'https://ssbotique.herokuapp.com/customers/getCustomerAndReferancesByContactNumber?ContactNumber=';
    private getMeasurementURL = 'https://ssbotique.herokuapp.com/customers/getMeasurementByCustomerId?CustomerId=';
    private getAllCustomerNameURL ='https://ssbotique.herokuapp.com/customers/getCustomersByName?FullName=';
    constructor(private _http: Http) { }


    public addCustomer(customer: Customer) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._addCustomerURL, customer, options)
        .map(res => res.json());
    }
    
    public getAllCustomers(): Observable<CustomerResponse> {
        return this._http.get(this._getAllCustomersURL)
         .map((response: Response) => <CustomerResponse> response.json())
         .do(data => console.log(JSON.stringify(data)));
     }

    public getCustomersByContactNumber(contactNumber:string): Observable<CustomerResponse> {
        return this._http.get(this.getCustomersByContactNumberURL+contactNumber)
         .map((response: Response) => <CustomerResponse> response.json())
         .do(data => console.log(JSON.stringify(data)));
     }
     public getCustomersByContactName(FullName:string): Observable<CustomerResponse> {
        return this._http.get(this.getAllCustomerNameURL+FullName)
         .map((response: Response) => <CustomerResponse> response.json())
         .do(data => console.log(JSON.stringify(data)));
     }

    private extractData(res: Response) {
        let body = res.json();
        console.log("Extract Data");
        console.log(body);
        return body.data || {};
    }

    GetMeasurementById(CustomerId){
        
        let headers = new Headers();

        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.get(this.getMeasurementURL+CustomerId, { headers: headers })
            .map(res => res.json());
    }

}