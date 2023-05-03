import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'miprimeraApp';
  contador: number= 0;

  increaseBy( value:number):void{
    this.contador+= value;
  }

  reset():void{
    this.contador=10;
  }
}
