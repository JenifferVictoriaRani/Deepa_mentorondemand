import { Component, OnInit } from '@angular/core';
import { IMentorSkill } from '../mentor-registration/IMentorskill.Module';
import { IUser } from 'src/app/login/IUser.Module';
import { MentorService } from 'src/app/mentor.service';
import { UserService } from 'src/app/user.service';
//import { MentorService } from '../mentor.service';
//import { IUser } from '../login/IUser.Module';
//import { IMentor } from '../user/mentorlist/IMentor.Module';
//import { IMentorSkill } from '../Mentor/mentor-registration/IMentorskill.Module';
//import { UserService } from '../user.service';

@Component({
  selector: 'app-updateskill',
  templateUrl: './updateskill.component.html',
  styleUrls: ['./updateskill.component.css']
})
export class UpdateskillComponent implements OnInit {

  constructor(private addnewskills:MentorService,private userser:UserService) { }
id:number;
mskill:IMentorSkill={};
user:IUser={};
  ngOnInit() {

  }

addnewskill()
{
  {{debugger}}
  this.addnewskills.addnew(this.userser.activementor.mentorid,this.mskill).subscribe(result=>{this.id=result as number});
}
}
