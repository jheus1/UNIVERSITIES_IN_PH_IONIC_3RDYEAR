import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Antique2PageRoutingModule } from './antique2-routing.module';

import { Antique2Page } from './antique2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Antique2PageRoutingModule
  ],
  declarations: [Antique2Page]
})
export class Antique2PageModule {}
