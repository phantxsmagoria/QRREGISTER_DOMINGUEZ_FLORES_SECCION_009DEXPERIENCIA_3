import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'home',
      name: 'Página Principal',
      redirecTo:'/profe'
    },

    {
      icon:'qr-code-outline',
      name: 'Generar QR',
      redirecTo:'/qr'
    },
    {
      icon:'calendar',
      name: 'Feriados',
      redirecTo:'/feriados'
    },

    {
      icon:'log-out-outline',
      name: 'Cerrar sesión',
      redirecTo:'/logout'
    },


  ];



}
