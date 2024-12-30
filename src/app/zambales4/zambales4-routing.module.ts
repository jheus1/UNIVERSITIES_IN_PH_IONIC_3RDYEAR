import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zambales4Page } from './zambales4.page';

const routes: Routes = [
  {
    path: '',
    component: Zambales4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zambales4PageRoutingModule {}
