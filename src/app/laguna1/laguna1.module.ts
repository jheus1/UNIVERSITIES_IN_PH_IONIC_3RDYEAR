import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Laguna1PageRoutingModule } from './laguna1-routing.module';

import { Laguna1Page } from './laguna1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Laguna1PageRoutingModule
  ],
  declarations: [Laguna1Page]
})
export class Laguna1PageModule {}
