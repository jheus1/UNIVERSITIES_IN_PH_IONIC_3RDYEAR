import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paranaque6PageRoutingModule } from './paranaque6-routing.module';

import { Paranaque6Page } from './paranaque6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paranaque6PageRoutingModule
  ],
  declarations: [Paranaque6Page]
})
export class Paranaque6PageModule {}
