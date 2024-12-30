import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Siquirjor2Page } from './siquirjor2.page';

const routes: Routes = [
  {
    path: '',
    component: Siquirjor2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Siquirjor2PageRoutingModule {}
