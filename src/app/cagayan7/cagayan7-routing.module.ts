import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cagayan7Page } from './cagayan7.page';

const routes: Routes = [
  {
    path: '',
    component: Cagayan7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cagayan7PageRoutingModule {}
