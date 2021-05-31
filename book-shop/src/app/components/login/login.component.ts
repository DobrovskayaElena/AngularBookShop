import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  invalidCredentialMsg: string;
  username: string;
  password: string;
  retUrl = 'product-list';
  private activatedRouteSubscription: Subscription;
  private authServiceSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute.queryParamMap.subscribe(
      (params) => {
        this.retUrl = params.get('retUrl');
        console.log('LoginComponent/ngOnInit ' + this.retUrl);
      }
    );
  }

  onFormSubmit(loginForm) {
    this.authServiceSubscription = this.authService
      .login(loginForm.value.username, loginForm.value.password)
      .subscribe((books) => {
        console.log('return to ' + this.retUrl);
        if (this.retUrl != null) {
          this.router.navigate([this.retUrl ?? 'product-list']);
        }
      });
  }

  ngOnDestroy() {
    this.activatedRouteSubscription.unsubscribe();
    this.authServiceSubscription.unsubscribe();
  }
}
