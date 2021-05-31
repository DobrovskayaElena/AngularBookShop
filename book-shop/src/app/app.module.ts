import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartService } from './services/cart.service';
import { AppRoutingModule } from './app-routing.module';
import { BooksService } from './services/books.service';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './layout/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { ServerResolver } from './services/server-resolver.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ServersService } from './services/servers.service';
import { SharedModule } from './shared/shared.module';
import { UserComponent } from './components/user/user.component';
import { HttpClientService } from './services/http-client.service';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/reducers/app.reducers';
import { AuthComponent } from './components/auth/auth.component';
import { EffectsModule } from '@ngrx/effects';
import { fromRoot } from './store';
import { AdminModule } from './components/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    UserComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AdminModule,
    EffectsModule.forRoot([fromRoot.RootEffects]),
    StoreModule.forRoot(fromRoot.userReducer),
    HttpClientModule,
    SharedModule
  ],
  providers: [
    CartService,
    BooksService,
    ServerResolver,
    AuthGuardService,
    AuthService,
    ServersService,
    HttpClientService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
