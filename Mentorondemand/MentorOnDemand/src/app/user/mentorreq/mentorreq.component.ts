import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ITraining } from '../mentorlist/ITraining.Module';

@Component({
  selector: 'app-mentorreq',
  templateUrl: './mentorreq.component.html',
  styleUrls: ['./mentorreq.component.css']
})
export class MentorreqComponent implements OnInit {

  constructor(private service:UserService) { }
user:ITraining[];
  ngOnInit() {
    {{debugger}}
    this.service.getrequest().subscribe(result=>{this.user=result as ITraining[]});
  }

}
