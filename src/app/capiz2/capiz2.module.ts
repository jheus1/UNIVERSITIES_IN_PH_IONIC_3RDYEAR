import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Capiz2PageRoutingModule } from './capiz2-routing.module';

import { Capiz2Page } from './capiz2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Capiz2PageRoutingModule
  ],
  declarations: [Capiz2Page]
})
export class Capiz2PageModule {}
