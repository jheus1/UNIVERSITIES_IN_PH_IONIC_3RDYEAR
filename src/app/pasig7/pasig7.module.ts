import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasig7PageRoutingModule } from './pasig7-routing.module';

import { Pasig7Page } from './pasig7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasig7PageRoutingModule
  ],
  declarations: [Pasig7Page]
})
export class Pasig7PageModule {}
