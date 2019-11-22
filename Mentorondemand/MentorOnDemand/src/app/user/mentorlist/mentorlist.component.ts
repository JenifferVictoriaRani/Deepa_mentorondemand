import { Component, OnInit } from '@angular/core';
import { IUser } from '../../login/IUser.Module';
import { IMentor } from './IMentor.Module';
//import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../user.service';
import { MentorService } from '../../mentor.service';
import { ISkill } from '../../Mentor/mentor-registration/ISkill.Module';
//import { ITechnology } from '../../techlist/ITechnology.Module';
import { ITraining } from './ITraining.Module';
import { ITechnology } from 'src/app/Admin/techlist/ITechnology.Module';

@Component({
  selector: 'app-mentorlist',
  templateUrl: './mentorlist.component.html',
  styleUrls: ['./mentorlist.component.css']
})
export class MentorlistComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router,private mlist:UserService,private msearch:MentorService) { }

mentorlists:IMentor[];
search:ITechnology[];
mentorreq:ITraining={};



 ngOnInit() {
  this.msearch.getskills().subscribe(res=>{this.search=res as ITechnology[]});
  this.mlist.mentorlist().subscribe(result=>{this.mentorlists=result as IMentor[]});
  // this.mlist.getrequest().subscribe(res=>{this.user=res as ITraining[]});
 
}

onChange(id:number)
{
  {{debugger}}
  this.msearch.searchskill(id).subscribe(result=>{this.mentorlists=result as IMentor[]});

  this.mlist.sid=id;    
}

onsubmit(mid:number)
{
  {{debugger}}
  // this.mlist.mentoradd(mid).subscribe(result=>{this.mentorreq=result as ITraining})
  this.mentorreq.mentorId=mid;
this.mentorreq.userId=this.mlist.activeUser;
this.mentorreq.skillId=this.mlist.sid;
this.mentorreq.status='Pending';
this.mlist.mentorreq(mid,this.mentorreq).subscribe(result=>{this.mentorreq=result as ITraining});


}

}
