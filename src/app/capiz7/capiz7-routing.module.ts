import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capiz7Page } from './capiz7.page';

const routes: Routes = [
  {
    path: '',
    component: Capiz7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Capiz7PageRoutingModule {}
