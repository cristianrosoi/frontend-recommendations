import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    HomeComponent
  ]
})
export class CoreModule { }
