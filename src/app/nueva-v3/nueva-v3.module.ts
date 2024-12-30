import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaV3PageRoutingModule } from './nueva-v3-routing.module';

import { NuevaV3Page } from './nueva-v3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaV3PageRoutingModule
  ],
  declarations: [NuevaV3Page]
})
export class NuevaV3PageModule {}
