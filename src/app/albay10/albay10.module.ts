import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Albay10PageRoutingModule } from './albay10-routing.module';

import { Albay10Page } from './albay10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Albay10PageRoutingModule
  ],
  declarations: [Albay10Page]
})
export class Albay10PageModule {}
