import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesS8PageRoutingModule } from './camarines-s8-routing.module';

import { CamarinesS8Page } from './camarines-s8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesS8PageRoutingModule
  ],
  declarations: [CamarinesS8Page]
})
export class CamarinesS8PageModule {}
