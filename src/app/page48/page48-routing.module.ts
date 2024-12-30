import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page48Page } from './page48.page';

const routes: Routes = [
  {
    path: '',
    component: Page48Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page48PageRoutingModule {}
