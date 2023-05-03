import {Component} from "@angular/core";

@Component({
  selector: "app-contador", // como quiero llamar mi componente
//template:`<h1>Este es el contador</h1>
//   <h3>El contador de likes : {{contador}}</h3>
// <button (click)="increaseBy(1)">+1</button>
// <button (click)="increaseBy(-1)">-1</button>
// <button (click)="reset()">reset</button> `, //esta es en linea
//template solo esta esperando que sea un string, la otra es template Url:
template:"<h1>Este es el contador</h1>",

})


export class ContadorComponent{
  contador: number=0;
  increaseBy( value:number):void{
    this.contador+= value;
  }

  reset():void{
    this.contador=10;
  }
}

