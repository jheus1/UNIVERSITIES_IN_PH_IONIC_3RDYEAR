import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaV10Page } from './nueva-v10.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaV10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaV10PageRoutingModule {}
