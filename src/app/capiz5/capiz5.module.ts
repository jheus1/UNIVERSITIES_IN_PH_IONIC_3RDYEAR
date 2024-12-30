import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Capiz5PageRoutingModule } from './capiz5-routing.module';

import { Capiz5Page } from './capiz5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Capiz5PageRoutingModule
  ],
  declarations: [Capiz5Page]
})
export class Capiz5PageModule {}
