import { Component } from "@angular/core"; //linea de importacion para poder utilizar component

@Component //componente
({
  selector: "app-empleados",
  templateUrl: "./empleados.component.html",//si estuviramos trabajando con el archivo principal iria al de app.component.html
  styleUrls: ['./empleados.component.css']// la hoja de estilos no es necesaria, se puede trabajar con las de en linea. boostrap(?)

})

export class EmpleadosComponent{ //definicion de la clase

}
