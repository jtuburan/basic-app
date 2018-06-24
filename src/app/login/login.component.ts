import { Component, OnInit } from '@angular/core';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Basic: BasicService) { }

  ngOnInit() {
  }

  loginUser(event) {
    // get the value of the textbox
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.Basic.getUserDetails(username, password);
    console.log(username, password);
  }

}
