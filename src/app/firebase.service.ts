import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { profile } from 'src/profile.model';
import { map } from 'rxjs/operators';
import { usermessage } from './usermessage.model';
@Injectable({providedIn : 'root'})
export class firebase{
    constructor(private http : HttpClient){}
    createAccount(userData : profile){
        this.http.post('firebaseurl/profiles.json',userData).subscribe( responseData =>{
            console.log(responseData);
        },error=>{
            console.log(error.message);
        });
    }
    loginAccount(){
        return this.http.get('firebaseurl/profiles.json').pipe(map(ResponseData =>{
            const users=[];
            for(const key in ResponseData){
                users.push(ResponseData[key]);
            }
            return users;
        }
        ));
    }
    sendMessage(message : usermessage){
        return this.http.post('firebaseurl/group.json',message)
  
    }
    getAllMessages(){
       return this.http.get('firebaseurl/group.json').pipe(map(ResponseData =>{
            const messages : usermessage[]=[];
            for(const key in ResponseData){
                messages.push(ResponseData[key]);
            }
            return messages;
        }
        ));
    }
}