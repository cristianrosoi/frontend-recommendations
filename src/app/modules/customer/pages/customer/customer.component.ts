import { ICustomer } from './../../model/customer.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { CustomerService } from './../../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {

  public customer$: Observable<ICustomer>;
  public isError: boolean;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  public getCustomer(): void {
    this.customer$ = this.customerService.getCustomer()
      .pipe(
        catchError(error => {
          console.error(`Can't get customer data`, error);
          this.isError = true;
          return of({} as ICustomer);
        })
      )
  }

  ngOnDestroy(): void {
  }

}
