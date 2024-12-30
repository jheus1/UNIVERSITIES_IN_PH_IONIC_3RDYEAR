import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guimaras2Page } from './guimaras2.page';

const routes: Routes = [
  {
    path: '',
    component: Guimaras2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guimaras2PageRoutingModule {}
