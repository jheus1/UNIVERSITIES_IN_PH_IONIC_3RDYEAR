import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page56Page } from './page56.page';

const routes: Routes = [
  {
    path: '',
    component: Page56Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page56PageRoutingModule {}
