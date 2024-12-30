import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page49Page } from './page49.page';

const routes: Routes = [
  {
    path: '',
    component: Page49Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page49PageRoutingModule {}
