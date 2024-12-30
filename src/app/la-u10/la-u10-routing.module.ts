import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaU10Page } from './la-u10.page';

const routes: Routes = [
  {
    path: '',
    component: LaU10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaU10PageRoutingModule {}
