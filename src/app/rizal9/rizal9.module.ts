import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rizal9PageRoutingModule } from './rizal9-routing.module';

import { Rizal9Page } from './rizal9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rizal9PageRoutingModule
  ],
  declarations: [Rizal9Page]
})
export class Rizal9PageModule {}
