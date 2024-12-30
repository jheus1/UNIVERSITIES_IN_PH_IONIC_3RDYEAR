import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guimaras2PageRoutingModule } from './guimaras2-routing.module';

import { Guimaras2Page } from './guimaras2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guimaras2PageRoutingModule
  ],
  declarations: [Guimaras2Page]
})
export class Guimaras2PageModule {}
