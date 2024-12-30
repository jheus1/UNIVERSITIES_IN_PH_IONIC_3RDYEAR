import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Siquirjor4Page } from './siquirjor4.page';

const routes: Routes = [
  {
    path: '',
    component: Siquirjor4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Siquirjor4PageRoutingModule {}
