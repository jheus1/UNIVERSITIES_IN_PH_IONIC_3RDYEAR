import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cagayan9Page } from './cagayan9.page';

const routes: Routes = [
  {
    path: '',
    component: Cagayan9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cagayan9PageRoutingModule {}
