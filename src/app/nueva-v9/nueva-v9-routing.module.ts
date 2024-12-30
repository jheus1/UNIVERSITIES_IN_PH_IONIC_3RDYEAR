import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaV9Page } from './nueva-v9.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaV9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaV9PageRoutingModule {}
