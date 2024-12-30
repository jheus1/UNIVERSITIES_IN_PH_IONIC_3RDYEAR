import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurigaoDelnorte5PageRoutingModule } from './surigao-delnorte5-routing.module';

import { SurigaoDelnorte5Page } from './surigao-delnorte5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurigaoDelnorte5PageRoutingModule
  ],
  declarations: [SurigaoDelnorte5Page]
})
export class SurigaoDelnorte5PageModule {}
