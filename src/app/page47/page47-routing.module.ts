import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page47Page } from './page47.page';

const routes: Routes = [
  {
    path: '',
    component: Page47Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page47PageRoutingModule {}
