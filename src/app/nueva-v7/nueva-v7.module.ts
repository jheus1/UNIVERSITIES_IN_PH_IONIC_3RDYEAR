import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaV7PageRoutingModule } from './nueva-v7-routing.module';

import { NuevaV7Page } from './nueva-v7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaV7PageRoutingModule
  ],
  declarations: [NuevaV7Page]
})
export class NuevaV7PageModule {}
