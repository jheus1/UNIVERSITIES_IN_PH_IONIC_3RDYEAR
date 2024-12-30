import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOccidental10PageRoutingModule } from './misamis-occidental10-routing.module';

import { MisamisOccidental10Page } from './misamis-occidental10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOccidental10PageRoutingModule
  ],
  declarations: [MisamisOccidental10Page]
})
export class MisamisOccidental10PageModule {}
