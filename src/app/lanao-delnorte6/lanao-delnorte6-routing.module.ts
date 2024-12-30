import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanaoDelnorte6Page } from './lanao-delnorte6.page';

const routes: Routes = [
  {
    path: '',
    component: LanaoDelnorte6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanaoDelnorte6PageRoutingModule {}
