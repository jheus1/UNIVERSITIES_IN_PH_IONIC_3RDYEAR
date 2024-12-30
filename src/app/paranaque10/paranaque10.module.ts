import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paranaque10PageRoutingModule } from './paranaque10-routing.module';

import { Paranaque10Page } from './paranaque10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paranaque10PageRoutingModule
  ],
  declarations: [Paranaque10Page]
})
export class Paranaque10PageModule {}
