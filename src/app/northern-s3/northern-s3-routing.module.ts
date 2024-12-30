import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthernS3Page } from './northern-s3.page';

const routes: Routes = [
  {
    path: '',
    component: NorthernS3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthernS3PageRoutingModule {}
