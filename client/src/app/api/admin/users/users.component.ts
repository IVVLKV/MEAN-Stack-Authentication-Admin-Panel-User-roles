import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.users = ''
    this.adminService.getUsers()
  }

}
