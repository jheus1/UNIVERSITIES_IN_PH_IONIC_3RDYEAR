import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marikina9PageRoutingModule } from './marikina9-routing.module';

import { Marikina9Page } from './marikina9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marikina9PageRoutingModule
  ],
  declarations: [Marikina9Page]
})
export class Marikina9PageModule {}
