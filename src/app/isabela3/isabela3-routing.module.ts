import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Isabela3Page } from './isabela3.page';

const routes: Routes = [
  {
    path: '',
    component: Isabela3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Isabela3PageRoutingModule {}
