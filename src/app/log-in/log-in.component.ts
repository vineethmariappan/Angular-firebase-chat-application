import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firebase } from '../firebase.service';
import { profile } from 'src/profile.model';
import { User } from '../user.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  validatingForm: FormGroup;
  userData : profile =new profile();
  username : string;
  userpassword : string;
  constructor(private router : Router,private service : firebase,private user_service : User){}
  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required),
    });
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }
  navigate(){
    this.service.loginAccount().subscribe(responseData =>{
      for(const i in responseData){
        if(responseData[i].username==this.username && responseData[i].password==this.userpassword){
          console.log("matched");
          this.user_service.current_user=this.username;
          this.router.navigateByUrl('chatgroups/group');
        }
      }
    });
    // 
  }
}
