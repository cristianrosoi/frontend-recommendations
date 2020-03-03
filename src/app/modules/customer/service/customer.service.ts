import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';

import { ICustomer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomer(): Observable<ICustomer> {
    const url = environment.serviceUrls.apiUrl + environment.serviceUrls.endpoints.customer;
    const mockUrl = 'assets/mock/customer.json';

    return this.http.get<ICustomer>(mockUrl);
  }
}
