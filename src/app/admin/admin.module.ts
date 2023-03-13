import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReadexcelDirective } from '../directives/readexcel.directive';
import {MatTableModule} from '@angular/material/table';
import { UnitLoadComponent } from './pages/unit-load/unit-load.component';
import { MainPanelComponent } from './pages/main-panel/main-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { SearchUsersComponent } from './pages/search-users/search-users.component';
import { ModifyUsersComponent } from './pages/modify-users/modify-users.component';
import { GetSharesComponent } from './pages/get-shares/get-shares.component';
import { GetCampaignComponent } from './pages/get-campaign/get-campaign.component';
import { GetProfileComponent } from './pages/get-profile/get-profile.component';
import { GetAssignedPermissionsComponent } from './pages/get-assigned-permissions/get-assigned-permissions.component';
import { ModifyProfileComponent } from './pages/modify-profile/modify-profile.component';
import { LoadMasiveComponent } from './pages/load-masive/load-masive.component';



@NgModule({
  declarations: [
    HomeComponent,
    ReadexcelDirective,
    UnitLoadComponent,
    MainPanelComponent,
    PermissionsComponent,
    SearchUsersComponent,
    ModifyUsersComponent,
    GetSharesComponent,
    GetCampaignComponent,
    GetProfileComponent,
    GetAssignedPermissionsComponent,
    ModifyProfileComponent,
    LoadMasiveComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
