import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page51Page } from './page51.page';

const routes: Routes = [
  {
    path: '',
    component: Page51Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page51PageRoutingModule {}
