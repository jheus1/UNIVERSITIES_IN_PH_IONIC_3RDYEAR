import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quirino10PageRoutingModule } from './quirino10-routing.module';

import { Quirino10Page } from './quirino10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quirino10PageRoutingModule
  ],
  declarations: [Quirino10Page]
})
export class Quirino10PageModule {}
