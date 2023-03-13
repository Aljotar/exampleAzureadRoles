import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AccionResult, UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    .list-group-item.active {
      background: linear-gradient(#7A2180 16.67%,#E40276 95.31%);
      border-style: none;
    },
    li {
      cursor: pointer;
    }
  `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidemenuComponent implements OnInit{


  public accionList: AccionResult[] = [];


  constructor (private userService: UserService) { }


  ngOnInit(): void {

    this.userService.GetAccion()
      .subscribe(resp => { console.log(resp); })
      
    this.userService.getEmployeeData();
    
  }


}
