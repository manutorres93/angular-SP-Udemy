import { Component } from '@angular/core';

@Component({
  selector: 'app-users-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public name: string="Veronica";
  public age: number=27;

  public get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getUserDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeName():void{
    this.name= "Manuela";
  }

  changeAge():void{
    this.age= 29;

  }
  resetForm():void{
    this.name="Veronica";
    this.age=27; 
  }


}
