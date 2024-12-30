import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanaoDelnorte8PageRoutingModule } from './lanao-delnorte8-routing.module';

import { LanaoDelnorte8Page } from './lanao-delnorte8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanaoDelnorte8PageRoutingModule
  ],
  declarations: [LanaoDelnorte8Page]
})
export class LanaoDelnorte8PageModule {}
