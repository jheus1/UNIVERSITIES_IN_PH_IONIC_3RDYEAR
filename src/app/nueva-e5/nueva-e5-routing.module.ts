import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaE5Page } from './nueva-e5.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaE5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaE5PageRoutingModule {}
