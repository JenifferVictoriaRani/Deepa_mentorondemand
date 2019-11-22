import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MentorService } from '../mentor.service';
import { IMentor } from '../user/mentorlist/IMentor.Module';
import { IUser } from './IUser.Module';
import { ILogin } from './ILogin.Module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:UserService,private route:Router,private mentorser:MentorService) { }
msg:string;
username:string;
password:string;
Roleid:number;
user1:IUser;
login:ILogin=null;

  ngOnInit() {
  }
 navigate()
{

if(this.Roleid==1)
{
  {{debugger}}
this.user.adminlogin(this.username,this.password);
this.user.GetTokenAdmin(this.username);
// this.route.navigate(['/listtech']);
}

else if(this.Roleid==2)
{
  {{debugger}}
this.user.userlogin(this.username,this.password).subscribe(
  result=>{ 
    this.login=result as ILogin
    console.log(this.login)
    {{debugger}}
   
      this.user.activeUser=this.login.userid;
      this.user.GetTokenUser(this.username);
    //  this.route.navigate(['/mentorlist']);

  });
  

  }


else if(this.Roleid==3)
{

{{debugger}}
this.user.mentorlogin(this.username,this.password).subscribe(
  result=>{ 
    this.login=result as ILogin

    {{debugger}}
   
      this.mentorser.activementor=this.login.mentorid;
      this.user.GetTokenMentor(this.username);
     // this.route.navigate(['/reqfromuser']);
    
  });
  
  
}

}

}
