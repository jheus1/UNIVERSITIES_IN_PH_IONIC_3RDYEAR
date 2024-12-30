import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zambales10Page } from './zambales10.page';

const routes: Routes = [
  {
    path: '',
    component: Zambales10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zambales10PageRoutingModule {}
