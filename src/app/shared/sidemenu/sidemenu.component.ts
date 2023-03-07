import { Component } from '@angular/core';

interface MenuItem {
  texto: string,
  ruta: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    .list-group-item.active {
      background: linear-gradient(#7A2180 16.67%,#E40276 95.31%);
      border-style: none
    }
  `
  ]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      texto: 'Carga masiva',
      ruta: './admin/masiva'
    },
    {
      texto: 'Carga unitaria',
      ruta: './admin/unitaria'
    },
    {
      texto: 'otros',
      ruta: './admin/panel'
    }
  ]

}
