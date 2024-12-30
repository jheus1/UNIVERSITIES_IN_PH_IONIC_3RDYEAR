import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasig2PageRoutingModule } from './pasig2-routing.module';

import { Pasig2Page } from './pasig2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasig2PageRoutingModule
  ],
  declarations: [Pasig2Page]
})
export class Pasig2PageModule {}
