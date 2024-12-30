import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaU9PageRoutingModule } from './la-u9-routing.module';

import { LaU9Page } from './la-u9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaU9PageRoutingModule
  ],
  declarations: [LaU9Page]
})
export class LaU9PageModule {}
