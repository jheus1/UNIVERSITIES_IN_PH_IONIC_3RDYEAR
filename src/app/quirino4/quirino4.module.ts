import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quirino4PageRoutingModule } from './quirino4-routing.module';

import { Quirino4Page } from './quirino4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quirino4PageRoutingModule
  ],
  declarations: [Quirino4Page]
})
export class Quirino4PageModule {}
