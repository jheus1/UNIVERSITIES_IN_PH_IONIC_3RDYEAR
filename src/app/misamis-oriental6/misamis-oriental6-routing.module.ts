import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOriental6Page } from './misamis-oriental6.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOriental6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOriental6PageRoutingModule {}
