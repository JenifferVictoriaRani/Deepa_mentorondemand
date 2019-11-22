import { Injectable } from '@angular/core';

import { IUser } from './login/IUser.Module';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IMentor } from './user/mentorlist/IMentor.Module';
//import { ITechnology } from './techlist/ITechnology.Module';
import { ITraining } from './user/mentorlist/ITraining.Module';
import { ILogin } from './login/ILogin.Module';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private route:Router) { 
  }
  user:IUser=null;
  sid:number=null;
  activementor:IMentor=null;
  count:number=0;
  view:number=1;
  flag:boolean=false;
  activeUser:number=null;
  readonly rootURL3='http://localhost:32359/api/';
  readonly rootURL='http://localhost:1350/api/user/';
  readonly rootURL1='http://localhost:26546/api/admin/';
  readonly rootURL2='http://localhost:26546/api/mentor/';

  adminlogin(username:string,password:string)
  {
    return this.http.get<ILogin>(this.rootURL1+'loginadmin/'+username+'/'+password+'/',
    {headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });    
  }
  GetTokenAdmin(username:string)
  {
    
      this.http.get(this.rootURL3+'Auth/GetAdminToken/'+username).
      subscribe((res:any)=>{
        localStorage.setItem('token1',res.token);
        console.log(res.token);
        this.route.navigateByUrl('/listtech');
      })
    
  }

  userlogin(username:string,password:string)
  {   {{debugger}}
    return this.http.get<ILogin>(this.rootURL+'loginuser/'+username+'/'+password+'/',
    {headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });   
  }
  GetTokenUser(username:string)
  {
    
      this.http.get(this.rootURL3+'Auth/GetUserToken/'+username).
      subscribe((res:any)=>{
        localStorage.setItem('token2',res.token);
        console.log(res.token);
        this.route.navigateByUrl('/mentorlist');
      })
    
  }
  

 mentorlogin(username:string,password:string)
  {
    return this.http.get<IMentor>(this.rootURL2+'mentorlogin/'+username+'/'+password+'/',
    {headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
    
  }
  GetTokenMentor(username:string)
  {
   
      this.http.get(this.rootURL3+'Auth/GetMentorToken/'+username).
      subscribe((res:any)=>{
        localStorage.setItem('token3',res.token);
        console.log(res.token);
        this.route.navigateByUrl('/reqfromuser');
      })
    
  }

  userregistration(user:IUser)
  {
    {{debugger}}
  return this.http.post(this.rootURL+'RegUser/',user,
  {headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  // GetUserNames()
  // {
  //   return this.http.get(this.rootURL+'Username')
  // }
  // GetContactNo()
  // {
  //   return this.http.get(this.rootURL+'ContactNo')
  // }

  // check()
  // {
  //   this.count++;
  //   if(this.count==2 || this.activeUser!=null)
  //   {
  //     this.count=0;
  //     this.flag=true;
  //   }
  //   if(this.activeUser.RoleId==1)
  //   {
  //     this.view=2;
  //   }
  // }
  
  mentorlist()
  {
    return this.http.get(this.rootURL2+'getmentordeatils/')
  }

mentoradd(mid:number)
{
var details=
{
  userId:this.user,
 mentorId:mid,
  skillId:this.sid,
  status:"False"
}
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post(this.rootURL,details,httpOptions); 
}


getrequest()
{
  return this.http.get(this.rootURL+'Getrequest/'+this.activementor);
}

mentorreq(mid:number,mentor:ITraining)
{
  {{debugger}}
return this.http.post(this.rootURL+'InsertNomination/'+mid,mentor, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })
});
}

}