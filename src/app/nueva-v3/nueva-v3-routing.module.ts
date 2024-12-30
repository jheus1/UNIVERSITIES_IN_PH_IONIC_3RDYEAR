import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaV3Page } from './nueva-v3.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaV3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaV3PageRoutingModule {}
