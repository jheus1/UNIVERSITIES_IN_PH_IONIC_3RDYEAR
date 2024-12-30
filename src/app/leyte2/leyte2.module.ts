import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyte2PageRoutingModule } from './leyte2-routing.module';

import { Leyte2Page } from './leyte2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyte2PageRoutingModule
  ],
  declarations: [Leyte2Page]
})
export class Leyte2PageModule {}
