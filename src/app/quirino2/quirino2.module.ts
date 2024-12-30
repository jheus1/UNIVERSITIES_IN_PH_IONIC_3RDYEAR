import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quirino2PageRoutingModule } from './quirino2-routing.module';

import { Quirino2Page } from './quirino2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quirino2PageRoutingModule
  ],
  declarations: [Quirino2Page]
})
export class Quirino2PageModule {}
