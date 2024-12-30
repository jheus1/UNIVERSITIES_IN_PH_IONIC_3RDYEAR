import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Laguna3PageRoutingModule } from './laguna3-routing.module';

import { Laguna3Page } from './laguna3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Laguna3PageRoutingModule
  ],
  declarations: [Laguna3Page]
})
export class Laguna3PageModule {}
