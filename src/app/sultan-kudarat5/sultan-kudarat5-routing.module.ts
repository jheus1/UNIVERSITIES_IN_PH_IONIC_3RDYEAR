import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SultanKudarat5Page } from './sultan-kudarat5.page';

const routes: Routes = [
  {
    path: '',
    component: SultanKudarat5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SultanKudarat5PageRoutingModule {}
