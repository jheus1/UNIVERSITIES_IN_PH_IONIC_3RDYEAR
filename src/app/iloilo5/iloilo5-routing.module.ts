import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iloilo5Page } from './iloilo5.page';

const routes: Routes = [
  {
    path: '',
    component: Iloilo5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iloilo5PageRoutingModule {}
