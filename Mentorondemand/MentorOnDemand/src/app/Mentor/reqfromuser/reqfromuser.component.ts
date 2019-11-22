import { Component, OnInit } from '@angular/core';
import { MentorService } from '../../mentor.service';
import { UserService } from '../../user.service';
import { ITraining } from '../../user/mentorlist/ITraining.Module';

@Component({
  selector: 'app-reqfromuser',
  templateUrl: './reqfromuser.component.html',
  styleUrls: ['./reqfromuser.component.css']
})
export class ReqfromuserComponent implements OnInit {

  constructor(private mentorser:MentorService,private userser:UserService) { }
userreq:ITraining[];

  
  ngOnInit() {
    {{debugger}}
    this.mentorser.reqfromuser().subscribe(result=>{this.userreq=result as ITraining[]})
  }



}
