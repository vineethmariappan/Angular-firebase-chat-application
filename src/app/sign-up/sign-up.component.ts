import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firebase } from '../firebase.service';
import { profile } from 'src/profile.model';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  validatingForm: FormGroup;
  userData : profile =new profile();
  name : string;
  userpassword : string;
  constructor(private router : Router,private service : firebase){}
  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required),
      loginFormModalPassword_2: new FormControl('', Validators.required)
    });
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }
  get loginFormModalPassword_2() {
    return this.validatingForm.get('loginFormModalPassword_2');
  }

  navigate(){
    console.log(this.name+ " " + this.userpassword);
    this.userData.username=this.name;
    this.userData.password=this.userpassword;
    this.service.createAccount(this.userData);
    this.router.navigateByUrl('login');
  }
  
}
