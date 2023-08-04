import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import { FooterComponent } from './footer/footer.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { MyLeavesComponent } from './my-leaves/my-leaves.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { AugustaHolidaysComponent } from './augusta-holidays/augusta-holidays.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ApplyLeaveComponent,
    MyLeavesComponent,
    LeaveRequestsComponent,
    AugustaHolidaysComponent,
    MyProfileComponent,
    ChangePasswordComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSidenavModule,
    LayoutModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
