import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paranaque9PageRoutingModule } from './paranaque9-routing.module';

import { Paranaque9Page } from './paranaque9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paranaque9PageRoutingModule
  ],
  declarations: [Paranaque9Page]
})
export class Paranaque9PageModule {}
