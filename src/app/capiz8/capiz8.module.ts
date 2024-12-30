import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Capiz8PageRoutingModule } from './capiz8-routing.module';

import { Capiz8Page } from './capiz8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Capiz8PageRoutingModule
  ],
  declarations: [Capiz8Page]
})
export class Capiz8PageModule {}
