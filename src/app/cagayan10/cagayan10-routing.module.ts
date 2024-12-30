import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cagayan10Page } from './cagayan10.page';

const routes: Routes = [
  {
    path: '',
    component: Cagayan10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cagayan10PageRoutingModule {}
