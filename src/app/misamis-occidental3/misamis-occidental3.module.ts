import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOccidental3PageRoutingModule } from './misamis-occidental3-routing.module';

import { MisamisOccidental3Page } from './misamis-occidental3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOccidental3PageRoutingModule
  ],
  declarations: [MisamisOccidental3Page]
})
export class MisamisOccidental3PageModule {}
