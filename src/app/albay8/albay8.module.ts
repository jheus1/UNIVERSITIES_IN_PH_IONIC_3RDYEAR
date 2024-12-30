import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Albay8PageRoutingModule } from './albay8-routing.module';

import { Albay8Page } from './albay8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Albay8PageRoutingModule
  ],
  declarations: [Albay8Page]
})
export class Albay8PageModule {}
