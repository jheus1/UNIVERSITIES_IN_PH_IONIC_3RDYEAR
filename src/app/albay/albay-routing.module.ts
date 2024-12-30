import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbayPage } from './albay.page';

const routes: Routes = [
  {
    path: '',
    component: AlbayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbayPageRoutingModule {}
