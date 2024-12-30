import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bataan7PageRoutingModule } from './bataan7-routing.module';

import { Bataan7Page } from './bataan7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bataan7PageRoutingModule
  ],
  declarations: [Bataan7Page]
})
export class Bataan7PageModule {}
