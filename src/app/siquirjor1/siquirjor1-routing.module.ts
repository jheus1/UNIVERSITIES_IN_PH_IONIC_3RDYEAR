import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Siquirjor1Page } from './siquirjor1.page';

const routes: Routes = [
  {
    path: '',
    component: Siquirjor1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Siquirjor1PageRoutingModule {}
