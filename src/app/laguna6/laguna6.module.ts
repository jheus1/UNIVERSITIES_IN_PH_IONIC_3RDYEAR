import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Laguna6PageRoutingModule } from './laguna6-routing.module';

import { Laguna6Page } from './laguna6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Laguna6PageRoutingModule
  ],
  declarations: [Laguna6Page]
})
export class Laguna6PageModule {}
