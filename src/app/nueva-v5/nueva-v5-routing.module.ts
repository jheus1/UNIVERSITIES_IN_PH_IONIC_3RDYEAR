import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaV5Page } from './nueva-v5.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaV5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaV5PageRoutingModule {}
