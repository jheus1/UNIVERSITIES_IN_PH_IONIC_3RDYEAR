import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NCotabato8Page } from './n-cotabato8.page';

const routes: Routes = [
  {
    path: '',
    component: NCotabato8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NCotabato8PageRoutingModule {}
