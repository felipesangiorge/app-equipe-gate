import { Component, OnInit } from '@angular/core';
import {MembersService} from './members-service';
import { User } from '../../model/user-model';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [
  trigger('popOverState', [
    state('show', style({
      opacity: 1
    })),
    state('hide',   style({
      opacity: 0
    })),
    transition('show => hide', animate('600ms ease-out')),
    transition('hide => show', animate('1000ms ease-in'))
  ])
]
})
export class MembersComponent implements OnInit {
  users: User[];
  show = 'hide';

  constructor(private membersService: MembersService) { }

  ngOnInit() {
      this.membersService.users().subscribe(users => {
        this.users = users;
        this.toggleIn();
      });
  }

  toggleIn() {
    this.show = 'show';
  }

}
