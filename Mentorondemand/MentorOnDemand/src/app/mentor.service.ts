import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMentor } from './user/mentorlist/IMentor.Module';
import { Observable } from 'rxjs';
//import { ITechnology } from './techlist/ITechnology.Module';
import { unescapeIdentifier } from '@angular/compiler';
import { IMentorSkill } from './Mentor/mentor-registration/IMentorskill.Module';


@Injectable({
  providedIn: 'root'
})
export class MentorService {
  constructor(private http:HttpClient) { }
readonly rootURL='http://localhost:26546/api/mentor/';
readonly rootURL1='http://localhost:1350/api/user/';
readonly rootURL2='http://localhost:26546/api/admin/';
sid:number=null;
mentors:IMentor[];
activementor:number=null;
mentorregistration(mentor:IMentor)
{
  {{debugger}}
return this.http.post(this.rootURL+'Rementor',mentor,
{headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
   }

 searchskill(skid:number)
 {
   {{debugger}}
  return this.http.get(this.rootURL1+'/search'+'/'+skid)
 }  
 
getskills()
{
  {{debugger}}
  return this.http.get(this.rootURL2+'gettech/');  
}

getmentor()
{
  {{debugger}}
  return this.http.get(this.rootURL+'getmentordetails/');  
  
}

addnew(id:number,service:IMentorSkill)
{
  {{debugger}}
  service.mid=id;
  return this.http.post(this.rootURL+'addnewskill/',service, 
  {headers: new HttpHeaders({ 'Content-Type':'application/json' })
});
}

reqfromuser()
{
{{debugger}}
  return this.http.get(this.rootURL+'ViewRequest/'+ this.activementor);  
}
}
