import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesModule } from '../app/clientes/clientes.module';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:''},
  {path:'clientes', loadChildren:()=> ClientesModule}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
