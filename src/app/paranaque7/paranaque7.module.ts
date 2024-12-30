import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paranaque7PageRoutingModule } from './paranaque7-routing.module';

import { Paranaque7Page } from './paranaque7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paranaque7PageRoutingModule
  ],
  declarations: [Paranaque7Page]
})
export class Paranaque7PageModule {}
