import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../core/services/user.service';

@Component({
  selector: 'nb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {


  versions = ['1.x', '2.x', '3.x'];

  validateForm: FormGroup;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private rt: Router, private user: UserService) {

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required])
    });


    this.fb.group({
      formLayout: ['horizontal']
    });

  }


  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }


  onSubmit(value) {

    console.log(this.loginForm.value);

    this.user.login();
  }
}




