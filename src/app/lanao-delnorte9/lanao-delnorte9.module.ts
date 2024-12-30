import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanaoDelnorte9PageRoutingModule } from './lanao-delnorte9-routing.module';

import { LanaoDelnorte9Page } from './lanao-delnorte9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanaoDelnorte9PageRoutingModule
  ],
  declarations: [LanaoDelnorte9Page]
})
export class LanaoDelnorte9PageModule {}
