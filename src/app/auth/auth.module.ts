import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { ShowForRolesDirective } from './directives/show-for-roles.directive';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    ShowForRolesDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ],
  exports: [
    ShowForRolesDirective
  ]
})
export class AuthModule { }
