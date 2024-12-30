import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsabelaPage } from './isabela.page';

const routes: Routes = [
  {
    path: '',
    component: IsabelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsabelaPageRoutingModule {}
