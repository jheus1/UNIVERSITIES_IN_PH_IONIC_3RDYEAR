import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page50Page } from './page50.page';

const routes: Routes = [
  {
    path: '',
    component: Page50Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page50PageRoutingModule {}
