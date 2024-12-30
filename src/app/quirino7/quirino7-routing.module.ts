import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quirino7Page } from './quirino7.page';

const routes: Routes = [
  {
    path: '',
    component: Quirino7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quirino7PageRoutingModule {}
