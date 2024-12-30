import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Laguna9PageRoutingModule } from './laguna9-routing.module';

import { Laguna9Page } from './laguna9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Laguna9PageRoutingModule
  ],
  declarations: [Laguna9Page]
})
export class Laguna9PageModule {}
