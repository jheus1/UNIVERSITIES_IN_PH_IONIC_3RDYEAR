import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Albay4PageRoutingModule } from './albay4-routing.module';

import { Albay4Page } from './albay4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Albay4PageRoutingModule
  ],
  declarations: [Albay4Page]
})
export class Albay4PageModule {}
