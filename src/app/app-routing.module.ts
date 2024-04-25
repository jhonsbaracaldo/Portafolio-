import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortafolioComponent } from './Templates/portafolio/portafolio.component';



const routes: Routes = [

  {path:'About',component:PortafolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
