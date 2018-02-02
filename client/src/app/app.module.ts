import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { appRouting } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UsersComponent } from './api/admin/users/users.component';

import { AuthorizationInterceptorService } from './authentication/authorization-interceptor.service';
import { AdminInterceptorService } from './api/admin/admin-interceptor.service';

import { AuthGuardService } from './guards/auth-guard.service';
import { AdminGuardService } from './guards/admin-guard.service';

import { AuthService } from './authentication/auth.service';
import { ApiService } from './api/api.service';
import { AdminService } from './api/admin/admin.service';
import { EditUserComponent } from './api/admin/edit-user/edit-user.component';
import { AdminComponent } from './api/admin/admin/admin.component';
import { TicketsComponent } from './api/tickets/tickets.component';
import { HomeComponent } from './api/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    EditUserComponent,
    AdminComponent,
    TicketsComponent,
    HomeComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AdminService,
    ApiService,
    AuthGuardService,
    AdminGuardService,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptorService,
      multi: true
    },
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
