import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home0Page } from './home0.page';

const routes: Routes = [
  {
    path: '',
    component: Home0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home0PageRoutingModule {}
