import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guimaras1PageRoutingModule } from './guimaras1-routing.module';

import { Guimaras1Page } from './guimaras1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guimaras1PageRoutingModule
  ],
  declarations: [Guimaras1Page]
})
export class Guimaras1PageModule {}
