import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaV8Page } from './nueva-v8.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaV8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaV8PageRoutingModule {}
