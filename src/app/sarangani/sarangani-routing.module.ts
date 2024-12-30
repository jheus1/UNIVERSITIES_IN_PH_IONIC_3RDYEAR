import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaranganiPage } from './sarangani.page';

const routes: Routes = [
  {
    path: '',
    component: SaranganiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaranganiPageRoutingModule {}
