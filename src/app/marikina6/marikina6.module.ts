import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marikina6PageRoutingModule } from './marikina6-routing.module';

import { Marikina6Page } from './marikina6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marikina6PageRoutingModule
  ],
  declarations: [Marikina6Page]
})
export class Marikina6PageModule {}
