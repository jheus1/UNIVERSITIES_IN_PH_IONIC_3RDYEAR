import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marikina1PageRoutingModule } from './marikina1-routing.module';

import { Marikina1Page } from './marikina1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marikina1PageRoutingModule
  ],
  declarations: [Marikina1Page]
})
export class Marikina1PageModule {}
