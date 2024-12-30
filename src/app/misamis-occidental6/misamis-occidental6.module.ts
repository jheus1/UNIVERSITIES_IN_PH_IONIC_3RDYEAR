import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOccidental6PageRoutingModule } from './misamis-occidental6-routing.module';

import { MisamisOccidental6Page } from './misamis-occidental6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOccidental6PageRoutingModule
  ],
  declarations: [MisamisOccidental6Page]
})
export class MisamisOccidental6PageModule {}
