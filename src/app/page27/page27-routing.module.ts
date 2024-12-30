import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page27Page } from './page27.page';

const routes: Routes = [
  {
    path: '',
    component: Page27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page27PageRoutingModule {}
