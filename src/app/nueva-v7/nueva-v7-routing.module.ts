import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaV7Page } from './nueva-v7.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaV7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaV7PageRoutingModule {}
