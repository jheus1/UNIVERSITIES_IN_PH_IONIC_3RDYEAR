import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyte6Page } from './leyte6.page';

const routes: Routes = [
  {
    path: '',
    component: Leyte6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyte6PageRoutingModule {}
