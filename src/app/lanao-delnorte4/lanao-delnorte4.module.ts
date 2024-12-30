import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanaoDelnorte4PageRoutingModule } from './lanao-delnorte4-routing.module';

import { LanaoDelnorte4Page } from './lanao-delnorte4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanaoDelnorte4PageRoutingModule
  ],
  declarations: [LanaoDelnorte4Page]
})
export class LanaoDelnorte4PageModule {}
