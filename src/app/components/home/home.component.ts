import { Component, OnInit } from '@angular/core';
import {MembersService} from '../members/members-service';
import { User } from '../../model/user-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  usersSize: number;

  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.membersService.users().subscribe(users => {
        this.users = users;
        this.usersSize = this.users.length
      });
  }

}
