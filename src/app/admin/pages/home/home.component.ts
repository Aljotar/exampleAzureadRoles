import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  LastName: string;
  FirstName: number;
  Extension: number;
  NTLoguin: string;
}

const dataElement: PeriodicElement[] = [];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  excelData!: PeriodicElement;
  displayedColumns: string[] = ['LastName', 'FirstName', 'Extension', 'NTLoguin'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  DataFromEventEmitter(data: any) {
    this.dataSource.data = data
    console.log(this.dataSource.data)
  }

}
