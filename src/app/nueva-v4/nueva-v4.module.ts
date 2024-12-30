import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaV4PageRoutingModule } from './nueva-v4-routing.module';

import { NuevaV4Page } from './nueva-v4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaV4PageRoutingModule
  ],
  declarations: [NuevaV4Page]
})
export class NuevaV4PageModule {}
