import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesS9PageRoutingModule } from './camarines-s9-routing.module';

import { CamarinesS9Page } from './camarines-s9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesS9PageRoutingModule
  ],
  declarations: [CamarinesS9Page]
})
export class CamarinesS9PageModule {}
