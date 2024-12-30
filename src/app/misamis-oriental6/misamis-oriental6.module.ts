import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOriental6PageRoutingModule } from './misamis-oriental6-routing.module';

import { MisamisOriental6Page } from './misamis-oriental6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOriental6PageRoutingModule
  ],
  declarations: [MisamisOriental6Page]
})
export class MisamisOriental6PageModule {}
