import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paranaque3PageRoutingModule } from './paranaque3-routing.module';

import { Paranaque3Page } from './paranaque3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paranaque3PageRoutingModule
  ],
  declarations: [Paranaque3Page]
})
export class Paranaque3PageModule {}
