import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  dataForm: any;
  isHiddenPass: any;
  isHiddenConPass: any;
  genders: any;
  isLoading: any;
  userService: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    
  }
}
