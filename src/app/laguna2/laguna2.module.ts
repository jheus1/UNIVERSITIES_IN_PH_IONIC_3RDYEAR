import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Laguna2PageRoutingModule } from './laguna2-routing.module';

import { Laguna2Page } from './laguna2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Laguna2PageRoutingModule
  ],
  declarations: [Laguna2Page]
})
export class Laguna2PageModule {}
