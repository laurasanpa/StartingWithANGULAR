import { Component } from '@angular/core';
//Es un decorador, se pone antes de la clase
//y permite personalizarlo.
@Component({
  selector: 'app-root', //Nombre del componente de index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myName:string = "Alicia";
}
