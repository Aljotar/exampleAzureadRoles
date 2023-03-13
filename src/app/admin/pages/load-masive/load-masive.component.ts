import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';


export interface PeriodicElement {
  LastName: string;
  FirstName: number;
  Extension: number;
  NTLoguin: string;
}

@Component({
  selector: 'app-load-masive',
  templateUrl: './load-masive.component.html',
  styles: [
  ]
})
export class LoadMasiveComponent {


  displayedColumns: string[] = ['LastName', 'FirstName', 'Extension', 'NTLoguin'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  DataFromEventEmitter(data: any) {
    this.dataSource.data = data
    console.log(this.dataSource.data)
  }

  constructor( private userService: UserService ) {}

  ngOnInit(): void {

    this.userService.getProfile();
    
  }

}
