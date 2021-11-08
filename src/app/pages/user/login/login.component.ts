import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData: any;
  // isHiddenPass: boolean;
  userService: any;
  // isHiddenPass: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm() {

  }
}
