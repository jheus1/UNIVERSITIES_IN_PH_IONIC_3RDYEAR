import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Region12Page } from './region12.page';

const routes: Routes = [
  {
    path: '',
    component: Region12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Region12PageRoutingModule {}
