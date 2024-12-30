import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cagayan1Page } from './cagayan1.page';

const routes: Routes = [
  {
    path: '',
    component: Cagayan1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cagayan1PageRoutingModule {}
