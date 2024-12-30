import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iloilo6Page } from './iloilo6.page';

const routes: Routes = [
  {
    path: '',
    component: Iloilo6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iloilo6PageRoutingModule {}
