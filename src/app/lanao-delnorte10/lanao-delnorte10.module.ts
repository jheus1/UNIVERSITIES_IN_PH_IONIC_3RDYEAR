import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanaoDelnorte10PageRoutingModule } from './lanao-delnorte10-routing.module';

import { LanaoDelnorte10Page } from './lanao-delnorte10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanaoDelnorte10PageRoutingModule
  ],
  declarations: [LanaoDelnorte10Page]
})
export class LanaoDelnorte10PageModule {}
