import { Component, OnInit } from '@angular/core';
import { MentorService } from '../../mentor.service';
import { IMentor } from '../../user/mentorlist/IMentor.Module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mentor-registration',
  templateUrl: './mentor-registration.component.html',
  styleUrls: ['./mentor-registration.component.css']
})
export class MentorRegistrationComponent implements OnInit {

  constructor(private http:HttpClient,private mentorser:MentorService) { }
mentor:IMentor={};

  ngOnInit() {
  }
  mentorreg():void
  {
    {{debugger}}
    this.mentorser.mentorregistration(this.mentor).subscribe();
  }


}

