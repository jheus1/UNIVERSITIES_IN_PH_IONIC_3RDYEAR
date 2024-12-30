import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanaoDelnorte3Page } from './lanao-delnorte3.page';

const routes: Routes = [
  {
    path: '',
    component: LanaoDelnorte3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanaoDelnorte3PageRoutingModule {}
