import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paranaque1PageRoutingModule } from './paranaque1-routing.module';

import { Paranaque1Page } from './paranaque1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paranaque1PageRoutingModule
  ],
  declarations: [Paranaque1Page]
})
export class Paranaque1PageModule {}
