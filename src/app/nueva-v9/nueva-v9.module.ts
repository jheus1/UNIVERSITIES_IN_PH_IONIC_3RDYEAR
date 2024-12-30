import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaV9PageRoutingModule } from './nueva-v9-routing.module';

import { NuevaV9Page } from './nueva-v9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaV9PageRoutingModule
  ],
  declarations: [NuevaV9Page]
})
export class NuevaV9PageModule {}
