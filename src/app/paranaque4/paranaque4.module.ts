import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paranaque4PageRoutingModule } from './paranaque4-routing.module';

import { Paranaque4Page } from './paranaque4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paranaque4PageRoutingModule
  ],
  declarations: [Paranaque4Page]
})
export class Paranaque4PageModule {}
