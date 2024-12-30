import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guimaras3PageRoutingModule } from './guimaras3-routing.module';

import { Guimaras3Page } from './guimaras3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guimaras3PageRoutingModule
  ],
  declarations: [Guimaras3Page]
})
export class Guimaras3PageModule {}
