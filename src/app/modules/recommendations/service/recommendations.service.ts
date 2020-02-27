import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IRecommendations } from './../model/recommendations.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  constructor(private http: HttpClient) { }

  public getRecommendations(): Observable<IRecommendations> {
    const url = 'assets/mock/recommendations.json';
    return this.http.get<IRecommendations>(url);
  }
}
