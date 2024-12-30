import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOccidental4PageRoutingModule } from './misamis-occidental4-routing.module';

import { MisamisOccidental4Page } from './misamis-occidental4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOccidental4PageRoutingModule
  ],
  declarations: [MisamisOccidental4Page]
})
export class MisamisOccidental4PageModule {}
