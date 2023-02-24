import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReadexcelDirective } from '../directives/readexcel.directive';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    HomeComponent,
    ReadexcelDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule
  ]
})
export class AdminModule { }
