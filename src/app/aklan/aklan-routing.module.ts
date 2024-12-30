import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AklanPage } from './aklan.page';

const routes: Routes = [
  {
    path: '',
    component: AklanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AklanPageRoutingModule {}
