import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiquirjorPage } from './siquirjor.page';

const routes: Routes = [
  {
    path: '',
    component: SiquirjorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiquirjorPageRoutingModule {}
