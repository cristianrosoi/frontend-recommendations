import { ICustomer } from './../../model/customer.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { CustomerService } from './../../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {

  public customer$: Observable<ICustomer>;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  public getCustomer(): void {
    this.customer$ = this.customerService.getCustomer();
  }

  ngOnDestroy(): void {
  }

}
