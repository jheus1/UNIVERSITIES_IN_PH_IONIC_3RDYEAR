import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Laguna4PageRoutingModule } from './laguna4-routing.module';

import { Laguna4Page } from './laguna4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Laguna4PageRoutingModule
  ],
  declarations: [Laguna4Page]
})
export class Laguna4PageModule {}
