import { Component, OnInit } from '@angular/core';

import { of, Observable, BehaviorSubject } from 'rxjs';

import { StateService } from './../../../shared/services/state/state.service';
import { EStateProps } from './../../../shared/services/state/model/state.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogedIn: boolean;

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.state.select(EStateProps.isLogedIn).subscribe(
      (isLogedIn: boolean) => this.isLogedIn = isLogedIn
    )
  }

}
