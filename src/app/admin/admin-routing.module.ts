import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainPanelComponent } from './pages/main-panel/main-panel.component';
import { UnitLoadComponent } from './pages/unit-load/unit-load.component';


const routes: Routes = [
  {
    path: 'masiva', component: HomeComponent
  },
  {
    path: 'unitaria', component: UnitLoadComponent
  },
  {
    path: 'panel', component: MainPanelComponent
  },
  {
    path: '**', redirectTo: 'masiva'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class AdminRoutingModule { }