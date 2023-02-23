import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
