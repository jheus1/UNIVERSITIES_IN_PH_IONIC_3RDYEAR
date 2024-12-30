import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOriental9PageRoutingModule } from './misamis-oriental9-routing.module';

import { MisamisOriental9Page } from './misamis-oriental9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOriental9PageRoutingModule
  ],
  declarations: [MisamisOriental9Page]
})
export class MisamisOriental9PageModule {}
