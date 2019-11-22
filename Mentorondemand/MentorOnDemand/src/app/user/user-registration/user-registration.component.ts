import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { IUser } from '../../login/IUser.Module';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private userser:UserService) { }

user:IUser={};
  flag:boolean=true;
  usernames:string[];
  contact:number[];
  userContact:number;
  contactNo:string;
  userCheck:string;
  ngOnInit() {
    // this.userser.GetUserNames().
    // subscribe(result=>{this.usernames=result as string[],this.ContactNo()})
    // this.flag=true;
  }
  registration():void
{{{debugger}}
  this.userser.userregistration(this.user).subscribe();
}
// ContactNo()
// {
//   this.userser.GetContactNo().
//   subscribe(result=>{this.contact=result as number[]})
// }
// UniqueUserName(username:string):boolean
// {
//   if(username=="")
//   {
//     return false
//   }
//   this.userCheck=this.usernames.find(x=>x.toLowerCase().trim()==username.toLowerCase())
//   console.log(this.userCheck)
//   if(this.userCheck==undefined)
//   {
//     return false;
//   }
//   else
//   {
//     return true;
//   }
// }
// UniqueContactNo(contactNo:string):boolean
// {
  
//   console.log(this.contact)
//   console.log(contactNo)
//   if(this.contactNo=="")
//   {
//     return false
//   }
//   this.userContact=this.contact.find(x=>x==contactNo as unknown as number)
//   if(this.userContact==undefined)
//   {
//     return false;
//   }
//   else
//   {
//     return true;
//   }
// }
}
