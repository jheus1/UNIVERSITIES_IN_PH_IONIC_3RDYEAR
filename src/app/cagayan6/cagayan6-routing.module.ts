import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cagayan6Page } from './cagayan6.page';

const routes: Routes = [
  {
    path: '',
    component: Cagayan6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cagayan6PageRoutingModule {}
