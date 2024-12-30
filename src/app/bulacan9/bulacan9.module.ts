import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bulacan9PageRoutingModule } from './bulacan9-routing.module';

import { Bulacan9Page } from './bulacan9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bulacan9PageRoutingModule
  ],
  declarations: [Bulacan9Page]
})
export class Bulacan9PageModule {}
