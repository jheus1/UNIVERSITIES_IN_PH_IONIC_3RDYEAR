import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Capiz6PageRoutingModule } from './capiz6-routing.module';

import { Capiz6Page } from './capiz6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Capiz6PageRoutingModule
  ],
  declarations: [Capiz6Page]
})
export class Capiz6PageModule {}
