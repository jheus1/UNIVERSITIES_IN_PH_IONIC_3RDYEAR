import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marikina3PageRoutingModule } from './marikina3-routing.module';

import { Marikina3Page } from './marikina3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marikina3PageRoutingModule
  ],
  declarations: [Marikina3Page]
})
export class Marikina3PageModule {}
