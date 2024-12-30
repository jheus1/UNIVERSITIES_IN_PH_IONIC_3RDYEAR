import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthernS5PageRoutingModule } from './northern-s5-routing.module';

import { NorthernS5Page } from './northern-s5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthernS5PageRoutingModule
  ],
  declarations: [NorthernS5Page]
})
export class NorthernS5PageModule {}
