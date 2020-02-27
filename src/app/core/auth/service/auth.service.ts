import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { StateService } from './../../../shared/services/state/state.service';
import { IAuth } from './../model/auth.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isError$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private state: StateService, private router: Router) { }

  public login(credentials: IAuth): void {
    if (credentials.username === 'cristian.rosoi' && credentials.password === '1234567') {
      this.state.login();
      this.router.navigate(['/dashboard']);
    } else {
      this.isError$.next(true);
    }
  }

  public logout(): void {
    this.state.logout();
    this.router.navigate(['/login']);
  }
}
