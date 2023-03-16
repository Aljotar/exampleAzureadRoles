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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  displayedColumns: string[] = ['LastName', 'FirstName', 'Extension', 'NTLoguin'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  DataFromEventEmitter(data: any) {
    this.dataSource.data = data
    console.log(this.dataSource.data)
  }

  constructor( private userService: UserService ) {}

  ngOnInit(): void {

    this.userService.getProfile();
    this.userService.GetAccion();
    
  }



}
