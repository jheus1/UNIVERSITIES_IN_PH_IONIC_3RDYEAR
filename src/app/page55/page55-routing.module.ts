import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page55Page } from './page55.page';

const routes: Routes = [
  {
    path: '',
    component: Page55Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page55PageRoutingModule {}
