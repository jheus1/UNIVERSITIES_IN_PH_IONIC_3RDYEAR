import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page53Page } from './page53.page';

const routes: Routes = [
  {
    path: '',
    component: Page53Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page53PageRoutingModule {}
