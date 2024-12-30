import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capiz1Page } from './capiz1.page';

const routes: Routes = [
  {
    path: '',
    component: Capiz1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Capiz1PageRoutingModule {}
