import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanaoDelnorte2PageRoutingModule } from './lanao-delnorte2-routing.module';

import { LanaoDelnorte2Page } from './lanao-delnorte2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanaoDelnorte2PageRoutingModule
  ],
  declarations: [LanaoDelnorte2Page]
})
export class LanaoDelnorte2PageModule {}
