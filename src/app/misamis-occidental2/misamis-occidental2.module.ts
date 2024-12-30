import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOccidental2PageRoutingModule } from './misamis-occidental2-routing.module';

import { MisamisOccidental2Page } from './misamis-occidental2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOccidental2PageRoutingModule
  ],
  declarations: [MisamisOccidental2Page]
})
export class MisamisOccidental2PageModule {}
