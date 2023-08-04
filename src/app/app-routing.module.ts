import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from './side/apply-leave/apply-leave.component';
import { MyLeavesComponent } from './my-leaves/my-leaves.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { AugustaHolidaysComponent } from './augusta-holidays/augusta-holidays.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path:'apply-leave',
    component:ApplyLeaveComponent
  },
  {
      path:'my-leave',
      component:MyLeavesComponent
  },
  {
    path:'leave-request',
    component:LeaveRequestsComponent
  },
  {
    path:'augusta-holiday',
    component:AugustaHolidaysComponent
  },
  {
    path:'my-profile',
    component:MyProfileComponent
  },
  {
    path:'changepassword',
    component:ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
