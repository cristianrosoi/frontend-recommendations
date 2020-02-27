import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { RecommendationsRoutingModule } from './recommendations-routing.module';


@NgModule({
  declarations: [
    RecommendationsComponent
  ],
  imports: [
    CommonModule,
    RecommendationsRoutingModule
  ],
  exports: [
    RecommendationsComponent
  ]
})
export class RecommendationsModule { }
