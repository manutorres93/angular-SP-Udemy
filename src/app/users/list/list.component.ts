import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public userNames: string[]=["Manuela", "Verónica", "Jaime", "Monica"]
  public deletedUser?: string; //o public deletedUser: string= " ";

  removeLastUser():void{
    this.deletedUser= this.userNames.pop();


  }

}
