import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AuthModule } from '../auth/auth.module';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';



@NgModule({
  declarations: [
    SidemenuComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule
  ],
  exports: [
    SidemenuComponent,
    SpinnerComponent
  ],
  providers: [
    SpinnerService
  ]
})
export class SharedModule { }
