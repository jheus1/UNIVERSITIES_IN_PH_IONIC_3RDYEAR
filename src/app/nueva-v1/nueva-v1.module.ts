import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaV1PageRoutingModule } from './nueva-v1-routing.module';

import { NuevaV1Page } from './nueva-v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaV1PageRoutingModule
  ],
  declarations: [NuevaV1Page]
})
export class NuevaV1PageModule {}
