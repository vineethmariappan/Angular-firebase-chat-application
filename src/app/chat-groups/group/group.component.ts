import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.service';
import { firebase } from 'src/app/firebase.service';
import { usermessage } from 'src/app/usermessage.model';
import { delay } from 'rxjs/operators';
import { interval } from 'rxjs';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  username : string;
  newMessage : string;
  newUserMessage : usermessage= new usermessage();
  displayMessages: usermessage[] =[] ;
  cur : number;
  k   : number;
  constructor(private service : User,private http_service : firebase) {
    const counter = interval(5000);
    counter.subscribe(()=>{
      this.getMessages();
  })
   }
  ngOnInit(): void {
    this.username=this.service.current_user;
    this.cur=0;
    this.getMessages() ;

  }
  sendNewMessage(){
    this.newUserMessage.username=this.username;
    this.newUserMessage.message=this.newMessage;
    console.log(this.newUserMessage.username+this.newUserMessage.message);
    this.http_service.sendMessage(this.newUserMessage).subscribe( ResponseData =>{
      console.log(ResponseData);
      delay(1000);
      this.getMessages();
    });
  }
  getMessages(){
    this.k=0;
    this.http_service.getAllMessages().subscribe(ResponseData =>{
      for(const i in ResponseData){
        if(this.k<this.cur){
          this.k++;
          continue;
        }
         this.displayMessages.push({'username' : ResponseData[i].username, 'message' : ResponseData[i].message});
         console.log(this.displayMessages[i].username + this.displayMessages[i].message);
      }
      this.cur=this.displayMessages.length;
    });
  }
}
