import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaE6PageRoutingModule } from './nueva-e6-routing.module';

import { NuevaE6Page } from './nueva-e6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaE6PageRoutingModule
  ],
  declarations: [NuevaE6Page]
})
export class NuevaE6PageModule {}
