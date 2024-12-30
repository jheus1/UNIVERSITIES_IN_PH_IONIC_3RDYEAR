import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marikina10PageRoutingModule } from './marikina10-routing.module';

import { Marikina10Page } from './marikina10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marikina10PageRoutingModule
  ],
  declarations: [Marikina10Page]
})
export class Marikina10PageModule {}
