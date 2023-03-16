import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAssignedPermissionsComponent } from './pages/get-assigned-permissions/get-assigned-permissions.component';
import { GetCampaignComponent } from './pages/get-campaign/get-campaign.component';
import { GetProfileComponent } from './pages/get-profile/get-profile.component';
import { GetSharesComponent } from './pages/get-shares/get-shares.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadMasiveComponent } from './pages/load-masive/load-masive.component';
import { ModifyProfileComponent } from './pages/modify-profile/modify-profile.component';
import { ModifyUsersComponent } from './pages/modify-users/modify-users.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { SearchUsersComponent } from './pages/search-users/search-users.component';
import { UnitLoadComponent } from './pages/unit-load/unit-load.component';

import { hasRole, HasRoleGuard } from '../auth/guards/has-role.guard';


const routes: Routes = [
  {
    path: '000ADP', component: HomeComponent,
    canActivate: [hasRole(['ADMPROY', 'Admin'])],
    canLoad: [hasRole(['ADMPROY', 'Admin'])]
  },
  {
    path: '000ADU', component: UnitLoadComponent,
    canActivate: [hasRole(['ADMPROY', 'Admin'])],
    canLoad: [hasRole(['ADMPROY', 'Admin'])]

  },
  {
    path: '000ADUM', component: LoadMasiveComponent,
    canActivate: [hasRole(['Agente'])],
    canLoad: [hasRole(['Agente'])]

  },
  {
    path: '000AP', component: PermissionsComponent,
    canActivate: [hasRole(['Agente'])],
    canLoad: [hasRole(['Agente'])]
  },
  {
    path: '000BUR', component: SearchUsersComponent,
    canActivate: [hasRole(['ADMPROY', 'Admin'])],
    canLoad: [hasRole(['ADMPROY', 'Admin'])]
    
  },
  {
    path: '000MU', component: ModifyUsersComponent,
    canActivate: [hasRole(['ADMPROY', 'Admin'])],
    canLoad: [hasRole(['ADMPROY', 'Admin'])]
  },
  {
    path: '000OA', component: GetSharesComponent,
    canActivate: [hasRole(['ADMPROY', 'Admin'])],
    canLoad: [hasRole(['ADMPROY', 'Admin'])]
  },
  {
    path: '000OAS', component: HomeComponent,
    canActivate: [hasRole(['ADMPROY', 'Admin'])],
    canLoad: [hasRole(['ADMPROY', 'Admin'])]
  },
  {
    path: '000OC', component: GetCampaignComponent,
    canActivate: [hasRole(['ADMPROY', 'Admin'])],
    canLoad: [hasRole(['ADMPROY', 'Admin'])]
  },
  {
    path: '000OP', component: GetProfileComponent,
    canActivate: [hasRole(['ADMPROY', 'Admin'])],
    canLoad: [hasRole(['ADMPROY', 'Admin'])]
  },
  {
    path: '000OPAP', component: GetAssignedPermissionsComponent,
    canActivate: [hasRole(['ADMPROY', 'Admin'])],
    canLoad: [hasRole(['ADMPROY', 'Admin'])]
  },
  {
    path: '000UDP', component: ModifyProfileComponent,
    canActivate: [hasRole(['ADMPROY', 'Admin'])],
    canLoad: [hasRole(['ADMPROY', 'Admin'])]
  },
  {
    path: '**', redirectTo: '000ADP'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class AdminRoutingModule { }