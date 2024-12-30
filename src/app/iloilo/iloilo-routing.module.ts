import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IloiloPage } from './iloilo.page';

const routes: Routes = [
  {
    path: '',
    component: IloiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IloiloPageRoutingModule {}
