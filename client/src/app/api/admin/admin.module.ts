import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { AdminInterceptorService } from './admin-interceptor.service';
import { AdminGuardService } from './admin-guard.service';
import { AdminService } from './admin.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    UsersComponent,
    EditUserComponent,
    AdminComponent
  ],
  providers: [
    AdminService,
    AdminGuardService,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptorService,
      multi: true
    }
  ]
})
export class AdminModule { }
