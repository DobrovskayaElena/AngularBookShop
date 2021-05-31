import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/reducers/app.reducers';
import * as AuthActions from '../store/actions/auth.actions';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private isloggedIn = false;
  private userName: string;

  constructor(private router: Router, private store: Store<fromApp.AppState>) {
    
  }
  //constructor() {this.isloggedIn = false;}

  autoLogin() {
    const userData: {
      id: number;
      name: string;
      password: string;
      status: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.id,
      userData.name,
      userData.password,
      userData.status
    );

    if (loadedUser) {
      this.store.dispatch(
        new AuthActions.Login({
          id: loadedUser.id,
          name: loadedUser.name,
          password: loadedUser.password,
          status: loadedUser.status,
        })
      );
    }
  }

  login(username: string, password: string) {
    this.isloggedIn = true;
    this.userName = username;
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    return this.userName == 'Admin';
  }

  logoutUser(): void {
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    //this.isloggedIn = false;
  }
}
