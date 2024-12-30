import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuimarasPageRoutingModule } from './guimaras-routing.module';

import { GuimarasPage } from './guimaras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuimarasPageRoutingModule
  ],
  declarations: [GuimarasPage]
})
export class GuimarasPageModule {}
