import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page52Page } from './page52.page';

const routes: Routes = [
  {
    path: '',
    component: Page52Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page52PageRoutingModule {}
