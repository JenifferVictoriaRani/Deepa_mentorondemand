import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { MentorRegistrationComponent } from './Mentor/mentor-registration/mentor-registration.component';
//import { TechlistComponent } from './techlist/techlist.component';
import { MentorlistComponent } from './user/mentorlist/mentorlist.component';
import { StartpageComponent } from './startpage/startpage.component';
import { MentorreqComponent } from './user/mentorreq/mentorreq.component';
//import { UpdateskillComponent } from './updateskill/updateskill.component';
import { ReqfromuserComponent } from './Mentor/reqfromuser/reqfromuser.component';
import { UpdateskillComponent } from './Mentor/updateskill/updateskill.component';
import { TechlistComponent } from './Admin/techlist/techlist.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/startpage',pathMatch:'full'
  },
  {
path:'Login',
component:LoginComponent
},
{
  path:'userreg',
  component:UserRegistrationComponent
  },
  {
    path:'mentorreg',
    component:MentorRegistrationComponent
    },
    {
      path:'listtech',
      component:TechlistComponent
      },
      {
        path:'mentorlist',
        component:MentorlistComponent
        },
        {
          path:'startpage',
          component:StartpageComponent
          },
      {
        path:'mentorreq',
        component:MentorreqComponent
        },
        {
          path:'reqfromuser',
          component:ReqfromuserComponent
          },
          {
            path:'addskill',
            component:UpdateskillComponent
            } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
