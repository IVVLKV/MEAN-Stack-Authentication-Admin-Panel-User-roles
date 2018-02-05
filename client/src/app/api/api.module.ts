import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminModule } from './admin/admin.module';

import { ApiService } from './api.service';
import { TicketsComponent } from './tickets/tickets.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AdminModule
  ],
  declarations: [
    TicketsComponent,
    HomeComponent
  ],
  providers: [
    ApiService,
  ],
})
export class ApiModule { }
