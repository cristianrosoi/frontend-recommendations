import { IRecommendations } from './../../model/recommendations.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Subject, EMPTY } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';

import { RecommendationsService } from './../../service/recommendations.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit, OnDestroy {

  public recommendations: string;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private recommendationService: RecommendationsService) { }

  ngOnInit(): void {
  }

  public getRecommendations(): void {
    this.recommendationService.getRecommendations()
      .pipe(
        takeUntil(this.unsubscribe$),
        catchError((error: HttpErrorResponse) => {
          console.error(`Caught Error: Can't get recommendations`, error);
          return EMPTY;
        })
      )
      .subscribe(
        (response: IRecommendations) => this.recommendations = response.recommendations
      );
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
