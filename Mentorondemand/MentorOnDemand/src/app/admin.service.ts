import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
readonly rootURL1='http://localhost:26546/api/admin/';

listoftech()
{
 return this.http.get(this.rootURL1+'gettech');
}

}
