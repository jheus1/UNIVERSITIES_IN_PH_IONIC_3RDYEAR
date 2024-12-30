import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanaoDelnorte7PageRoutingModule } from './lanao-delnorte7-routing.module';

import { LanaoDelnorte7Page } from './lanao-delnorte7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanaoDelnorte7PageRoutingModule
  ],
  declarations: [LanaoDelnorte7Page]
})
export class LanaoDelnorte7PageModule {}
