import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marikina4PageRoutingModule } from './marikina4-routing.module';

import { Marikina4Page } from './marikina4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marikina4PageRoutingModule
  ],
  declarations: [Marikina4Page]
})
export class Marikina4PageModule {}
