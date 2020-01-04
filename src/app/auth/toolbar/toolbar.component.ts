import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
user: firebase.User;
  constructor(private logservice: LoginService) { }

  ngOnInit() {
    this.logservice.getloggedinuser().subscribe( user => {
      console.log(user);
      this.user = user;
      console.log(this.user);
      });
  }
  logout() {
    this.logservice.logout();
  }

}
