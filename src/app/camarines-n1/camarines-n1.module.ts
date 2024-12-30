import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesN1PageRoutingModule } from './camarines-n1-routing.module';

import { CamarinesN1Page } from './camarines-n1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesN1PageRoutingModule
  ],
  declarations: [CamarinesN1Page]
})
export class CamarinesN1PageModule {}
