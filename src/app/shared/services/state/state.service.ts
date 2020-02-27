import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IState, EStateProps } from './model/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public state = {
    isLogedIn: new BehaviorSubject<boolean>(false)
  };

  constructor() { }

  public updateState(state: IState) {
    this.state = state;
  }

  public login(): void {
    this.state.isLogedIn.next(true);
  }

  public logout(): void {
    this.state.isLogedIn.next(false);
  }

  public select(stateProp: EStateProps) {
    return this.state[stateProp];
  }

  public resetState(): void {
    const state = {
      isLogedIn: new BehaviorSubject<boolean>(false)
    };

    this.updateState(state);
  }
}
