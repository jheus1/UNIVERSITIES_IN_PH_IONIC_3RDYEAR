import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camiguin4PageRoutingModule } from './camiguin4-routing.module';

import { Camiguin4Page } from './camiguin4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camiguin4PageRoutingModule
  ],
  declarations: [Camiguin4Page]
})
export class Camiguin4PageModule {}
