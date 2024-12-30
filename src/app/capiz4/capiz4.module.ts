import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Capiz4PageRoutingModule } from './capiz4-routing.module';

import { Capiz4Page } from './capiz4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Capiz4PageRoutingModule
  ],
  declarations: [Capiz4Page]
})
export class Capiz4PageModule {}
