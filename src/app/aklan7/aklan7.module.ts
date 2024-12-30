import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aklan7PageRoutingModule } from './aklan7-routing.module';

import { Aklan7Page } from './aklan7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aklan7PageRoutingModule
  ],
  declarations: [Aklan7Page]
})
export class Aklan7PageModule {}
