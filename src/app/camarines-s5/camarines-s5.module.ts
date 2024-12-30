import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesS5PageRoutingModule } from './camarines-s5-routing.module';

import { CamarinesS5Page } from './camarines-s5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesS5PageRoutingModule
  ],
  declarations: [CamarinesS5Page]
})
export class CamarinesS5PageModule {}
