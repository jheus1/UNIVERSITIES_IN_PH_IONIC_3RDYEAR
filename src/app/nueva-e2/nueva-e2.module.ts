import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaE2PageRoutingModule } from './nueva-e2-routing.module';

import { NuevaE2Page } from './nueva-e2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaE2PageRoutingModule
  ],
  declarations: [NuevaE2Page]
})
export class NuevaE2PageModule {}
