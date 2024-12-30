import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanaoDelnorte1PageRoutingModule } from './lanao-delnorte1-routing.module';

import { LanaoDelnorte1Page } from './lanao-delnorte1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanaoDelnorte1PageRoutingModule
  ],
  declarations: [LanaoDelnorte1Page]
})
export class LanaoDelnorte1PageModule {}
