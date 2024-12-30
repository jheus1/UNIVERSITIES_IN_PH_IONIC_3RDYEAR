import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaU3PageRoutingModule } from './la-u3-routing.module';

import { LaU3Page } from './la-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaU3PageRoutingModule
  ],
  declarations: [LaU3Page]
})
export class LaU3PageModule {}
