import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosSPage } from './ilocos-s.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosSPageRoutingModule {}
