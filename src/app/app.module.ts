import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.componet';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ContadorComponent } from './contador/contador.component';
import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';

@NgModule({
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent, ContadorComponent, UserComponent, ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
