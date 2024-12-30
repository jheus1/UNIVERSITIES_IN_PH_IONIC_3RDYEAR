import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page23Page } from './page23.page';

const routes: Routes = [
  {
    path: '',
    component: Page23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page23PageRoutingModule {}
