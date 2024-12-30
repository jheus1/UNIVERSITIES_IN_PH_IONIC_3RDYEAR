import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camiguin2PageRoutingModule } from './camiguin2-routing.module';

import { Camiguin2Page } from './camiguin2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camiguin2PageRoutingModule
  ],
  declarations: [Camiguin2Page]
})
export class Camiguin2PageModule {}
