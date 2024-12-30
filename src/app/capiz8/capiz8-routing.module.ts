import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capiz8Page } from './capiz8.page';

const routes: Routes = [
  {
    path: '',
    component: Capiz8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Capiz8PageRoutingModule {}
