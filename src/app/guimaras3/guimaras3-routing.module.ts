import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guimaras3Page } from './guimaras3.page';

const routes: Routes = [
  {
    path: '',
    component: Guimaras3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guimaras3PageRoutingModule {}
