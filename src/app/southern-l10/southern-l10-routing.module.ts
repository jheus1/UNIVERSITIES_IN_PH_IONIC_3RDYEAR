import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthernL10Page } from './southern-l10.page';

const routes: Routes = [
  {
    path: '',
    component: SouthernL10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthernL10PageRoutingModule {}
