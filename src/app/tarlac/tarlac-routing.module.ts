import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarlacPage } from './tarlac.page';

const routes: Routes = [
  {
    path: '',
    component: TarlacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarlacPageRoutingModule {}
