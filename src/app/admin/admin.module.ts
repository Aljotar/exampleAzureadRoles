import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReadexcelDirective } from '../directives/readexcel.directive';
import {MatTableModule} from '@angular/material/table';
import { UnitLoadComponent } from './pages/unit-load/unit-load.component';
import { MainPanelComponent } from './pages/main-panel/main-panel.component';



@NgModule({
  declarations: [
    HomeComponent,
    ReadexcelDirective,
    UnitLoadComponent,
    MainPanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule
  ]
})
export class AdminModule { }
