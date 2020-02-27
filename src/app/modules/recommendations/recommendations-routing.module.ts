import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { AuthGuard } from './../../core/auth/guard/auth.guard';

const routes: Routes = [
    { path: '', canActivate: [AuthGuard], component: RecommendationsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecommendationsRoutingModule { }
