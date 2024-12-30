import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Siquirjor3Page } from './siquirjor3.page';

const routes: Routes = [
  {
    path: '',
    component: Siquirjor3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Siquirjor3PageRoutingModule {}
