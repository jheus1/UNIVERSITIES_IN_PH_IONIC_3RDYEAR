import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page54Page } from './page54.page';

const routes: Routes = [
  {
    path: '',
    component: Page54Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page54PageRoutingModule {}
