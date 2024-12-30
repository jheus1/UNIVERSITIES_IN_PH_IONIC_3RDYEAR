import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanaoDelnorte5PageRoutingModule } from './lanao-delnorte5-routing.module';

import { LanaoDelnorte5Page } from './lanao-delnorte5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanaoDelnorte5PageRoutingModule
  ],
  declarations: [LanaoDelnorte5Page]
})
export class LanaoDelnorte5PageModule {}
