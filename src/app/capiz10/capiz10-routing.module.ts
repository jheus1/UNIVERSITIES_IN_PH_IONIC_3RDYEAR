import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capiz10Page } from './capiz10.page';

const routes: Routes = [
  {
    path: '',
    component: Capiz10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Capiz10PageRoutingModule {}
