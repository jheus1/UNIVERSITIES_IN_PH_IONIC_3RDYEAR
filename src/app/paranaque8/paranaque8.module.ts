import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paranaque8PageRoutingModule } from './paranaque8-routing.module';

import { Paranaque8Page } from './paranaque8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paranaque8PageRoutingModule
  ],
  declarations: [Paranaque8Page]
})
export class Paranaque8PageModule {}
