import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesS1PageRoutingModule } from './camarines-s1-routing.module';

import { CamarinesS1Page } from './camarines-s1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesS1PageRoutingModule
  ],
  declarations: [CamarinesS1Page]
})
export class CamarinesS1PageModule {}
