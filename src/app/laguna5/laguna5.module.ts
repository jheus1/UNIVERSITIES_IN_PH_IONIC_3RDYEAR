import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Laguna5PageRoutingModule } from './laguna5-routing.module';

import { Laguna5Page } from './laguna5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Laguna5PageRoutingModule
  ],
  declarations: [Laguna5Page]
})
export class Laguna5PageModule {}
