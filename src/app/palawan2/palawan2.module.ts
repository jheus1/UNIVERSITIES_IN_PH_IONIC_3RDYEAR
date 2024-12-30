import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Palawan2PageRoutingModule } from './palawan2-routing.module';

import { Palawan2Page } from './palawan2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Palawan2PageRoutingModule
  ],
  declarations: [Palawan2Page]
})
export class Palawan2PageModule {}
