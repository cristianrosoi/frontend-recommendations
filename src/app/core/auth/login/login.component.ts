import { StateService } from './../../../shared/services/state/state.service';
import { AuthService } from './../service/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { EStateProps } from 'src/app/shared/services/state/model/state.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  public isError$: Observable<boolean>;

  private subscription: Subscription;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private state: StateService) { }

  public ngOnInit(): void {
    this.initForm();
    this.isLogedIn();
    this.isError$ = this.authService.isError$.asObservable();
  }

  public initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onLogin(): void {
    this.authService.login(this.loginForm.value);
  }

  public resetError(): void {
    this.isError$ = of(false);
  }

  public isLogedIn(): void {
    this.subscription = this.state.select(EStateProps.isLogedIn)
      .subscribe(
        (isLogedIn: boolean) => isLogedIn ? this.router.navigate(['/dashboard']) : null
      );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
