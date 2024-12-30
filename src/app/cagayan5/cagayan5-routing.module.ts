import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cagayan5Page } from './cagayan5.page';

const routes: Routes = [
  {
    path: '',
    component: Cagayan5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cagayan5PageRoutingModule {}
