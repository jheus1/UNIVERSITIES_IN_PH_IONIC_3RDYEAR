import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuirinoPage } from './quirino.page';

const routes: Routes = [
  {
    path: '',
    component: QuirinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuirinoPageRoutingModule {}
