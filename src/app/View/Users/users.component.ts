import {Component, Injectable, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

@Injectable()
export class UsersComponent implements OnInit {
  private users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.list().then(users => this.users = users || []);
  }

  delete(user: User) {
    if (confirm('Are you sure you want to delete ' + user.name + '?')) {
      const index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.usersService.delete(user.id);
    }
  }
}
