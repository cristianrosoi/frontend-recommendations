import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecommendationsComponent } from './modules/pages/recommendations/recommendations.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LoginComponent } from './core/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationsComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
