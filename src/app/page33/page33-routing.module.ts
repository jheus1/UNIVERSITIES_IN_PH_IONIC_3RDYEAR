import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page33Page } from './page33.page';

const routes: Routes = [
  {
    path: '',
    component: Page33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page33PageRoutingModule {}
