import { Component, OnInit } from '@angular/core';

import { StateService } from './../../../shared/services/state/state.service';
import { EStateProps } from './../../../shared/services/state/model/state.model';
import { AuthService } from './../../auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogedIn: boolean;

  constructor(private state: StateService, private authService: AuthService) { }

  ngOnInit(): void {
    this.state.select(EStateProps.isLogedIn).subscribe(
      (isLogedIn: boolean) => this.isLogedIn = isLogedIn
    );
  }

  public logout(): void {
    this.authService.logout();
  }

}
