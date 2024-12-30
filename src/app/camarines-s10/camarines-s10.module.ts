import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesS10PageRoutingModule } from './camarines-s10-routing.module';

import { CamarinesS10Page } from './camarines-s10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesS10PageRoutingModule
  ],
  declarations: [CamarinesS10Page]
})
export class CamarinesS10PageModule {}
