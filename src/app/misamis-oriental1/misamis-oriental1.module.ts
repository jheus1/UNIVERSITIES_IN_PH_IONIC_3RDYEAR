import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOriental1PageRoutingModule } from './misamis-oriental1-routing.module';

import { MisamisOriental1Page } from './misamis-oriental1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOriental1PageRoutingModule
  ],
  declarations: [MisamisOriental1Page]
})
export class MisamisOriental1PageModule {}
