import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marikina5PageRoutingModule } from './marikina5-routing.module';

import { Marikina5Page } from './marikina5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marikina5PageRoutingModule
  ],
  declarations: [Marikina5Page]
})
export class Marikina5PageModule {}
