import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
    declarations: [
        CustomerComponent
    ],
    imports: [
        CommonModule,
        CustomerRoutingModule
    ],
    exports: [
        CustomerComponent
    ]
})
export class CustomerModule { }