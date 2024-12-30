import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaV6PageRoutingModule } from './nueva-v6-routing.module';

import { NuevaV6Page } from './nueva-v6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaV6PageRoutingModule
  ],
  declarations: [NuevaV6Page]
})
export class NuevaV6PageModule {}
