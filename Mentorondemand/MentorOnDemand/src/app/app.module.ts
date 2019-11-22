import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { MentorRegistrationComponent } from './Mentor/mentor-registration/mentor-registration.component';
//import { TechlistComponent } from './techlist/techlist.component';
import { MentorlistComponent } from './user/mentorlist/mentorlist.component';
//import { UpdateskillComponent } from './updateskill/updateskill.component';
import { MentorreqComponent } from './user/mentorreq/mentorreq.component';
import { ReqfromuserComponent } from './Mentor/reqfromuser/reqfromuser.component';
import { TechlistComponent } from './Admin/techlist/techlist.component';
import { UpdateskillComponent } from './Mentor/updateskill/updateskill.component';


@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    LoginComponent,
    UserRegistrationComponent,
    MentorRegistrationComponent,
    TechlistComponent,
    MentorlistComponent,
    UpdateskillComponent,
    MentorreqComponent,
    ReqfromuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




