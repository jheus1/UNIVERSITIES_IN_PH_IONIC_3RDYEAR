import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iloilo5PageRoutingModule } from './iloilo5-routing.module';

import { Iloilo5Page } from './iloilo5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iloilo5PageRoutingModule
  ],
  declarations: [Iloilo5Page]
})
export class Iloilo5PageModule {}
