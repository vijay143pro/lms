import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports :[
    SidebarComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
