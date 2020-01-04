import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: firebase.User;
  constructor( private service: LoginService ) { }

  ngOnInit() {
    this.service.getloggedinuser().subscribe( user => {
      console.log(user);
      this.user = user;
      });

  }
  logingoogle() {
    console.log('login...');
    this.service.login();
  }
  logoutG() {
    console.log('logout...');
    this.service.logout();
  }

}
