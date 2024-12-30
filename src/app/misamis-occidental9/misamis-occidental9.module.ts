import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOccidental9PageRoutingModule } from './misamis-occidental9-routing.module';

import { MisamisOccidental9Page } from './misamis-occidental9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOccidental9PageRoutingModule
  ],
  declarations: [MisamisOccidental9Page]
})
export class MisamisOccidental9PageModule {}
