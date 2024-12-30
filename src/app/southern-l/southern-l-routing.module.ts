import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthernLPage } from './southern-l.page';

const routes: Routes = [
  {
    path: '',
    component: SouthernLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthernLPageRoutingModule {}
