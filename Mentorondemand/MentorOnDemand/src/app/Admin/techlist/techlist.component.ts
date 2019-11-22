import { Component, OnInit } from '@angular/core';
//import { AdminService } from '../admin.service';
import { ITechnology } from './ITechnology.Module';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/admin.service';


@Component({
  selector: 'app-techlist',
  templateUrl: './techlist.component.html',
  styleUrls: ['./techlist.component.css']
})
export class TechlistComponent implements OnInit {

  constructor(private http:HttpClient,private list:AdminService) { }

  tech:ITechnology[];

  ngOnInit()
   {
     {{debugger}}
    return this.list.listoftech().subscribe(result=>this.tech=result as ITechnology[]);
   }

}
