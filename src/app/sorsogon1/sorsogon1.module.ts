import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sorsogon1PageRoutingModule } from './sorsogon1-routing.module';

import { Sorsogon1Page } from './sorsogon1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sorsogon1PageRoutingModule
  ],
  declarations: [Sorsogon1Page]
})
export class Sorsogon1PageModule {}
