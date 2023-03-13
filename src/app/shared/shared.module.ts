import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
