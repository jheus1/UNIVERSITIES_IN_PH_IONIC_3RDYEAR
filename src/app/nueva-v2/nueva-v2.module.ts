import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaV2PageRoutingModule } from './nueva-v2-routing.module';

import { NuevaV2Page } from './nueva-v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaV2PageRoutingModule
  ],
  declarations: [NuevaV2Page]
})
export class NuevaV2PageModule {}
