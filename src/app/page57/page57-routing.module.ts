import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page57Page } from './page57.page';

const routes: Routes = [
  {
    path: '',
    component: Page57Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page57PageRoutingModule {}
