import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marikina2PageRoutingModule } from './marikina2-routing.module';

import { Marikina2Page } from './marikina2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marikina2PageRoutingModule
  ],
  declarations: [Marikina2Page]
})
export class Marikina2PageModule {}
