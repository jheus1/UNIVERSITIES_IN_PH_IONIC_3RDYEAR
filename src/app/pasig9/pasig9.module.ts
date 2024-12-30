import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasig9PageRoutingModule } from './pasig9-routing.module';

import { Pasig9Page } from './pasig9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasig9PageRoutingModule
  ],
  declarations: [Pasig9Page]
})
export class Pasig9PageModule {}
