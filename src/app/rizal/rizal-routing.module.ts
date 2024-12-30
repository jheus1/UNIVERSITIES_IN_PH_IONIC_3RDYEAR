import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RizalPage } from './rizal.page';

const routes: Routes = [
  {
    path: '',
    component: RizalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RizalPageRoutingModule {}
