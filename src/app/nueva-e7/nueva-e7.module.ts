import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaE7PageRoutingModule } from './nueva-e7-routing.module';

import { NuevaE7Page } from './nueva-e7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaE7PageRoutingModule
  ],
  declarations: [NuevaE7Page]
})
export class NuevaE7PageModule {}
