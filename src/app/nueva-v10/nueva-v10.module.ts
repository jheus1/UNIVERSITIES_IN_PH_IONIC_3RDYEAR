import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaV10PageRoutingModule } from './nueva-v10-routing.module';

import { NuevaV10Page } from './nueva-v10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaV10PageRoutingModule
  ],
  declarations: [NuevaV10Page]
})
export class NuevaV10PageModule {}
