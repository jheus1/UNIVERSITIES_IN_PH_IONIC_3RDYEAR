import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paranaque2PageRoutingModule } from './paranaque2-routing.module';

import { Paranaque2Page } from './paranaque2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paranaque2PageRoutingModule
  ],
  declarations: [Paranaque2Page]
})
export class Paranaque2PageModule {}
