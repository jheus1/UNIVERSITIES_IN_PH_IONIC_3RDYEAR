import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PangasinanPage } from './pangasinan.page';

const routes: Routes = [
  {
    path: '',
    component: PangasinanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PangasinanPageRoutingModule {}
