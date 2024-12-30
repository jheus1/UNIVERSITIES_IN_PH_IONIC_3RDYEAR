import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Antique8Page } from './antique8.page';

const routes: Routes = [
  {
    path: '',
    component: Antique8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Antique8PageRoutingModule {}
