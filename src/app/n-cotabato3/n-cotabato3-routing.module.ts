import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NCotabato3Page } from './n-cotabato3.page';

const routes: Routes = [
  {
    path: '',
    component: NCotabato3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NCotabato3PageRoutingModule {}
