import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanaoDelnorte2Page } from './lanao-delnorte2.page';

const routes: Routes = [
  {
    path: '',
    component: LanaoDelnorte2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanaoDelnorte2PageRoutingModule {}
