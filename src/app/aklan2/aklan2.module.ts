import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aklan2PageRoutingModule } from './aklan2-routing.module';

import { Aklan2Page } from './aklan2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aklan2PageRoutingModule
  ],
  declarations: [Aklan2Page]
})
export class Aklan2PageModule {}
