import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NCotabato5Page } from './n-cotabato5.page';

const routes: Routes = [
  {
    path: '',
    component: NCotabato5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NCotabato5PageRoutingModule {}
