import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sorsogon2Page } from './sorsogon2.page';

const routes: Routes = [
  {
    path: '',
    component: Sorsogon2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sorsogon2PageRoutingModule {}
