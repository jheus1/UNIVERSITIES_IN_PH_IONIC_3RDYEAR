import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuimarasPage } from './guimaras.page';

const routes: Routes = [
  {
    path: '',
    component: GuimarasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuimarasPageRoutingModule {}
