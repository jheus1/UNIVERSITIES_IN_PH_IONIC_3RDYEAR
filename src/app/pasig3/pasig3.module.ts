import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasig3PageRoutingModule } from './pasig3-routing.module';

import { Pasig3Page } from './pasig3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasig3PageRoutingModule
  ],
  declarations: [Pasig3Page]
})
export class Pasig3PageModule {}
