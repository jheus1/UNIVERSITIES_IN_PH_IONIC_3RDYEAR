import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanaoDelnorte6PageRoutingModule } from './lanao-delnorte6-routing.module';

import { LanaoDelnorte6Page } from './lanao-delnorte6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanaoDelnorte6PageRoutingModule
  ],
  declarations: [LanaoDelnorte6Page]
})
export class LanaoDelnorte6PageModule {}
