import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Siquirjor5Page } from './siquirjor5.page';

const routes: Routes = [
  {
    path: '',
    component: Siquirjor5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Siquirjor5PageRoutingModule {}
