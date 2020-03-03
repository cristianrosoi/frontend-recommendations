import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../../core/auth/guard/auth.guard';
import { CustomerComponent } from './pages/customer/customer.component';

const routes: Routes = [
    { path: '', canActivate: [AuthGuard], component: CustomerComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }