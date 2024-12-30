import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaE4PageRoutingModule } from './nueva-e4-routing.module';

import { NuevaE4Page } from './nueva-e4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaE4PageRoutingModule
  ],
  declarations: [NuevaE4Page]
})
export class NuevaE4PageModule {}
