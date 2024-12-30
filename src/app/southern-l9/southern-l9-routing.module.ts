import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthernL9Page } from './southern-l9.page';

const routes: Routes = [
  {
    path: '',
    component: SouthernL9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthernL9PageRoutingModule {}
