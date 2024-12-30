import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cagayan3Page } from './cagayan3.page';

const routes: Routes = [
  {
    path: '',
    component: Cagayan3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cagayan3PageRoutingModule {}
